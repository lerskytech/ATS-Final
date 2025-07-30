export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
}

export const team: TeamMember[] = [
  {
    name: 'Alex Johnson',
    role: 'Lead Developer',
    avatar: '/assets/avatar_1.png',
  },
  {
    name: 'Maria Garcia',
    role: 'Creative Director',
    avatar: '/assets/avatar_2.png',
  },
  {
    name: 'Sam Lee',
    role: 'Project Manager',
    avatar: '/assets/avatar_1.png',
  },
    {
    name: 'Emily White',
    role: 'UI/UX Specialist',
    avatar: '/assets/avatar_2.png',
  },
];
