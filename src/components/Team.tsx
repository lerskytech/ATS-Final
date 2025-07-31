import { motion } from 'framer-motion';
import RatioBox from './RatioBox';
import { imageMap } from '../utils/imageMap';

const team = [
  {
    name: 'Alex Johnson',
    role: 'Lead Developer',
    avatar: '/assets/avatars/team1.webp',
  },
  {
    name: 'Maria Garcia',
    role: 'Creative Director',
    avatar: '/assets/avatars/team2.webp',
  },
  {
    name: 'Sam Lee',
    role: 'Project Manager',
    avatar: '/assets/avatars/team3.webp',
  },
  {
    name: 'Emily White',
    role: 'UI/UX Specialist',
    avatar: '/assets/avatars/team4.webp',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Team = () => {
  return (
    <section id="team" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">Meet the Innovators</h2>
        <p className="text-lg text-gray-400 mb-12">The creative minds driving our success.</p>
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {team.map((member, index) => {
            const imageData = imageMap[member.avatar as keyof typeof imageMap];
            return (
              <motion.div 
                key={index}
                className="text-center group"
                variants={itemVariants}
              >
                <motion.div 
                  className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-700 transition-all duration-300 group-hover:border-cyan-400 group-hover:scale-110"
                  whileHover={{ boxShadow: '0 0 20px #00FFFF' }}
                >
                  <RatioBox 
                    src={member.avatar} 
                    alt={imageData.useCase} 
                    ratio={imageData.ratio} 
                  />
                </motion.div>
                <h3 className="text-xl font-bold mt-4 text-white">{member.name}</h3>
                <p className="text-cyan-400">{member.role}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
