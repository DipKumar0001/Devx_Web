import { useState } from 'react';
import './InteractiveCard.css';

const InteractiveCard = ({
    title,
    description,
    children,
    expandable = true,
    defaultExpanded = false,
    badge = null,
    icon = null
}) => {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);

    const toggleExpand = () => {
        if (expandable) {
            setIsExpanded(!isExpanded);
        }
    };

    return (
        <div className={`interactive-card ${isExpanded ? 'expanded' : ''} animate-fade-in-up`}>
            <div className="interactive-card-header" onClick={toggleExpand}>
                <div className="interactive-card-header-content">
                    {icon && <span className="interactive-card-icon">{icon}</span>}
                    <div className="interactive-card-title-section">
                        <h3 className="interactive-card-title">{title}</h3>
                        {description && !isExpanded && (
                            <p className="interactive-card-description">{description}</p>
                        )}
                    </div>
                </div>
                <div className="interactive-card-meta">
                    {badge && <span className={`badge ${badge.className}`}>{badge.text}</span>}
                    {expandable && (
                        <span className="interactive-card-toggle">
                            {isExpanded ? '▲' : '▼'}
                        </span>
                    )}
                </div>
            </div>

            {isExpanded && (
                <div className="interactive-card-content">
                    {description && <p className="interactive-card-full-description">{description}</p>}
                    {children}
                </div>
            )}
        </div>
    );
};

export default InteractiveCard;
