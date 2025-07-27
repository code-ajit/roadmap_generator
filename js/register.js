document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const submitBtn = document.querySelector('.submit-btn');

    // Add loading state to submit button
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

    // Show success message
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
        
        // Auto-remove success message after 3 seconds
        setTimeout(() => {
            if (successDiv.parentNode) {
                successDiv.remove();
            }
        }, 3000);
    }

    // Show error message
    function showError(message) {
        // Remove existing error message
        const existingError = document.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // Create new error message
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
        
        // Auto-remove error after 5 seconds
        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.remove();
            }
        }, 5000);
    }

    // Add CSS animation for messages
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

    // Form validation
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
        
        // Basic email validation
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

    // Check if username already exists
    function isUsernameTaken(username) {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        return users.some(user => user.username === username);
    }

    // Check if email already exists
    function isEmailTaken(email) {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        return users.some(user => user.email === email);
    }

    // Handle form submission
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        
        // Check if username already exists
        if (isUsernameTaken(username)) {
            showError('Username already exists. Please choose a different username.');
            usernameInput.focus();
            return;
        }
        
        // Check if email already exists
        if (isEmailTaken(email)) {
            showError('Email already registered. Please use a different email or login.');
            emailInput.focus();
            return;
        }
        
        setLoadingState(true);
        
        // Simulate registration process
        setTimeout(() => {
            try {
                // Get existing users
                const users = JSON.parse(localStorage.getItem('users') || '[]');
                
                // Add new user
                const newUser = {
                    username: username,
                    email: email,
                    password: password,
                    createdAt: new Date().toISOString()
                };
                
                users.push(newUser);
                
                // Save to localStorage
                localStorage.setItem('users', JSON.stringify(users));
                
                setLoadingState(false);
                showSuccess('Registration successful! Redirecting to login...');
                
                // Clear form
                registerForm.reset();
                
                // Redirect to login page after 2 seconds
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

    // Add input focus effects
    [usernameInput, emailInput, passwordInput, confirmPasswordInput].forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });

    // Add character interaction
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

    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Enter key to submit form
        if (e.key === 'Enter' && (document.activeElement === usernameInput || 
                                 document.activeElement === emailInput || 
                                 document.activeElement === passwordInput || 
                                 document.activeElement === confirmPasswordInput)) {
            registerForm.dispatchEvent(new Event('submit'));
        }
        
        // Escape key to clear form
        if (e.key === 'Escape') {
            registerForm.reset();
            usernameInput.focus();
        }
    });

    // Real-time password confirmation validation
    confirmPasswordInput.addEventListener('input', function() {
        const password = passwordInput.value.trim();
        const confirmPassword = this.value.trim();
        
        if (confirmPassword && password !== confirmPassword) {
            this.style.borderColor = '#ef4444';
        } else {
            this.style.borderColor = '';
        }
    });

    // Real-time username availability check
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