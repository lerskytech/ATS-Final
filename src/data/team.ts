export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
}

export const team: TeamMember[] = [
  {
    name: 'Alex Johnson',
    role: 'Lead Developer',
    avatar: 'https://placehold.co/150x150/00FFFF/000000/png?text=AJ',
  },
  {
    name: 'Maria Garcia',
    role: 'Creative Director',
    avatar: 'https://placehold.co/150x150/FF00FF/000000/png?text=MG',
  },
  {
    name: 'Sam Lee',
    role: 'Project Manager',
    avatar: 'https://placehold.co/150x150/FFFFFF/000000/png?text=SL',
  },
  {
    name: 'Emily White',
    role: 'UI/UX Specialist',
    avatar: 'https://placehold.co/150x150/CCCCCC/000000/png?text=EW',
  },
];
