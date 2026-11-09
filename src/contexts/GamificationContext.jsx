import React, { createContext, useContext, useState, useEffect } from 'react';

const GamificationContext = createContext();

export const useGamification = () => useContext(GamificationContext);

export const GamificationProvider = ({ children }) => {
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [streak, setStreak] = useState(0);
  const [badges, setBadges] = useState([]);
  const [completedQuests, setCompletedQuests] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('campusQuestData');
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setXp(parsed.xp || 0);
      setLevel(parsed.level || 1);
      setStreak(parsed.streak || 0);
      setBadges(parsed.badges || []);
      setCompletedQuests(parsed.completedQuests || []);
    } else {
      // Give initial streak for logging in
      setStreak(1);
    }
  }, []);

  // Save to localStorage when state changes
  useEffect(() => {
    localStorage.setItem('campusQuestData', JSON.stringify({
      xp, level, streak, badges, completedQuests
    }));
  }, [xp, level, streak, badges, completedQuests]);

  const levelThresholds = [0, 100, 250, 500, 1000, 2000, 5000];

  const calculateLevel = (currentXp) => {
    for (let i = levelThresholds.length - 1; i >= 0; i--) {
      if (currentXp >= levelThresholds[i]) {
        return i + 1;
      }
    }
    return 1;
  };

  const addXp = (amount, source) => {
    setXp(prevXp => {
      const newXp = prevXp + amount;
      const newLevel = calculateLevel(newXp);
      
      if (newLevel > level) {
        setLevel(newLevel);
        // Could trigger a level up animation/toast here
      }
      
      return newXp;
    });
  };

  const completeQuest = (quest) => {
    if (completedQuests.includes(quest.id)) return false; // Already completed
    
    setCompletedQuests([...completedQuests, quest.id]);
    addXp(quest.xpReward, 'quest');
    
    // Check for badge unlocks (e.g., first quest)
    if (completedQuests.length === 0 && !badges.includes('First Steps')) {
      setBadges([...badges, 'First Steps']);
    }

    return true;
  };

  return (
    <GamificationContext.Provider value={{
      xp,
      level,
      streak,
      badges,
      completedQuests,
      addXp,
      completeQuest,
      levelThresholds
    }}>
      {children}
    </GamificationContext.Provider>
  );
};
