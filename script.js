// ==========================================================================
// RESTAURANT CONFIGURATION
// ==========================================================================
const RESTAURANT = {
    name: "أبو وديع",
    whatsapp: "201019117993",
    phone: "201019117993",
    currency: "KD",
    deliveryFee: 0.500,
    address: "الكويت",
    branches: [
        { name: "السالمية", image: "images/outdoor_red.jpg" },
        { name: "حولي", image: "images/indoor2.jpg" },
        { name: "الفروانية", image: "images/about.jpg" },
        { name: "الجهراء", image: "images/rooftop.jpg" }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    // 0. Initialize Dynamic Restaurant Configuration
    const initRestaurantConfig = () => {
        // Update document title
        document.title = `${RESTAURANT.name} | Premium Restaurant`;
        
        // Update navbar logo
        const logoEl = document.querySelector('.logo');
        if(logoEl) {
            const words = RESTAURANT.name.split(' ');
            if(words.length > 1) {
                logoEl.innerHTML = `${words[0]} <span>${words.slice(1).join(' ')}</span>`;
            } else {
                logoEl.innerHTML = RESTAURANT.name;
            }
        }
        
        // Update hero section title
        const heroTitle = document.querySelector('.hero-title');
        if(heroTitle) heroTitle.innerText = RESTAURANT.name;
        
        // Update hero section "Order Now" link
        const heroOrderBtn = document.querySelector('.hero-buttons .btn-outline');
        if(heroOrderBtn) {
            heroOrderBtn.href = `https://wa.me/${RESTAURANT.whatsapp}`;
        }
        
        // Update contact section details
        const contactPhone = document.getElementById('contactPhone');
        if(contactPhone) {
            contactPhone.innerText = RESTAURANT.phone;
            contactPhone.style.cursor = 'pointer';
            contactPhone.addEventListener('click', () => {
                window.location.href = `tel:${RESTAURANT.phone}`;
            });
        }
        
        const contactWhatsApp = document.getElementById('contactWhatsApp');
        if(contactWhatsApp) {
            contactWhatsApp.innerText = RESTAURANT.whatsapp;
            contactWhatsApp.style.cursor = 'pointer';
            contactWhatsApp.addEventListener('click', () => {
                window.open(`https://wa.me/${RESTAURANT.whatsapp}`, '_blank');
            });
        }
        
        const contactAddress = document.getElementById('contactAddress');
        if(contactAddress) {
            contactAddress.innerText = RESTAURANT.address;
        }
        
        // Update footer branding & copyright
        const footerLogo = document.getElementById('footerLogo');
        if(footerLogo) {
            const words = RESTAURANT.name.split(' ');
            if(words.length > 1) {
                footerLogo.innerHTML = `${words[0]} <span>${words.slice(1).join(' ')}</span>`;
            } else {
                footerLogo.innerHTML = RESTAURANT.name;
            }
        }
        
        const footerSlogan = document.getElementById('footerSlogan');
        if(footerSlogan) {
            footerSlogan.innerText = `${RESTAURANT.name} - Premium Restaurant in ${RESTAURANT.address}`;
        }
        
        const footerCopyright = document.getElementById('footerCopyright');
        if(footerCopyright) {
            const currentYear = new Date().getFullYear();
            footerCopyright.innerHTML = `&copy; ${currentYear} ${RESTAURANT.name}. All Rights Reserved.`;
        }
        
        // Update floating call & whatsapp buttons links
        const floatingWhatsAppBtn = document.getElementById('floatingWhatsAppBtn');
        if(floatingWhatsAppBtn) {
            floatingWhatsAppBtn.href = `https://wa.me/${RESTAURANT.whatsapp}`;
        }
        
        const floatingCallBtn = document.getElementById('floatingCallBtn');
        if(floatingCallBtn) {
            floatingCallBtn.href = `tel:${RESTAURANT.phone}`;
        }
        
        // Update branches dynamically
        const branchesGrid = document.getElementById('branchesGrid');
        if(branchesGrid) {
            branchesGrid.innerHTML = '';
            RESTAURANT.branches.forEach((branch, index) => {
                const card = document.createElement('div');
                card.className = `branch-card reveal-up active delay-${(index % 3) + 1}`;
                card.innerHTML = `
                    <div class="branch-img-container">
                        <img src="${branch.image}" alt="${branch.name}">
                    </div>
                    <div class="branch-info-content">
                        <h3>${branch.name}</h3>
                        <p>${RESTAURANT.address}</p>
                        <p class="time">مفتوح 11:00 ص - 12:00 م</p>
                    </div>
                `;
                branchesGrid.appendChild(card);
            });
        }
        
        // Load branches in the checkout modal dropdown
        const checkoutBranchSelect = document.getElementById('checkoutBranch');
        if(checkoutBranchSelect) {
            checkoutBranchSelect.innerHTML = '';
            RESTAURANT.branches.forEach(branch => {
                const option = document.createElement('option');
                option.value = branch.name;
                option.text = branch.name;
                checkoutBranchSelect.appendChild(option);
            });
        }
        
        // Dynamically update price tags on all menu items with correct currency code
        document.querySelectorAll('.menu-card').forEach(card => {
            const oldPriceVal = card.getAttribute('data-old-price');
            const btn = card.querySelector('.add-to-cart-btn');
            const priceVal = btn ? btn.getAttribute('data-price') : null;
            const cardImgDiv = card.querySelector('.card-img');
            
            if (priceVal) {
                let priceDiv = cardImgDiv ? cardImgDiv.querySelector('.price') : null;
                if (!priceDiv && cardImgDiv) {
                    priceDiv = document.createElement('div');
                    priceDiv.className = 'price';
                    cardImgDiv.appendChild(priceDiv);
                }
                
                if (priceDiv) {
                    let html = '';
                    if (oldPriceVal) {
                        html += `<span class="old-price">${parseFloat(oldPriceVal).toFixed(2)} ${RESTAURANT.currency}</span> `;
                    }
                    html += `${parseFloat(priceVal).toFixed(2)} ${RESTAURANT.currency}`;
                    priceDiv.innerHTML = html;
                }
            }
        });
    };

    // Run dynamic config population
    initRestaurantConfig();

    // 1. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // 2. Navbar Background on Scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Menu Filtering
    const tabBtns = document.querySelectorAll('.tab-btn');
    const menuCards = document.querySelectorAll('.menu-card');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const target = btn.getAttribute('data-target');

            menuCards.forEach(card => {
                if (target === 'all' || card.getAttribute('data-category') === target) {
                    card.style.display = 'block';
                    void card.offsetWidth;
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                } else {
                    card.style.display = 'none';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                }
            });
        });
    });

    // 4. Scroll Reveal Animations
    const revealElements = document.querySelectorAll('.fade-up, .reveal-left, .reveal-right, .reveal-up');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;

        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // 5. Active Link Highlight on Scroll
    const sections = document.querySelectorAll('section, header');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    // 6. Form Submission (Prevent default for demo)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'جاري الإرسال...';
            btn.style.opacity = '0.8';
            
            setTimeout(() => {
                btn.innerText = 'تم الإرسال بنجاح!';
                btn.style.backgroundColor = '#28a745';
                btn.style.borderColor = '#28a745';
                contactForm.reset();
                
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.backgroundColor = '';
                    btn.style.borderColor = '';
                    btn.style.opacity = '1';
                }, 3000);
            }, 1500);
        });
    }

    // 7. Cart Functionality
    const cartIcon = document.getElementById('cartIcon');
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    const closeCartBtn = document.getElementById('closeCart');
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
    const cartItemsContainer = document.getElementById('cartItems');
    const cartCountElement = document.getElementById('cartCount');
    
    let cart = [];

    if (cartIcon && cartSidebar) {
        // Open Cart
        cartIcon.addEventListener('click', () => {
            cartSidebar.classList.add('active');
            cartOverlay.classList.add('active');
        });

        // Close Cart
        const closeCart = () => {
            cartSidebar.classList.remove('active');
            cartOverlay.classList.remove('active');
        };
        closeCartBtn.addEventListener('click', closeCart);
        cartOverlay.addEventListener('click', closeCart);

        // Add to Cart Logic
        addToCartBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = btn.getAttribute('data-id');
                const name = btn.getAttribute('data-name');
                const price = parseFloat(btn.getAttribute('data-price'));

                const existingItem = cart.find(item => item.id === id);
                
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    cart.push({ id, name, price, quantity: 1 });
                }

                updateCartUI();
                
                // Visual feedback on button
                const originalText = btn.innerText;
                btn.innerText = 'تمت الإضافة!';
                btn.style.backgroundColor = '#28a745';
                btn.style.borderColor = '#28a745';
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.backgroundColor = '';
                    btn.style.borderColor = '';
                }, 1000);
            });
        });

        // Update Cart UI
        const updateCartUI = () => {
            // Update Count
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCountElement.innerText = totalItems;

            // Render Items
            cartItemsContainer.innerHTML = '';
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<div class="empty-cart-msg">سلتك فارغة حالياً.</div>';
            } else {
                cart.forEach(item => {
                    const itemDiv = document.createElement('div');
                    itemDiv.classList.add('cart-item');
                    itemDiv.innerHTML = `
                        <div class="cart-item-info">
                            <h4>${item.name}</h4>
                            <p>${item.price.toFixed(2)} ${RESTAURANT.currency}</p>
                        </div>
                        <div class="cart-item-actions">
                            <button class="qty-btn minus" data-id="${item.id}">-</button>
                            <span class="qty-span">${item.quantity}</span>
                            <button class="qty-btn plus" data-id="${item.id}">+</button>
                        </div>
                    `;
                    cartItemsContainer.appendChild(itemDiv);
                });
            }

            // Update subtotal, delivery fee, and grand total
            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const deliveryFee = subtotal > 0 ? RESTAURANT.deliveryFee : 0;
            const grandTotal = subtotal > 0 ? (subtotal + deliveryFee) : 0;

            const subtotalEl = document.getElementById('cartSubtotalAmount');
            if (subtotalEl) {
                subtotalEl.innerText = `${subtotal.toFixed(2)} ${RESTAURANT.currency}`;
            }

            const deliveryEl = document.getElementById('cartDeliveryFee');
            if (deliveryEl) {
                deliveryEl.innerText = `${deliveryFee.toFixed(2)} ${RESTAURANT.currency}`;
            }

            const cartTotalAmountElement = document.getElementById('cartTotalAmount');
            if (cartTotalAmountElement) {
                cartTotalAmountElement.innerText = `${grandTotal.toFixed(2)} ${RESTAURANT.currency}`;
            }

            // Add Event Listeners to +/- buttons
            const minusBtns = document.querySelectorAll('.qty-btn.minus');
            const plusBtns = document.querySelectorAll('.qty-btn.plus');

            minusBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = btn.getAttribute('data-id');
                    const item = cart.find(i => i.id === id);
                    if (item.quantity > 1) {
                        item.quantity -= 1;
                    } else {
                        cart = cart.filter(i => i.id !== id);
                    }
                    updateCartUI();
                });
            });

            plusBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = btn.getAttribute('data-id');
                    const item = cart.find(i => i.id === id);
                    item.quantity += 1;
                    updateCartUI();
                });
            });
        };

        // Checkout Modal Elements
        const checkoutModal = document.getElementById('checkoutModal');
        const checkoutModalOverlay = document.getElementById('checkoutModalOverlay');
        const closeCheckoutModalBtn = document.getElementById('closeCheckoutModal');
        const checkoutForm = document.getElementById('checkoutForm');
        
        const nameInput = document.getElementById('checkoutName');
        const phoneInput = document.getElementById('checkoutPhone');
        const methodSelect = document.getElementById('checkoutMethod');
        const addressGroup = document.getElementById('addressGroup');
        const addressInput = document.getElementById('checkoutAddress');
        const branchSelect = document.getElementById('checkoutBranch');
        const notesInput = document.getElementById('checkoutNotes');
        
        const nameError = document.getElementById('nameError');
        const phoneError = document.getElementById('phoneError');
        const addressError = document.getElementById('addressError');
        const checkoutLoading = document.getElementById('checkoutLoading');

        // Toggle address input based on delivery method selection
        if (methodSelect && addressGroup && addressInput) {
            methodSelect.addEventListener('change', () => {
                if (methodSelect.value === 'استلام من الفرع') {
                    addressGroup.style.display = 'none';
                    addressInput.required = false;
                    addressInput.value = '';
                    if (addressError) addressError.classList.remove('active');
                } else {
                    addressGroup.style.display = 'flex';
                    addressInput.required = true;
                }
            });
        }

        const openCheckoutModal = () => {
            if (checkoutForm) checkoutForm.reset();
            
            // Default select adjustments
            if (addressGroup) addressGroup.style.display = 'flex';
            if (addressInput) addressInput.required = true;

            if (nameError) nameError.classList.remove('active');
            if (phoneError) phoneError.classList.remove('active');
            if (addressError) addressError.classList.remove('active');
            if (checkoutLoading) checkoutLoading.classList.remove('active');
            
            if (checkoutModal) checkoutModal.classList.add('active');
            if (checkoutModalOverlay) checkoutModalOverlay.classList.add('active');
        };

        const closeCheckoutModal = () => {
            if (checkoutModal) checkoutModal.classList.remove('active');
            if (checkoutModalOverlay) checkoutModalOverlay.classList.remove('active');
        };

        if (closeCheckoutModalBtn) {
            closeCheckoutModalBtn.addEventListener('click', closeCheckoutModal);
        }
        if (checkoutModalOverlay) {
            checkoutModalOverlay.addEventListener('click', closeCheckoutModal);
        }

        // Checkout Button Click
        const checkoutBtn = document.getElementById('checkoutBtn');
        if(checkoutBtn) {
            checkoutBtn.addEventListener('click', () => {
                if(cart.length > 0) {
                    openCheckoutModal();
                } else {
                    alert('سلتك فارغة حالياً! الرجاء إضافة بعض الوجبات أولاً.');
                }
            });
        }

        // Form Submit & WhatsApp Order Generation
        if(checkoutForm) {
            checkoutForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                let isValid = true;
                const nameVal = nameInput.value.trim();
                const phoneVal = phoneInput.value.trim();
                const methodVal = methodSelect.value;
                const addressVal = addressInput.value.trim();
                const branchVal = branchSelect.value;
                const notesVal = notesInput.value.trim();

                if(!nameVal) {
                    nameError.classList.add('active');
                    isValid = false;
                } else {
                    nameError.classList.remove('active');
                }

                if(!phoneVal) {
                    phoneError.classList.add('active');
                    isValid = false;
                } else {
                    phoneError.classList.remove('active');
                }

                if(methodVal === 'توصيل' && !addressVal) {
                    addressError.classList.add('active');
                    isValid = false;
                } else {
                    addressError.classList.remove('active');
                }

                if(isValid) {
                    // Show success loading animation
                    checkoutLoading.classList.add('active');

                    // Generate dynamic WhatsApp Message based on requested design
                    let message = '🍽️ New Order\n\n';
                    message += `Restaurant:\n${RESTAURANT.name}\n\n`;
                    message += '━━━━━━━━━━━━━━\n\n';
                    message += `Customer Name\n${nameVal}\n\n`;
                    message += `Phone Number\n${phoneVal}\n\n`;
                    message += `Delivery Method\n${methodVal}\n\n`;
                    message += `Address\n${addressVal ? addressVal : 'N/A'}\n\n`;
                    message += `Selected Branch\n${branchVal}\n\n`;
                    message += '━━━━━━━━━━━━━━\n\n';
                    message += 'Order Details\n\n';

                    cart.forEach(item => {
                        const itemSubtotal = item.price * item.quantity;
                        message += `• ${item.name} × ${item.quantity}\n`;
                        message += `Price: ${item.price.toFixed(2)} ${RESTAURANT.currency}\n`;
                        message += `Subtotal: ${itemSubtotal.toFixed(2)} ${RESTAURANT.currency}\n\n`;
                    });

                    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
                    const deliveryFee = methodVal === 'توصيل' ? RESTAURANT.deliveryFee : 0;
                    const grandTotal = subtotal + deliveryFee;

                    message += `Subtotal: ${subtotal.toFixed(2)} ${RESTAURANT.currency}\n`;
                    message += `Delivery Fee: ${deliveryFee.toFixed(2)} ${RESTAURANT.currency}\n`;
                    message += `Grand Total: ${grandTotal.toFixed(2)} ${RESTAURANT.currency}\n\n`;
                    message += '━━━━━━━━━━━━━━\n\n';
                    message += `Customer Notes\n${notesVal ? notesVal : 'None'}\n\n`;
                    message += '━━━━━━━━━━━━━━\n\n';
                    message += 'Thank you ❤️';

                    const encodedMessage = encodeURIComponent(message);
                    const whatsappUrl = `https://wa.me/${RESTAURANT.whatsapp}?text=${encodedMessage}`;

                    setTimeout(() => {
                        // Open WhatsApp
                        window.open(whatsappUrl, '_blank');

                        // Reset cart and UI
                        cart = [];
                        updateCartUI();
                        
                        // Close modals & sidebars
                        closeCheckoutModal();
                        closeCart();
                    }, 1500);
                }
            });
        }
    }

    // 8. Meal Details Modal
    const mealModal = document.getElementById('mealModal');
    const mealModalOverlay = document.getElementById('mealModalOverlay');
    const closeMealModal = document.getElementById('closeMealModal');
    
    if (mealModal) {
        const modalImg = document.getElementById('modalImg');
        const modalTitle = document.getElementById('modalTitle');
        const modalDesc = document.getElementById('modalDesc');
        const modalIngredients = document.getElementById('modalIngredients');
        const modalPrice = document.getElementById('modalPrice');

        document.querySelectorAll('.card-img').forEach(imgDiv => {
            imgDiv.addEventListener('click', (e) => {
                const card = e.currentTarget.closest('.menu-card');
                if (!card) return;

                const img = card.querySelector('img').src;
                const title = card.querySelector('h3').innerText;
                const desc = card.querySelector('p').innerText;
                const price = card.querySelector('.price').innerText;
                const ingredients = card.getAttribute('data-ingredients');

                modalImg.src = img;
                modalTitle.innerText = title;
                modalDesc.innerText = desc;
                modalPrice.innerText = price;
                
                if(ingredients) {
                    const ingArray = ingredients.split(/[،,]/).map(i => i.trim());
                    modalIngredients.innerHTML = ingArray.map(ing => '&bull; ' + ing).join('<br>');
                } else {
                    modalIngredients.innerText = 'لا توجد تفاصيل للمكونات.';
                }

                mealModal.classList.add('active');
                mealModalOverlay.classList.add('active');
            });
        });

        const hideMealModal = () => {
            mealModal.classList.remove('active');
            mealModalOverlay.classList.remove('active');
        };

        closeMealModal.addEventListener('click', hideMealModal);
        mealModalOverlay.addEventListener('click', hideMealModal);
    }

    // 9. Hero Background Slideshow
    const initHeroSlideshow = () => {
        const slides = document.querySelectorAll('.hero-slideshow .slide');
        if (slides.length === 0) return;
        
        let currentSlide = 0;
        
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000); // changes background every 5 seconds
    };
    
    initHeroSlideshow();
});
