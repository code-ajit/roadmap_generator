// Unified Navigation Bar JavaScript
// This file provides consistent navigation functionality across all pages

class NavigationBar {
  constructor() {
    this.init();
  }

  init() {
    this.setupProfileDropdown();
    this.setupBackButton();
    this.setupThemeToggle();
    this.setupScrollEffects();
    this.setupTouchInteractions();
  }



  setupProfileDropdown() {
    const profileAvatar = document.getElementById('profileAvatar');
    const profileDropdown = document.getElementById('profileDropdown');
    const logoutBtn = document.getElementById('logoutBtn');

    if (profileAvatar && profileDropdown && logoutBtn) {
      // Toggle dropdown
      profileAvatar.addEventListener('click', (e) => {
        e.stopPropagation();
        const isVisible = profileDropdown.classList.contains('show');
        
        if (isVisible) {
          this.hideProfileDropdown();
        } else {
          this.showProfileDropdown();
        }
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', (e) => {
        if (!profileDropdown.contains(e.target) && !profileAvatar.contains(e.target)) {
          this.hideProfileDropdown();
        }
      });

      // Prevent dropdown from closing when clicking inside
      profileDropdown.addEventListener('click', (e) => {
        e.stopPropagation();
      });

      // Logout functionality
      logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.handleLogout();
      });

      // Close dropdown on escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && profileDropdown.classList.contains('show')) {
          this.hideProfileDropdown();
        }
      });
    }
  }

  showProfileDropdown() {
    const profileDropdown = document.getElementById('profileDropdown');
    if (profileDropdown) {
      profileDropdown.classList.add('show');
      
      // Animate dropdown items
      const dropdownItems = profileDropdown.querySelectorAll('a');
      dropdownItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
          item.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, index * 100);
      });
    }
  }

  hideProfileDropdown() {
    const profileDropdown = document.getElementById('profileDropdown');
    if (profileDropdown) {
      profileDropdown.classList.remove('show');
    }
  }

  setupBackButton() {
    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        this.handleBackNavigation();
      });

      // Add keyboard support
      backBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.handleBackNavigation();
        }
      });
    }
  }

  handleBackNavigation() {
    // Check if there's a previous page in history
    if (window.history.length > 1) {
      window.history.back();
    } else {
      // Fallback to dashboard or home
      const currentPath = window.location.pathname;
      if (currentPath.includes('dashboard') || currentPath.includes('creation') || currentPath.includes('quiz')) {
        window.location.href = 'dashboard.html';
      } else {
        window.location.href = '../index.html';
      }
    }
  }

  setupThemeToggle() {
    // Theme toggle is now handled by the unified DarkModeManager
    // This method is kept for compatibility but delegates to the main manager
    if (window.darkModeManager) {
      // Force theme update to ensure consistency
      window.darkModeManager.forceThemeUpdate();
    }
  }

  setupScrollEffects() {
    const header = document.querySelector('.main-header');
    if (header) {
      let lastScrollTop = 0;
      
      window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove scrolled class for styling
        if (scrollTop > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }

        // Hide/show header on scroll (optional)
        if (scrollTop > lastScrollTop && scrollTop > 100) {
          // Scrolling down
          header.style.transform = 'translateY(-100%)';
        } else {
          // Scrolling up
          header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
      });
    }
  }

  setupTouchInteractions() {
    // Add touch feedback for mobile devices
    const touchElements = document.querySelectorAll('.nav-link, .back-btn, .avatar, .notif-icon, .dark-mode-toggle');
    
    touchElements.forEach(element => {
      element.addEventListener('touchstart', () => {
        element.style.transform = 'scale(0.95)';
      });
      
      element.addEventListener('touchend', () => {
        setTimeout(() => {
          element.style.transform = '';
        }, 150);
      });
    });
  }

  handleLogout() {
    // Add logout animation
    const profileAvatar = document.getElementById('profileAvatar');
    if (profileAvatar) {
      profileAvatar.style.transform = 'scale(0.8) rotate(180deg)';
      setTimeout(() => {
        profileAvatar.style.transform = '';
      }, 300);
    }

    // Clear any stored data
    localStorage.removeItem('user');
    sessionStorage.clear();

    // Redirect to login page
    setTimeout(() => {
      const currentPath = window.location.pathname;
      if (currentPath.includes('html/')) {
        window.location.href = '../index.html';
      } else {
        window.location.href = 'index.html';
      }
    }, 500);
  }

  // Public method to update active navigation link
  setActiveNavLink(pageName) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.textContent.toLowerCase().includes(pageName.toLowerCase()) || 
          link.href.includes(pageName.toLowerCase())) {
        link.classList.add('active');
      }
    });
  }

  // Public method to show/hide back button
  toggleBackButton(show = true) {
    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
      backBtn.style.display = show ? 'flex' : 'none';
    }
  }

  // Public method to update notification count
  updateNotificationCount(count) {
    const notifIcon = document.querySelector('.notif-icon');
    if (notifIcon && count > 0) {
      // Remove existing badge
      const existingBadge = notifIcon.querySelector('.notification-badge');
      if (existingBadge) {
        existingBadge.remove();
      }

      // Add new badge
      const badge = document.createElement('span');
      badge.className = 'notification-badge';
      badge.textContent = count > 99 ? '99+' : count;
      badge.style.cssText = `
        position: absolute;
        top: -5px;
        right: -5px;
        background: #ef4444;
        color: white;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        font-size: 0.7rem;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid var(--nav-bg-primary);
      `;
      notifIcon.appendChild(badge);
    }
  }
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.navbar = new NavigationBar();
  
  // Set active navigation link based on current page
  const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
  window.navbar.setActiveNavLink(currentPage);
  
  // Show/hide back button based on page
  if (currentPage === 'dashboard') {
    window.navbar.toggleBackButton(false);
  } else {
    window.navbar.toggleBackButton(true);
  }
  
  // Theme loading is now handled by the unified DarkModeManager
  // The theme will be automatically applied when the page loads
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = NavigationBar;
} 