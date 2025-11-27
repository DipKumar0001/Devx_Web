import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaJava } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

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
        { name: 'Home', href: '#hero', icon: '🏠' },
        { name: 'Fundamentals', href: '#fundamentals', icon: '📖' },
        { name: 'OOP', href: '#oop', icon: '🎯' },
        { name: 'Advanced', href: '#advanced', icon: '🚀' },
        { name: 'Problems', href: '#problems', icon: '💡' },
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
            className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
        >
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <FaJava className="logo-icon" />
                    <span>Java<span className="gradient-text">Hub</span></span>
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-menu">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="nav-link"
                        >
                            <span className="nav-icon">{link.icon}</span>
                            {link.name}
                        </a>
                    ))}

                    <div className="navbar-divider"></div>

                    <div className="social-links">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mobile-menu"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="mobile-nav-link"
                            >
                                <span className="nav-icon">{link.icon}</span>
                                {link.name}
                            </a>
                        ))}
                        <div className="mobile-social">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FaGithub /> GitHub
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FaLinkedin /> LinkedIn
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
