import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
    const [displayedText, setDisplayedText] = useState('');
    const fullText = 'Java Learning Hub';

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setDisplayedText(fullText.substring(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 100);

        return () => clearInterval(timer);
    }, []);

    return (
        <section id="hero" className="section hero-section">
            {/* Animated Background with Green/Red particles */}
            <div className="hero-background">
                <motion.div
                    className="particle-blob green-blob"
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, 180, 360],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="particle-blob red-blob"
                    animate={{
                        scale: [1, 1.4, 1],
                        x: [0, -100, 100, 0],
                        opacity: [0.15, 0.35, 0.15],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="particle-blob green-blob-2"
                    animate={{
                        scale: [1, 1.2, 1],
                        y: [0, 50, -50, 0],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Floating code symbols */}
                <div className="code-symbols">
                    {['{', '}', '<', '>', '/', ';', '(', ')'].map((symbol, i) => (
                        <motion.span
                            key={i}
                            className="code-symbol"
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: [0.1, 0.3, 0.1],
                                y: [0, -30, 0],
                                x: [0, Math.random() * 20 - 10, 0],
                            }}
                            transition={{
                                duration: 4 + Math.random() * 3,
                                repeat: Infinity,
                                delay: i * 0.3,
                            }}
                            style={{
                                left: `${10 + i * 12}%`,
                                top: `${20 + (i % 3) * 20}%`,
                            }}
                        >
                            {symbol}
                        </motion.span>
                    ))}
                </div>
            </div>

            <div className="container hero-content">
                <motion.div
                    className="hero-badge"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <span className="badge badge-green">📚 Interactive Learning</span>
                </motion.div>

                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    {displayedText}
                    <span className="cursor-blink">|</span>
                </motion.h1>

                <motion.h2
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    My Personal <span className="gradient-text">Knowledge Base</span> for Future Reference
                </motion.h2>

                <motion.p
                    className="hero-description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    Master Java programming through interactive tutorials, comprehensive OOP concepts,
                    advanced topics, and real-world problem solutions. Built as a living document for
                    academic excellence and technical growth.
                </motion.p>

                <motion.div
                    className="hero-cta"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 }}
                >
                    <a href="#fundamentals" className="btn btn-primary">
                        🚀 Start Learning
                    </a>
                    <a href="#problems" className="btn btn-secondary">
                        💡 Browse Problems
                    </a>
                </motion.div>

                <motion.div
                    className="hero-stats"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                >
                    <div className="stat-item">
                        <span className="stat-number gradient-text">50+</span>
                        <span className="stat-label">Topics Covered</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number gradient-text-red">100+</span>
                        <span className="stat-label">Code Examples</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number gradient-text">∞</span>
                        <span className="stat-label">Learning Journey</span>
                    </div>
                </motion.div>

                <motion.div
                    className="scroll-indicator"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <span>Scroll to explore</span>
                    <span className="scroll-arrow">↓</span>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
