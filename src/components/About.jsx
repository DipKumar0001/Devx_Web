import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section" style={{ background: '#080808' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="glass"
                    style={{ padding: '4rem', maxWidth: '900px', margin: '0 auto' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>About <span className="gradient-text">Me</span></h2>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                        <p>
                            I am currently pursuing my Bachelor's in Computer Science. My journey in tech started with a curiosity about how things work on the web, which quickly turned into a passion for building beautiful and functional websites.
                        </p>
                        <p>
                            I specialize in frontend development, with a keen eye for design and user experience. I believe that a website should not only work perfectly but also provide an immersive experience for the user.
                        </p>
                        <p>
                            When I'm not coding, I'm exploring new technologies, contributing to open source, or learning about the latest trends in UI/UX design.
                        </p>
                    </div>

                    <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '3rem', textAlign: 'center' }}>
                        {[
                            { number: '2+', label: 'Years Experience' },
                            { number: '10+', label: 'Projects Completed' },
                            { number: '5+', label: 'Happy Clients' }
                        ].map((stat, index) => (
                            <div key={index}>
                                <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-magenta)', fontWeight: 'bold' }}>{stat.number}</h3>
                                <p style={{ fontSize: '0.9rem', color: '#666' }}>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
