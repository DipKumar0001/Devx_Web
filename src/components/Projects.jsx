import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        title: "E-Commerce Dashboard",
        description: "A comprehensive dashboard for managing online stores, featuring real-time analytics and inventory management.",
        tags: ["React", "Chart.js", "Node.js"],
        links: { github: "#", demo: "#" }
    },
    {
        title: "AI Image Generator",
        description: "An application that uses deep learning models to generate unique images from text descriptions.",
        tags: ["Python", "TensorFlow", "React"],
        links: { github: "#", demo: "#" }
    },
    {
        title: "Social Media App",
        description: "A full-featured social platform with real-time messaging, post sharing, and user profiles.",
        tags: ["Next.js", "Firebase", "Tailwind"],
        links: { github: "#", demo: "#" }
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section" style={{ background: 'var(--bg-color)' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center', fontWeight: 'bold' }}
                >
                    Featured <span className="gradient-text">Projects</span>
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="glass"
                            style={{
                                padding: '2.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                height: '100%',
                                borderRadius: '16px',
                                transition: 'all 0.3s ease',
                                cursor: 'default'
                            }}
                        >
                            <div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)', fontWeight: '700' }}>{project.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6', fontSize: '1rem' }}>{project.description}</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                                    {project.tags.map(tag => (
                                        <span key={tag} style={{
                                            fontSize: '0.8rem',
                                            padding: '0.4rem 1rem',
                                            borderRadius: '20px',
                                            background: 'rgba(255,255,255,0.05)',
                                            color: 'var(--accent-blue)',
                                            border: '1px solid rgba(255,255,255,0.1)'
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <a href={project.links.github} style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'white'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
                                    <FaGithub />
                                </a>
                                <a href={project.links.demo} style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'white'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
                                    <FaExternalLinkAlt />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
