import React from 'react';
import { useGamification } from '../contexts/GamificationContext';
import { mockQuests } from '../data/mockData';
import { Target, CheckCircle2 } from 'lucide-react';

const Quests = () => {
  const { completedQuests, completeQuest } = useGamification();

  const handleComplete = (quest) => {
    completeQuest(quest);
  };

  return (
    <div className="animate-fade-in" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <header className="card-header" style={{ marginBottom: '2rem' }}>
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Target className="text-gradient" size={32} /> Available Quests
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>Complete tasks to earn XP and level up!</p>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {mockQuests.map(quest => {
          const isCompleted = completedQuests.includes(quest.id);
          
          return (
            <div key={quest.id} className="glass-panel" style={{ 
              padding: '1.5rem', 
              display: 'flex', 
              flexDirection: 'column',
              opacity: isCompleted ? 0.6 : 1,
              position: 'relative',
              overflow: 'hidden'
            }}>
              {isCompleted && (
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0, bottom: 0,
                  background: 'rgba(16, 185, 129, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10,
                  backdropFilter: 'blur(2px)'
                }}>
                  <div style={{ background: '#10b981', color: 'white', padding: '8px 16px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold' }}>
                    <CheckCircle2 size={20} /> COMPLETED
                  </div>
                </div>
              )}
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ fontSize: '2.5rem' }}>{quest.icon}</div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
                  <span className="badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'var(--text-primary)' }}>{quest.category}</span>
                  <span className="badge badge-xp">+{quest.xpReward} XP</span>
                </div>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{quest.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>{quest.description}</p>
              
              <button 
                className="btn btn-primary" 
                style={{ width: '100%' }}
                onClick={() => handleComplete(quest)}
                disabled={isCompleted}
              >
                Complete Quest
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Quests;
