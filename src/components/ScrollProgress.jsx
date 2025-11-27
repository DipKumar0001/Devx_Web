import { useState, useEffect } from 'react';
import './ScrollProgress.css';

const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateScrollProgress = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight - windowHeight;
            const scrolled = window.scrollY;
            const progress = (scrolled / documentHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', updateScrollProgress);
        updateScrollProgress(); // Initial call

        return () => window.removeEventListener('scroll', updateScrollProgress);
    }, []);

    return (
        <div className="scroll-progress">
            <div
                className="scroll-progress-bar"
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
    );
};

export default ScrollProgress;
