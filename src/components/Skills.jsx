import { motion } from 'framer-motion';

const skills = [
    "React", "JavaScript", "HTML5", "CSS3", "Node.js",
    "Python", "Java", "Git", "Figma", "UI/UX",
    "Tailwind", "Framer Motion", "SQL", "MongoDB"
];

const Skills = () => {
    return (
        <section id="skills" className="section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}
                >
                    My <span className="gradient-text">Skills</span>
                </motion.h2>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.1, borderColor: 'var(--accent-cyan)', boxShadow: '0 0 15px rgba(0, 242, 255, 0.3)' }}
                            className="glass"
                            style={{
                                padding: '1rem 2rem',
                                borderRadius: '50px',
                                cursor: 'default',
                                fontSize: '1.1rem',
                                border: '1px solid rgba(255,255,255,0.1)',
                                transition: 'border-color 0.3s ease'
                            }}
                        >
                            {skill}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
