document.addEventListener('DOMContentLoaded', () => {
    // Add Copy Button to all code panes
    const codePanes = document.querySelectorAll('.code-pane');

    codePanes.forEach(pane => {
        const button = document.createElement('button');
        button.className = 'copy-btn';
        button.textContent = 'Copy';
        button.style.position = 'absolute';
        button.style.top = '10px';
        button.style.right = '10px';
        button.style.background = 'rgba(255, 255, 255, 0.1)';
        button.style.border = '1px solid rgba(255, 255, 255, 0.2)';
        button.style.color = '#abb2bf';
        button.style.padding = '4px 8px';
        button.style.borderRadius = '4px';
        button.style.cursor = 'pointer';
        button.style.fontSize = '0.8rem';
        button.style.transition = 'background 0.2s';

        button.addEventListener('mouseover', () => {
            button.style.background = 'rgba(255, 255, 255, 0.2)';
        });

        button.addEventListener('mouseout', () => {
            button.style.background = 'rgba(255, 255, 255, 0.1)';
        });

        button.addEventListener('click', () => {
            const text = pane.innerText.replace('Copy', '').trim();
            navigator.clipboard.writeText(text).then(() => {
                button.textContent = 'Copied!';
                setTimeout(() => {
                    button.textContent = 'Copy';
                }, 2000);
            });
        });

        pane.appendChild(button);
    });

    // Animate cards on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });

    // Collapsible Sections
    const collapsibles = document.getElementsByClassName("collapsible-header");
    for (let i = 0; i < collapsibles.length; i++) {
        collapsibles[i].addEventListener("click", function () {
            this.classList.toggle("active-collapsible");
            const content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }

    // Quiz Logic
    const quizOptions = document.querySelectorAll('.quiz-option');
    quizOptions.forEach(option => {
        option.addEventListener('click', function () {
            const parent = this.closest('.quiz-container');
            const feedback = parent.querySelector('.quiz-feedback');
            const isCorrect = this.dataset.correct === "true";

            // Reset previous selection in this question
            parent.querySelectorAll('.quiz-option').forEach(opt => {
                opt.classList.remove('correct', 'incorrect');
            });

            if (isCorrect) {
                this.classList.add('correct');
                feedback.textContent = "Correct! Well done.";
                feedback.style.color = "var(--success-color)";
            } else {
                this.classList.add('incorrect');
                feedback.textContent = "Incorrect. Try again!";
                feedback.style.color = "var(--error-color)";
            }
        });
    });
});


// Cheat Sheet Page Functionality
// Cheat Sheet Page Functionality
document.addEventListener('DOMContentLoaded', () => {
    // Syntax Highlighting Engine
    const highlightJavaCode = (code) => {
        // HTML escape to prevent XSS and rendering issues
        code = code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

        // Definitions
        const keywords = /\b(public|private|protected|class|static|void|main|new|return|if|else|switch|case|default|break|continue|for|do|while|try|catch|finally|throw|throws|extends|implements|interface|abstract|final|this|super|import|package|true|false|null)\b/g;
        const types = /\b(String|int|boolean|char|float|double|byte|short|long|void|Object|System|Math|Integer|Double|StringBuilder|ArrayList|HashMap|HashSet|Scanner|Exception|Arrays)\b/g;
        const strings = /(".*?")/g;
        const chars = /('.*?')/g;
        const comments = /(\/\/.*)/g;
        const multiLineComments = /(\/\*[\s\S]*?\*\/)/g;
        const numbers = /\b(\d+)\b/g;
        const annotations = /(@\w+)/g;

        // Apply highlighting (Order matters!)
        // We use a placeholder strategy to avoid replacing content inside already replaced tags
        // But for a simple highlighter, we can do it in a specific order:
        // 1. Strings/Chars/Comments (to protect them from keyword matching)
        // However, simple regex replacement is tricky with overlapping rules.
        // A better approach for a simple script is to tokenize, but here's a robust regex approach:

        return code
            .replace(multiLineComments, '<span class="comment">$1</span>')
            .replace(comments, '<span class="comment">$1</span>')
            .replace(strings, '<span class="string">$1</span>')
            .replace(chars, '<span class="string">$1</span>')
            .replace(keywords, '<span class="keyword">$1</span>')
            .replace(types, '<span class="type">$1</span>')
            .replace(numbers, '<span class="number" style="color: #F59E0B;">$1</span>')
            .replace(annotations, '<span class="annotation" style="color: #EC4899;">$1</span>');
    };

    // Apply highlighting to all code blocks
    const codeBlocks = document.querySelectorAll('.code-block');
    codeBlocks.forEach(block => {
        // Get raw text, preserving newlines
        let rawCode = block.textContent;
        // Apply highlighting
        block.innerHTML = highlightJavaCode(rawCode);
    });

    // Search functionality
    const searchBar = document.getElementById('search-bar');
    if (searchBar) {
        searchBar.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const cards = document.querySelectorAll('.cheat-card');

            cards.forEach(card => {
                const header = card.querySelector('.cheat-card-header').textContent.toLowerCase();
                const body = card.querySelector('.cheat-card-body').textContent.toLowerCase();

                if (header.includes(searchTerm) || body.includes(searchTerm)) {
                    card.classList.remove('hidden');
                    card.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    }

    // Copy code button functionality
    const copyButtons = document.querySelectorAll('.copy-code-btn');
    copyButtons.forEach((button) => {
        button.addEventListener('click', () => {
            // Find the pre element before this button
            const pre = button.previousElementSibling;
            if (pre && pre.tagName === 'PRE') {
                // Get text content (stripping HTML tags from highlighting)
                const text = pre.textContent;

                navigator.clipboard.writeText(text).then(() => {
                    const originalText = button.textContent;
                    button.textContent = 'Copied!';
                    button.classList.add('copied');

                    setTimeout(() => {
                        button.textContent = originalText;
                        button.classList.remove('copied');
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy:', err);
                    button.textContent = 'Error';
                });
            }
        });
    });

    // Animate cards on page load with stagger
    const cheatCards = document.querySelectorAll('.cheat-card');
    cheatCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 50); // Faster stagger for snappier feel
    });
});
