document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const submitBtn = document.querySelector('.submit-btn');

    function setLoadingState(isLoading) {
        if (isLoading) {
            submitBtn.textContent = 'LOGGING IN...';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';
        } else {
            submitBtn.textContent = 'SUBMIT';
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
        }
    }

    function validateForm() {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        
        if (!username) {
            showError('Please enter a username');
            usernameInput.focus();
            return false;
        }
        
        if (!password) {
            showError('Please enter a password');
            passwordInput.focus();
            return false;
        }
        
        if (password.length < 6) {
            showError('Password must be at least 6 characters long');
            passwordInput.focus();
            return false;
        }
        
        return true;
    }

    function showError(message) {
        const existingError = document.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            color: #ef4444;
            background: rgba(239, 68, 68, 0.1);
            border: 1px solid rgba(239, 68, 68, 0.3);
            border-radius: 8px;
            padding: 12px;
            margin-top: 15px;
            text-align: center;
            font-size: 0.9rem;
            animation: slideIn 0.3s ease;
        `;
        
        loginForm.appendChild(errorDiv);
        
        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.remove();
            }
        }, 5000);
    }

    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        setLoadingState(true);
        
        setTimeout(() => {
            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();
            
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const user = users.find(u => u.username === username && u.password === password);
            
            if (user || (username === 'demo' && password === 'password123')) {
                window.location.href = 'html/dashboard.html';
            } else {
                setLoadingState(false);
                showError('Invalid username or password. Try: demo / password123 or register a new account.');
            }
        }, 1500);
    });

    [usernameInput, passwordInput].forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });

    const character = document.querySelector('.character');
    if (character) {
        character.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-50%) scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        character.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-50%) scale(1)';
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && (document.activeElement === usernameInput || document.activeElement === passwordInput)) {
            loginForm.dispatchEvent(new Event('submit'));
        }
        
        if (e.key === 'Escape') {
            usernameInput.value = '';
            passwordInput.value = '';
            usernameInput.focus();
        }
    });

    const demoHint = document.createElement('div');
    demoHint.innerHTML = `
        <div style="
            position: fixed;
            bottom: 20px;
            left: 20px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 10px;
            padding: 15px;
            color: white;
            font-size: 0.8rem;
            opacity: 0.8;
            transition: opacity 0.3s ease;
        ">
            <strong>Demo Credentials:</strong><br>
            Username: demo<br>
            Password: password123
        </div>
    `;
    document.body.appendChild(demoHint);

    demoHint.addEventListener('click', function() {
        this.style.opacity = '0';
        setTimeout(() => this.remove(), 300);
    });

    setTimeout(() => {
        if (demoHint.parentNode) {
            demoHint.style.opacity = '0';
            setTimeout(() => demoHint.remove(), 300);
        }
    }, 10000);
}); 
