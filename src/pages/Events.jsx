import React, { useState } from 'react';
import { mockEvents } from '../data/mockData';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Events = () => {
  const [events, setEvents] = useState(mockEvents);

  const handleRegister = (id) => {
    setEvents(events.map(event => 
      event.id === id ? { ...event, registered: !event.registered } : event
    ));
  };

  return (
    <div className="animate-fade-in" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <header className="card-header" style={{ marginBottom: '2rem' }}>
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Calendar className="text-gradient" size={32} /> Campus Events
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>Discover and participate in Vignan University events.</p>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
        {events.map(event => (
          <div key={event.id} className="glass-panel" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: '200px', width: '100%', position: 'relative' }}>
              <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                <span className="badge" style={{ background: 'rgba(0,0,0,0.7)', color: '#10b981', backdropFilter: 'blur(4px)' }}>
                  +{event.xpReward} XP
                </span>
              </div>
            </div>
            
            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{event.title}</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Calendar size={16} /> <span>{event.date}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Clock size={16} /> <span>{event.time}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <MapPin size={16} /> <span>{event.location}</span>
                </div>
              </div>
              
              <p style={{ fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>{event.description}</p>
              
              <button 
                className={`btn ${event.registered ? 'btn-glass' : 'btn-primary'}`} 
                style={{ width: '100%', 
                  background: event.registered ? 'rgba(16, 185, 129, 0.1)' : '',
                  color: event.registered ? '#10b981' : '',
                  borderColor: event.registered ? '#10b981' : ''
                }}
                onClick={() => handleRegister(event.id)}
              >
                {event.registered ? 'Registered' : 'Register Now'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
