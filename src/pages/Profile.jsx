import React from 'react';
import { useGamification } from '../contexts/GamificationContext';
import { User, Shield, Star, Award, BookOpen } from 'lucide-react';

const Profile = () => {
  const { xp, level, streak, badges, completedQuests } = useGamification();

  return (
    <div className="animate-fade-in" style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <header className="card-header" style={{ marginBottom: '2rem' }}>
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <User className="text-gradient" size={32} /> Student Profile
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>Your CampusQuest journey</p>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
        
        {/* Left Column - ID Card */}
        <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Student" alt="Profile" style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: '4px solid var(--accent-primary)' }} />
            <div style={{ position: 'absolute', bottom: 0, right: 0, background: 'var(--bg-primary)', borderRadius: '50%', padding: '4px' }}>
              <div style={{ background: 'var(--gradient-primary)', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.9rem' }}>
                {level}
              </div>
            </div>
          </div>
          
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Student Name</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Computer Science Engg.</p>

          <div style={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{xp}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Total XP</div>
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{completedQuests.length}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Quests Done</div>
            </div>
          </div>
        </div>

        {/* Right Column - Badges & Stats */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 className="card-title" style={{ marginBottom: '1.5rem' }}><Shield className="text-gradient" size={24} /> Achievements</h3>
            
            {badges.length > 0 ? (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {badges.map((badge, index) => (
                  <div key={index} style={{ 
                    background: 'rgba(99, 102, 241, 0.1)', 
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                    padding: '1rem',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                    width: '100px',
                    textAlign: 'center'
                  }}>
                    <Award size={32} color="var(--accent-primary)" />
                    <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>{badge}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ color: 'var(--text-muted)' }}>Complete quests to unlock badges!</p>
            )}
          </div>

          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 className="card-title" style={{ marginBottom: '1.5rem' }}><BookOpen className="text-gradient" size={24} /> Participation Stats</h3>
            <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.2)', borderRadius: 'var(--radius-md)', border: '1px dashed rgba(255,255,255,0.1)' }}>
               <p style={{ color: 'var(--text-muted)' }}>[Chart Placeholder: XP Gain Over Time]</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
