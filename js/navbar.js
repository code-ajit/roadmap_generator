
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
      profileAvatar.addEventListener('click', (e) => {
        e.stopPropagation();
        const isVisible = profileDropdown.classList.contains('show');
        
        if (isVisible) {
          this.hideProfileDropdown();
        } else {
          this.showProfileDropdown();
        }
      });

      document.addEventListener('click', (e) => {
        if (!profileDropdown.contains(e.target) && !profileAvatar.contains(e.target)) {
          this.hideProfileDropdown();
        }
      });

      profileDropdown.addEventListener('click', (e) => {
        e.stopPropagation();
      });

      logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.handleLogout();
      });

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

      backBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.handleBackNavigation();
        }
      });
    }
  }

  handleBackNavigation() {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      const currentPath = window.location.pathname;
      if (currentPath.includes('dashboard') || currentPath.includes('creation') || currentPath.includes('quiz')) {
        window.location.href = 'dashboard.html';
      } else {
        window.location.href = '../index.html';
      }
    }
  }

  setupThemeToggle() {
    if (window.darkModeManager) {
      window.darkModeManager.forceThemeUpdate();
    }
  }

  setupScrollEffects() {
    const header = document.querySelector('.main-header');
    if (header) {
      let lastScrollTop = 0;
      
      window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }

        if (scrollTop > lastScrollTop && scrollTop > 100) {
          header.style.transform = 'translateY(-100%)';
        } else {
          header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
      });
    }
  }

  setupTouchInteractions() {
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
    const profileAvatar = document.getElementById('profileAvatar');
    if (profileAvatar) {
      profileAvatar.style.transform = 'scale(0.8) rotate(180deg)';
      setTimeout(() => {
        profileAvatar.style.transform = '';
      }, 300);
    }

    localStorage.removeItem('user');
    sessionStorage.clear();

    setTimeout(() => {
      const currentPath = window.location.pathname;
      if (currentPath.includes('html/')) {
        window.location.href = '../index.html';
      } else {
        window.location.href = 'index.html';
      }
    }, 500);
  }

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

  toggleBackButton(show = true) {
    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
      backBtn.style.display = show ? 'flex' : 'none';
    }
  }

  updateNotificationCount(count) {
    const notifIcon = document.querySelector('.notif-icon');
    if (notifIcon && count > 0) {
      const existingBadge = notifIcon.querySelector('.notification-badge');
      if (existingBadge) {
        existingBadge.remove();
      }

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

document.addEventListener('DOMContentLoaded', () => {
  window.navbar = new NavigationBar();
  
  const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
  window.navbar.setActiveNavLink(currentPage);
  
  if (currentPage === 'dashboard') {
    window.navbar.toggleBackButton(false);
  } else {
    window.navbar.toggleBackButton(true);
  }
  
});

if (typeof module !== 'undefined' && module.exports) {
  module.exports = NavigationBar;
} 
