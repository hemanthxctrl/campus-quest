import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Target, Calendar, User, Trophy, Flame } from 'lucide-react';
import { useGamification } from '../contexts/GamificationContext';

const Sidebar = () => {
  const { level, streak } = useGamification();

  const navItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Quests', path: '/quests', icon: Target },
    { name: 'Events', path: '/events', icon: Calendar },
    { name: 'Leaderboard', path: '/leaderboard', icon: Trophy },
    { name: 'Profile', path: '/profile', icon: User },
  ];

  return (
    <aside className="sidebar glass-panel" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '260px',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem 1.5rem',
      borderRadius: '0',
      borderRight: 'var(--glass-border)',
      borderTop: 'none',
      borderBottom: 'none',
      borderLeft: 'none',
      zIndex: 100,
    }}>
      <div className="logo-container" style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h1 className="text-gradient" style={{ fontSize: '1.75rem', fontWeight: 800 }}>CampusQuest</h1>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Vignan University</p>
      </div>

      <div className="user-mini-stats" style={{
        background: 'rgba(255,255,255,0.03)',
        padding: '1rem',
        borderRadius: 'var(--radius-md)',
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>LEVEL</div>
          <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-primary)' }}>{level}</div>
        </div>
        <div style={{ width: '1px', height: '30px', background: 'var(--glass-border)' }}></div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>STREAK</div>
          <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Flame size={16} /> {streak}
          </div>
        </div>
      </div>

      <nav style={{ flex: 1 }}>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                style={({ isActive }) => ({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-sm)',
                  color: isActive ? 'white' : 'var(--text-secondary)',
                  background: isActive ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
                  borderLeft: isActive ? '3px solid var(--accent-primary)' : '3px solid transparent',
                  textDecoration: 'none',
                  fontWeight: isActive ? 600 : 500,
                  transition: 'all 0.2s ease'
                })}
              >
                <item.icon size={20} color="currentColor" />
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer" style={{ marginTop: 'auto', textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
        <p>Turn Campus Life Into a Quest.</p>
      </div>
    </aside>
  );
};

export default Sidebar;
