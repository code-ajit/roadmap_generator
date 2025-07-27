document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const submitBtn = document.querySelector('.submit-btn');

    // Password strength meter elements
    let strengthMeter;
    let strengthText;
    let strengthBar;

    function setLoadingState(isLoading) {
        if (isLoading) {
            submitBtn.textContent = 'REGISTERING...';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';
        } else {
            submitBtn.textContent = 'REGISTER';
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
        }
    }

    function showSuccess(message) {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.textContent = message;
        successDiv.style.cssText = `
            color: #10b981;
            background: rgba(16, 185, 129, 0.1);
            border: 1px solid rgba(16, 185, 129, 0.3);
            border-radius: 8px;
            padding: 12px;
            margin-top: 15px;
            text-align: center;
            font-size: 0.9rem;
            animation: slideIn 0.3s ease;
        `;
        
        registerForm.appendChild(successDiv);
        
        setTimeout(() => {
            if (successDiv.parentNode) {
                successDiv.remove();
            }
        }, 3000);
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
        
        registerForm.appendChild(errorDiv);
        
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

    function validateForm() {
        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();
        
        if (!username) {
            showError('Please enter a username');
            usernameInput.focus();
            return false;
        }
        
        if (username.length < 3) {
            showError('Username must be at least 3 characters long');
            usernameInput.focus();
            return false;
        }
        
        if (!email) {
            showError('Please enter an email address');
            emailInput.focus();
            return false;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showError('Please enter a valid email address');
            emailInput.focus();
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
        
        if (!confirmPassword) {
            showError('Please confirm your password');
            confirmPasswordInput.focus();
            return false;
        }
        
        if (password !== confirmPassword) {
            showError('Passwords do not match');
            confirmPasswordInput.focus();
            return false;
        }
        
        return true;
    }

    function isUsernameTaken(username) {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        return users.some(user => user.username === username);
    }

    function isEmailTaken(email) {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        return users.some(user => user.email === email);
    }

    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        
        if (isUsernameTaken(username)) {
            showError('Username already exists. Please choose a different username.');
            usernameInput.focus();
            return;
        }
        
        if (isEmailTaken(email)) {
            showError('Email already registered. Please use a different email or login.');
            emailInput.focus();
            return;
        }
        
        setLoadingState(true);
        
        setTimeout(() => {
            try {
                const users = JSON.parse(localStorage.getItem('users') || '[]');
                
                const newUser = {
                    username: username,
                    email: email,
                    password: password,
                    createdAt: new Date().toISOString()
                };
                
                users.push(newUser);
                
                localStorage.setItem('users', JSON.stringify(users));
                
                setLoadingState(false);
                showSuccess('Registration successful! Redirecting to login...');
                
                registerForm.reset();
                
                setTimeout(() => {
                    window.location.href = '../index.html';
                }, 2000);
                
            } catch (error) {
                setLoadingState(false);
                showError('Registration failed. Please try again.');
                console.error('Registration error:', error);
            }
        }, 1500);
    });

    [usernameInput, emailInput, passwordInput, confirmPasswordInput].forEach(input => {
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
        if (e.key === 'Enter' && (document.activeElement === usernameInput || 
                                 document.activeElement === emailInput || 
                                 document.activeElement === passwordInput || 
                                 document.activeElement === confirmPasswordInput)) {
            registerForm.dispatchEvent(new Event('submit'));
        }
        
        if (e.key === 'Escape') {
            registerForm.reset();
            usernameInput.focus();
        }
    });

    confirmPasswordInput.addEventListener('input', function() {
        const password = passwordInput.value.trim();
        const confirmPassword = this.value.trim();
        
        if (confirmPassword && password !== confirmPassword) {
            this.style.borderColor = '#ef4444';
        } else {
            this.style.borderColor = '';
        }
    });

    let usernameTimeout;
    usernameInput.addEventListener('input', function() {
        clearTimeout(usernameTimeout);
        const username = this.value.trim();
        
        if (username.length >= 3) {
            usernameTimeout = setTimeout(() => {
                if (isUsernameTaken(username)) {
                    this.style.borderColor = '#ef4444';
                    showError('Username already taken');
                } else {
                    this.style.borderColor = '#10b981';
                }
            }, 500);
        } else {
            this.style.borderColor = '';
        }
    });
}); 
