import React from 'react';
import { useGamification } from '../contexts/GamificationContext';
import { mockQuests } from '../data/mockData';
import { Trophy, Zap, Star, ShieldCheck } from 'lucide-react';

const Dashboard = () => {
  const { xp, level, streak, badges, levelThresholds } = useGamification();
  
  // Calculate progress to next level
  const currentLevelXp = levelThresholds[level - 1];
  const nextLevelXp = levelThresholds[level] || currentLevelXp + 1000;
  const progressPercent = Math.min(100, Math.max(0, ((xp - currentLevelXp) / (nextLevelXp - currentLevelXp)) * 100));

  return (
    <div className="animate-fade-in" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <header className="card-header">
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Welcome back, Student! 👋</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Ready to conquer today's quests?</p>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
        
        {/* Level & XP Card */}
        <div className="glass-panel" style={{ padding: '2rem', gridColumn: 'span 2' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 className="card-title"><Zap style={{ color: 'var(--accent-secondary)' }} /> XP Progress</h3>
            <span className="badge badge-xp">Level {level}</span>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            <span>{xp} XP</span>
            <span>{nextLevelXp} XP</span>
          </div>
          
          <div style={{ width: '100%', height: '12px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden' }}>
            <div style={{ 
              width: `${progressPercent}%`, 
              height: '100%', 
              background: 'var(--gradient-primary)',
              borderRadius: '10px',
              transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)'
            }}></div>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)', textAlign: 'center' }}>
            Earn {nextLevelXp - xp} more XP to reach Level {level + 1}!
          </p>
        </div>

        {/* Stats Card */}
        <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h3 className="card-title"><Trophy style={{ color: 'var(--accent-primary)' }} /> Campus Stats</h3>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ padding: '8px', background: 'rgba(245, 158, 11, 0.2)', borderRadius: '50%', color: '#f59e0b' }}>
                <Star size={20} />
              </div>
              <span style={{ fontWeight: 500 }}>Current Streak</span>
            </div>
            <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>{streak} <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>days</span></span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ padding: '8px', background: 'rgba(16, 185, 129, 0.2)', borderRadius: '50%', color: '#10b981' }}>
                <ShieldCheck size={20} />
              </div>
              <span style={{ fontWeight: 500 }}>Badges Earned</span>
            </div>
            <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>{badges.length}</span>
          </div>
        </div>
      </div>

      {/* Daily Quests Summary */}
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Today's Highlighted Quests</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {mockQuests.slice(0, 3).map(quest => (
          <div key={quest.id} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div style={{ fontSize: '2rem' }}>{quest.icon}</div>
              <span className="badge badge-xp">+{quest.xpReward} XP</span>
            </div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{quest.title}</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem', flex: 1 }}>{quest.description}</p>
            <button className="btn btn-glass" style={{ width: '100%' }}>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
