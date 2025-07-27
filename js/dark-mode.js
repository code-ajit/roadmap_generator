// Unified Dark Mode System
class DarkModeManager {
    constructor() {
        this.isDarkMode = false;
        this.isTransitioning = false;
        this.init();
    }

    init() {
        // Load saved preference from localStorage
        const savedTheme = localStorage.getItem('darkMode');
        if (savedTheme !== null) {
            this.isDarkMode = savedTheme === 'true';
        } else {
            // Check system preference
            this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        
        this.applyTheme();
        this.createToggleButton();
        this.setupSystemPreferenceListener();
    }

    createToggleButton() {
        // Remove any existing toggle buttons first
        const existingToggles = document.querySelectorAll('.dark-mode-toggle, #themeToggle');
        existingToggles.forEach(toggle => toggle.remove());

        // Create unified toggle button
        const toggleBtn = document.createElement('button');
        toggleBtn.id = 'unified-theme-toggle';
        toggleBtn.className = 'dark-mode-toggle unified-toggle';
        toggleBtn.setAttribute('aria-label', 'Toggle dark mode');
        toggleBtn.setAttribute('title', this.isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode');
        
        // Create SVG icons for better visibility
        toggleBtn.innerHTML = `
            <svg class="sun-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <svg class="moon-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;

        // Add click event
        toggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.toggleTheme();
        });

        // Add keyboard support
        toggleBtn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.toggleTheme();
            }
        });

        // Insert button into the page
        this.insertToggleButton(toggleBtn);
        
        // Update button state
        this.updateToggleButtonState();
    }

    insertToggleButton(toggleBtn) {
        // Try to find the theme toggle container first
        let container = document.querySelector('.theme-toggle-container');
        
        if (container) {
            // Clear existing content and add new toggle
            container.innerHTML = '';
            container.appendChild(toggleBtn);
        } else {
            // Create container if it doesn't exist
            container = document.createElement('div');
            container.className = 'theme-toggle-container';
            container.appendChild(toggleBtn);
            
            // Try to find the best place to insert the container
            const header = document.querySelector('header, .main-header');
            const headerRight = document.querySelector('.header-right');
            
            if (headerRight) {
                // Insert at the beginning of header-right
                headerRight.insertBefore(container, headerRight.firstChild);
            } else if (header) {
                // Insert at the end of header
                header.appendChild(container);
            } else {
                // Insert at the top of body
                document.body.insertBefore(container, document.body.firstChild);
            }
        }
    }

    toggleTheme() {
        // Prevent multiple rapid clicks
        if (this.isTransitioning) return;
        this.isTransitioning = true;
        
        this.isDarkMode = !this.isDarkMode;
        this.applyTheme();
        localStorage.setItem('darkMode', this.isDarkMode.toString());
        
        // Update button state
        this.updateToggleButtonState();
        
        // Simple button feedback
        const toggleBtn = document.getElementById('unified-theme-toggle');
        if (toggleBtn) {
            toggleBtn.style.transform = 'scale(0.95) rotate(180deg)';
            setTimeout(() => {
                toggleBtn.style.transform = 'scale(1) rotate(0deg)';
            }, 200);
        }
        
        // Reset transition flag
        setTimeout(() => {
            this.isTransitioning = false;
        }, 250);
    }

    applyTheme() {
        const root = document.documentElement;
        const body = document.body;
        
        // Apply theme changes immediately without animations
        if (this.isDarkMode) {
            root.classList.add('dark-mode');
            root.setAttribute('data-theme', 'dark');
            body.classList.add('dark-mode');
        } else {
            root.classList.remove('dark-mode');
            root.setAttribute('data-theme', 'light');
            body.classList.remove('dark-mode');
        }
        
        // Ensure all elements get proper theme styling
        this.applyThemeToElements();
    }

    applyThemeToElements() {
        // Apply theme to all interactive elements
        const elements = document.querySelectorAll(`
            body, .main-header, .main-nav, .header-right, .container, 
            .dashboard-main, .login-form, .quiz-container, .creation-hero, 
            .generator-card, .stat-card, .roadmap-card, .profile-dropdown, 
            .form-links, .form, .input-group, .submit-btn, .link, 
            .hero-title, .hero-desc, .app-title, .nav-link, .stat-label, 
            .stat-value, .stat-icon, .roadmap-title, .roadmap-desc, 
            .status-badge, .profile-dropdown a, .back-btn, .recent-header h2, 
            .view-all-link, .quiz-title, .question-text, .option-btn, 
            .progress-bar, .progress-fill, .feature-item, .feature-icon, 
            .generator-title, .generator-subtitle, #goal-input, #search-bar,
            input, textarea, select, button, a, span, div, p, h1, h2, h3, h4, h5, h6
        `);

        elements.forEach(element => {
            if (this.isDarkMode) {
                element.classList.add('dark-mode');
            } else {
                element.classList.remove('dark-mode');
            }
        });
    }

    updateToggleButtonState() {
        const toggleBtn = document.getElementById('unified-theme-toggle');
        if (toggleBtn) {
            // Update button appearance
            toggleBtn.classList.toggle('dark', this.isDarkMode);
            
            // Update title and aria-label
            const title = this.isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
            toggleBtn.setAttribute('title', title);
            toggleBtn.setAttribute('aria-label', title);
            
            // Update icon visibility
            const sunIcon = toggleBtn.querySelector('.sun-icon');
            const moonIcon = toggleBtn.querySelector('.moon-icon');
            
            if (sunIcon && moonIcon) {
                if (this.isDarkMode) {
                    sunIcon.style.opacity = '0';
                    sunIcon.style.transform = 'rotate(90deg)';
                    moonIcon.style.opacity = '1';
                    moonIcon.style.transform = 'rotate(0deg)';
                } else {
                    sunIcon.style.opacity = '1';
                    sunIcon.style.transform = 'rotate(0deg)';
                    moonIcon.style.opacity = '0';
                    moonIcon.style.transform = 'rotate(-90deg)';
                }
            }
        }
    }

    setupSystemPreferenceListener() {
        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            // Only auto-switch if user hasn't manually set a preference
            if (localStorage.getItem('darkMode') === null) {
                this.isDarkMode = e.matches;
                this.applyTheme();
                this.updateToggleButtonState();
            }
        });
    }

    // Public method to force theme update
    forceThemeUpdate() {
        this.applyTheme();
        this.updateToggleButtonState();
    }
}

// Initialize dark mode when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.darkModeManager = new DarkModeManager();
});

// Also initialize if DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.darkModeManager = new DarkModeManager();
    });
} else {
    window.darkModeManager = new DarkModeManager();
}

// Export for use in other scripts
window.DarkModeManager = DarkModeManager; 