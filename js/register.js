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
        
        if (password.length < 8) {
            showError('Password must be at least 8 characters long');
            passwordInput.focus();
            return false;
        }

        const passwordStrength = checkPasswordStrength(password);
        if (passwordStrength.score < 3) {
            showError('Password is too weak. Please include uppercase, lowercase, numbers, and special characters.');
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

    function checkPasswordStrength(password) {
        let score = 0;
        let feedback = [];

        // Length check
        if (password.length >= 8) {
            score += 1;
        } else {
            feedback.push('At least 8 characters');
        }

        // Lowercase check
        if (/[a-z]/.test(password)) {
            score += 1;
        } else {
            feedback.push('Include lowercase letters');
        }

        // Uppercase check
        if (/[A-Z]/.test(password)) {
            score += 1;
        } else {
            feedback.push('Include uppercase letters');
        }

        // Numbers check
        if (/[0-9]/.test(password)) {
            score += 1;
        } else {
            feedback.push('Include numbers');
        }

        // Special characters check
        if (/[^A-Za-z0-9]/.test(password)) {
            score += 1;
        } else {
            feedback.push('Include special characters');
        }

        // Determine strength level
        let strength = 'weak';
        let color = '#ef4444';
        
        if (score >= 4) {
            strength = 'strong';
            color = '#10b981';
        } else if (score >= 3) {
            strength = 'medium';
            color = '#f59e0b';
        } else if (score >= 2) {
            strength = 'fair';
            color = '#f97316';
        }

        return {
            score: score,
            strength: strength,
            color: color,
            feedback: feedback,
            percentage: (score / 5) * 100
        };
    }

    function createPasswordStrengthMeter() {
        // Create strength meter container
        strengthMeter = document.createElement('div');
        strengthMeter.className = 'password-strength-meter';
        strengthMeter.style.cssText = `
            margin-top: 8px;
            display: none;
        `;

        // Create strength bar
        strengthBar = document.createElement('div');
        strengthBar.className = 'strength-bar';
        strengthBar.style.cssText = `
            width: 100%;
            height: 4px;
            background: #374151;
            border-radius: 2px;
            overflow: hidden;
            margin-bottom: 4px;
        `;

        const strengthFill = document.createElement('div');
        strengthFill.className = 'strength-fill';
        strengthFill.style.cssText = `
            height: 100%;
            width: 0%;
            transition: all 0.3s ease;
            border-radius: 2px;
        `;
        strengthBar.appendChild(strengthFill);

        // Create strength text
        strengthText = document.createElement('div');
        strengthText.className = 'strength-text';
        strengthText.style.cssText = `
            font-size: 0.75rem;
            color: #9ca3af;
            margin-bottom: 4px;
        `;

        // Create feedback list
        const feedbackList = document.createElement('ul');
        feedbackList.className = 'strength-feedback';
        feedbackList.style.cssText = `
            font-size: 0.7rem;
            color: #6b7280;
            margin: 0;
            padding-left: 16px;
            list-style-type: disc;
        `;

        strengthMeter.appendChild(strengthText);
        strengthMeter.appendChild(strengthBar);
        strengthMeter.appendChild(feedbackList);

        // Insert after password input
        const passwordContainer = passwordInput.parentElement;
        passwordContainer.appendChild(strengthMeter);
    }

    function updatePasswordStrength(password) {
        if (!strengthMeter) {
            createPasswordStrengthMeter();
        }

        if (!password) {
            strengthMeter.style.display = 'none';
            return;
        }

        const strength = checkPasswordStrength(password);
        const strengthFill = strengthBar.querySelector('.strength-fill');
        const feedbackList = strengthMeter.querySelector('.strength-feedback');

        // Update strength text
        strengthText.textContent = `Password strength: ${strength.strength.charAt(0).toUpperCase() + strength.strength.slice(1)}`;
        strengthText.style.color = strength.color;

        // Update strength bar
        strengthFill.style.width = `${strength.percentage}%`;
        strengthFill.style.backgroundColor = strength.color;

        // Update feedback
        feedbackList.innerHTML = '';
        if (strength.feedback.length > 0) {
            strength.feedback.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                feedbackList.appendChild(li);
            });
        }

        strengthMeter.style.display = 'block';
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

    // Password strength checking
    passwordInput.addEventListener('input', function() {
        updatePasswordStrength(this.value);
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
