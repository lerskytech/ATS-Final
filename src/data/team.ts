export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
}

export const team: TeamMember[] = [
  {
    name: 'Alex Johnson',
    role: 'Lead Developer',
    avatar: '/assets/8.png',
  },
  {
    name: 'Maria Garcia',
    role: 'Creative Director',
    avatar: '/assets/9.png',
  },
  {
    name: 'Sam Lee',
    role: 'Project Manager',
    avatar: '/assets/10.png',
  },
  {
    name: 'Emily White',
    role: 'UI/UX Specialist',
    avatar: '/assets/11.png',
  },
];
