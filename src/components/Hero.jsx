import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="section" style={{ overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* Animated Background */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                background: 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, #050505 100%)',
            }}>
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{
                        position: 'absolute',
                        top: '-20%',
                        left: '-10%',
                        width: '600px',
                        height: '600px',
                        background: 'radial-gradient(circle, var(--accent-purple) 0%, transparent 70%)',
                        filter: 'blur(80px)',
                        borderRadius: '50%',
                    }}
                />
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        x: [0, 100, 0],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{
                        position: 'absolute',
                        bottom: '-10%',
                        right: '-10%',
                        width: '500px',
                        height: '500px',
                        background: 'radial-gradient(circle, var(--accent-cyan) 0%, transparent 70%)',
                        filter: 'blur(80px)',
                        borderRadius: '50%',
                    }}
                />
            </div>

            <div className="container" style={{ textAlign: 'center', zIndex: 1 }}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{ fontSize: '1.5rem', color: 'var(--accent-cyan)', marginBottom: '1rem', letterSpacing: '2px', textTransform: 'uppercase' }}
                >
                    Hello, I am
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: '800', lineHeight: 1.1, marginBottom: '1rem' }}
                >
                    <span className="gradient-text">Dipesh</span>
                </motion.h1>

                <motion.h3
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', color: 'var(--text-secondary)', marginBottom: '2rem' }}
                >
                    Building Digital Experiences.
                </motion.h3>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    style={{ maxWidth: '600px', margin: '0 auto 3rem', color: '#888', fontSize: '1.1rem' }}
                >
                    I'm a Computer Science student passionate about creating state-of-the-art web applications with stunning interfaces and advanced functionality.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 }}
                    style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}
                >
                    <a href="#projects" style={{
                        padding: '1rem 2.5rem',
                        background: 'var(--accent-cyan)',
                        color: '#000',
                        borderRadius: '50px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                        boxShadow: '0 0 20px rgba(0, 242, 255, 0.4)'
                    }}>
                        View Work
                    </a>
                    <a href="#contact" style={{
                        padding: '1rem 2.5rem',
                        background: 'transparent',
                        color: 'var(--text-primary)',
                        border: '1px solid var(--text-secondary)',
                        borderRadius: '50px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                    }}>
                        Contact Me
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
