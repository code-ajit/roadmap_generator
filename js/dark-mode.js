// Dark Mode System
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
        // Create toggle button
        const toggleBtn = document.createElement('button');
        toggleBtn.id = 'dark-mode-toggle';
        toggleBtn.className = 'dark-mode-toggle';
        toggleBtn.setAttribute('aria-label', 'Toggle dark mode');
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
        toggleBtn.addEventListener('click', () => {
            this.toggleTheme();
        });

        // Insert button into the page
        this.insertToggleButton(toggleBtn);
    }

    insertToggleButton(toggleBtn) {
        // Try to find the best place to insert the toggle button
        const header = document.querySelector('header, .main-header');
        const nav = document.querySelector('nav, .main-nav');
        const headerRight = document.querySelector('.header-right');
        
        if (headerRight) {
            // Insert before the first child of header-right
            headerRight.insertBefore(toggleBtn, headerRight.firstChild);
        } else if (header) {
            // Insert at the end of header
            header.appendChild(toggleBtn);
        } else {
            // Insert at the top of body
            document.body.insertBefore(toggleBtn, document.body.firstChild);
        }
    }

    toggleTheme() {
        // Prevent multiple rapid clicks
        if (this.isTransitioning) return;
        this.isTransitioning = true;
        
        this.isDarkMode = !this.isDarkMode;
        this.applyTheme();
        localStorage.setItem('darkMode', this.isDarkMode.toString());
        
        // Simple button feedback without animations
        const toggleBtn = document.getElementById('dark-mode-toggle');
        if (toggleBtn) {
            toggleBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                toggleBtn.style.transform = 'scale(1)';
            }, 100);
        }
        
        // Reset transition flag quickly
        setTimeout(() => {
            this.isTransitioning = false;
        }, 150);
    }

    applyTheme() {
        const root = document.documentElement;
        
        // Apply theme changes immediately without animations
        if (this.isDarkMode) {
            root.classList.add('dark-mode');
            root.setAttribute('data-theme', 'dark');
        } else {
            root.classList.remove('dark-mode');
            root.setAttribute('data-theme', 'light');
        }
        
        // Update toggle button state
        const toggleBtn = document.getElementById('dark-mode-toggle');
        if (toggleBtn) {
            toggleBtn.classList.toggle('dark', this.isDarkMode);
        }
    }

    setupSystemPreferenceListener() {
        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            // Only auto-switch if user hasn't manually set a preference
            if (localStorage.getItem('darkMode') === null) {
                this.isDarkMode = e.matches;
                this.applyTheme();
            }
        });
    }
}

// Initialize dark mode when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new DarkModeManager();
});

// Export for use in other scripts
window.DarkModeManager = DarkModeManager; 