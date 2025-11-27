import { useState } from 'react';
import './CodeBlock.css';

const CodeBlock = ({ code, language = 'java', title = '' }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Simple syntax highlighting for Java
    const highlightJava = (code) => {
        const keywords = ['public', 'private', 'protected', 'class', 'interface', 'extends', 'implements',
            'static', 'final', 'void', 'int', 'String', 'boolean', 'double', 'float', 'long',
            'char', 'byte', 'short', 'if', 'else', 'for', 'while', 'do', 'switch', 'case',
            'break', 'continue', 'return', 'new', 'this', 'super', 'abstract', 'try', 'catch',
            'throw', 'throws', 'finally', 'import', 'package', 'null', 'true', 'false'];

        let highlighted = code;

        // Highlight keywords
        keywords.forEach(keyword => {
            const regex = new RegExp(`\\b(${keyword})\\b`, 'g');
            highlighted = highlighted.replace(regex, '<span class="code-keyword">$1</span>');
        });

        // Highlight strings
        highlighted = highlighted.replace(/"([^"]*)"/g, '<span class="code-string">"$1"</span>');
        highlighted = highlighted.replace(/'([^']*)'/g, '<span class="code-string">\'$1\'</span>');

        // Highlight comments
        highlighted = highlighted.replace(/\/\/(.*)/g, '<span class="code-comment">//$1</span>');
        highlighted = highlighted.replace(/\/\*([\s\S]*?)\*\//g, '<span class="code-comment">/*$1*/</span>');

        // Highlight numbers
        highlighted = highlighted.replace(/\b(\d+)\b/g, '<span class="code-number">$1</span>');

        return highlighted;
    };

    return (
        <div className="code-block animate-fade-in-up">
            <div className="code-block-header">
                <div className="code-block-info">
                    <span className="code-block-language">{language.toUpperCase()}</span>
                    {title && <span className="code-block-title">{title}</span>}
                </div>
                <button className="code-block-copy" onClick={handleCopy}>
                    {copied ? '✓ Copied!' : '📋 Copy'}
                </button>
            </div>
            <pre>
                <code
                    dangerouslySetInnerHTML={{
                        __html: language === 'java' ? highlightJava(code) : code
                    }}
                />
            </pre>
        </div>
    );
};

export default CodeBlock;
