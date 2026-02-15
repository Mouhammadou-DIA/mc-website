// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const nav = document.getElementById('nav');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

// Close nav when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Sticky Header on Scroll
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const link = document.querySelector(`.nav-link[href*="${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            if (link) {
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', scrollActive);

// Shopping Cart Functionality
let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');
const addToCartButtons = document.querySelectorAll('.btn-add-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Increment cart count
        cartCount++;
        cartCountElement.textContent = cartCount;
        
        // Add animation to button
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 100);
        
        // Add animation to cart icon
        const cartBtn = document.querySelector('.cart-btn');
        cartBtn.style.transform = 'scale(1.2)';
        setTimeout(() => {
            cartBtn.style.transform = 'scale(1)';
        }, 200);
        
        // Show success message
        showNotification('Produit ajouté au panier !');
    });
});

// Wishlist Toggle
const wishlistButtons = document.querySelectorAll('.product-wishlist');

wishlistButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const svg = button.querySelector('svg');
        const isFilled = svg.getAttribute('fill') === 'currentColor';
        
        if (isFilled) {
            svg.setAttribute('fill', 'none');
            showNotification('Retiré des favoris');
        } else {
            svg.setAttribute('fill', 'currentColor');
            showNotification('Ajouté aux favoris ❤️');
        }
    });
});

// Contact Form Submission
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const message = formData.get('message');
        
        // In a real application, you would send this data to a server
        console.log('Form submitted:', { name, email, phone, message });
        
        // Show success message
        showNotification('Message envoyé avec succès ! Nous vous répondrons bientôt.', 3000);
        
        // Reset form
        contactForm.reset();
    });
}

// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        // In a real application, you would send this to your newsletter service
        console.log('Newsletter subscription:', email);
        
        showNotification('Merci pour votre inscription ! 📧');
        newsletterForm.reset();
    });
}

// Notification System
function showNotification(message, duration = 2000) {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        background: 'linear-gradient(135deg, #FFB7C5, #C5A3D9)',
        color: 'white',
        padding: '16px 24px',
        borderRadius: '12px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
        zIndex: '1000',
        fontSize: '15px',
        fontWeight: '500',
        fontFamily: 'Montserrat, sans-serif',
        animation: 'slideInUp 0.3s ease-out',
        maxWidth: '300px',
        wordWrap: 'break-word'
    });
    
    document.body.appendChild(notification);
    
    // Remove after duration
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, duration);
}

// Add keyframe animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Search Functionality
const searchBtn = document.querySelector('.search-btn');

if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        // In a real application, this would open a search modal or redirect to a search page
        const searchQuery = prompt('Rechercher un produit:');
        if (searchQuery) {
            console.log('Searching for:', searchQuery);
            showNotification(`Recherche de "${searchQuery}"...`);
        }
    });
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Don't prevent default for empty hash or hash-only links
        if (href === '#' || href === '') return;
        
        e.preventDefault();
        
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for Fade-in Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.product-card, .feature-item, .category-card');
animateElements.forEach(el => observer.observe(el));

// Product Card Click Tracking (for analytics)
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('click', (e) => {
        // Only track if not clicking on button or wishlist
        if (!e.target.closest('.btn-add-cart') && !e.target.closest('.product-wishlist')) {
            const productName = card.querySelector('.product-name').textContent;
            console.log('Product viewed:', productName);
            
            // In a real application, send this to analytics
            // Example: gtag('event', 'view_item', { item_name: productName });
        }
    });
});

// Cart Button Click (for future cart modal)
const cartBtn = document.querySelector('.cart-btn');
if (cartBtn) {
    cartBtn.addEventListener('click', () => {
        if (cartCount > 0) {
            showNotification(`Vous avez ${cartCount} article(s) dans votre panier`);
            // In a real application, this would open a cart modal or redirect to cart page
        } else {
            showNotification('Votre panier est vide');
        }
    });
}

// Prevent form submission on Enter key in single-line inputs (newsletter)
document.querySelectorAll('input[type="email"]').forEach(input => {
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && input.closest('form')) {
            e.preventDefault();
            input.closest('form').querySelector('button[type="submit"]')?.click();
        }
    });
});

// Initialize all functionality when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('M&C Website loaded successfully! 🎉');
    
    // Add subtle parallax effect to hero shapes
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroShapes = document.querySelectorAll('.hero-shape');
        
        heroShapes.forEach((shape, index) => {
            const speed = 0.5 + (index * 0.2);
            shape.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
});

// Handle window resize for responsive adjustments
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Close mobile nav on desktop
        if (window.innerWidth > 768) {
            nav.classList.remove('active');
        }
    }, 250);
});

// Prevent body scroll when mobile nav is open
nav.addEventListener('transitionend', () => {
    if (nav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});
