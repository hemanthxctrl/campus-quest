import React from 'react';
import { mockLeaderboard } from '../data/mockData';
import { Trophy, Medal, Award } from 'lucide-react';

const Leaderboard = () => {
  return (
    <div className="animate-fade-in" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <header className="card-header" style={{ marginBottom: '2rem', textAlign: 'center', justifyContent: 'center' }}>
        <div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
            <Trophy className="text-gradient" size={40} /> Campus Legends
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>Top students based on total XP</p>
        </div>
      </header>

      <div className="glass-panel" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {mockLeaderboard.map((student, index) => {
            const isTop3 = index < 3;
            return (
              <div key={student.rank} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                padding: '1rem 1.5rem', 
                background: isTop3 ? 'rgba(255,255,255,0.05)' : 'transparent',
                border: isTop3 ? '1px solid rgba(255,255,255,0.1)' : '1px solid transparent',
                borderBottom: !isTop3 ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(255,255,255,0.1)',
                borderRadius: isTop3 ? 'var(--radius-md)' : '0',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
              >
                
                <div style={{ width: '40px', fontWeight: 'bold', fontSize: '1.2rem', color: isTop3 ? 'var(--text-primary)' : 'var(--text-muted)' }}>
                  {index === 0 ? <Trophy color="#fbbf24" size={24} /> : 
                   index === 1 ? <Medal color="#9ca3af" size={24} /> : 
                   index === 2 ? <Award color="#b45309" size={24} /> : 
                   `#${student.rank}`}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
                  <img src={student.avatar} alt={student.name} style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{student.name}</h3>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Level {student.level}</span>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-primary)' }}>{student.xp}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>XP</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
