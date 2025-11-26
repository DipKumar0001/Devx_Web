import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.querySelector(href);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const element = document.querySelector(href);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                padding: scrolled ? '1rem 2rem' : '2rem',
                background: scrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
                transition: 'all 0.3s ease'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none', color: 'var(--text-primary)' }}>
                    Dev<span style={{ color: 'var(--accent-cyan)' }}>Portfolio</span>
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            style={{
                                color: 'var(--text-secondary)',
                                textDecoration: 'none',
                                fontSize: '0.9rem',
                                transition: 'color 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--accent-cyan)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                        >
                            {link.name}
                        </a>
                    ))}

                    <a
                        href="/java-guide/index.html"
                        style={{
                            color: 'var(--text-primary)',
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            fontWeight: 'bold',
                            padding: '0.5rem 1rem',
                            borderRadius: '8px',
                            background: 'linear-gradient(45deg, #f59e0b, #ea580c)',
                            transition: 'opacity 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.opacity = '0.9'}
                        onMouseLeave={(e) => e.target.style.opacity = '1'}
                    >
                        Java Guide ☕
                    </a>




                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', fontSize: '1.2rem' }}>
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', fontSize: '1.2rem' }}>
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" style={{ display: 'none', fontSize: '1.5rem', cursor: 'pointer' }} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        background: 'rgba(5, 5, 5, 0.95)',
                        backdropFilter: 'blur(10px)',
                        padding: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                        borderBottom: '1px solid rgba(255,255,255,0.1)'
                    }}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '1.1rem' }}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="/java-guide/index.html"
                        onClick={() => setIsOpen(false)}
                        style={{ color: '#f59e0b', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 'bold' }}
                    >
                        Java Guide ☕
                    </a>

                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
