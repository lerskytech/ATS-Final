export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: 'Alpha Trust Solutions transformed our digital presence. Their strategic approach to web development and branding is unparalleled. We saw a 200% increase in engagement.',
    author: 'Jane Doe',
    role: 'CEO, Innovate Inc.',
    avatar: '/assets/12.png',
  },
  {
    quote: 'The team at ATS is brilliant. They delivered a visually stunning and high-performance website that has become the cornerstone of our marketing efforts. Highly recommended!',
    author: 'John Smith',
    role: 'Marketing Director, TechCorp',
    avatar: '/assets/13.png',
  },
];
