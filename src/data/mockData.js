export const mockQuests = [
  {
    id: 'q1',
    title: 'Complete DBMS Assignment',
    category: 'Academic',
    xpReward: 50,
    description: 'Submit your DBMS assignment on normal forms before the deadline.',
    icon: '📚'
  },
  {
    id: 'q2',
    title: 'Attend Coding Workshop',
    category: 'Events',
    xpReward: 30,
    description: 'Participate in the weekend Python coding workshop.',
    icon: '💻'
  },
  {
    id: 'q3',
    title: 'Complete Quiz',
    category: 'Academic',
    xpReward: 20,
    description: 'Take the weekly aptitude quiz on the Vignan portal.',
    icon: '🧠'
  },
  {
    id: 'q4',
    title: 'Win Hackathon',
    category: 'Challenges',
    xpReward: 200,
    description: 'Secure 1st place in the upcoming Vignan V-Hack event.',
    icon: '🏆'
  },
  {
    id: 'q5',
    title: 'Library Helper',
    category: 'Community',
    xpReward: 40,
    description: 'Volunteer at the NTR Central Library for 2 hours.',
    icon: '🤝'
  }
];

export const mockEvents = [
  {
    id: 'e1',
    title: 'Mahotsav 2027',
    date: 'Feb 05 - Feb 07',
    time: '09:00 AM',
    location: 'Open Air Theatre, Vignan University',
    description: 'The annual cultural and sports fest of Vignan University. Join the celebration!',
    xpReward: 100,
    registered: false,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'e2',
    title: 'Srujanankura Tech Fest',
    date: 'Mar 15, 2027',
    time: '10:00 AM',
    location: 'A-Block Seminar Hall',
    description: 'National level tech symposium featuring paper presentations and robotics competitions.',
    xpReward: 75,
    registered: true,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'e3',
    title: 'Guest Lecture: AI in Healthcare',
    date: 'Nov 20, 2026',
    time: '02:00 PM',
    location: 'H-Block Auditorium',
    description: 'An insightful talk by industry experts on the future of AI in the medical field.',
    xpReward: 30,
    registered: false,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export const mockLeaderboard = [
  { rank: 1, name: 'Sreenivas', xp: 4500, level: 6, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sreenivas' },
  { rank: 2, name: 'Rahul K.', xp: 4200, level: 6, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul' },
  { rank: 3, name: 'Priya M.', xp: 3950, level: 5, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya' },
  { rank: 4, name: 'Ananya S.', xp: 3800, level: 5, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya' },
  { rank: 5, name: 'Vikram R.', xp: 3100, level: 5, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram' },
];
