// script.js
$(document).ready(function() {
    
    // ============================================
    // TEMPLATE D'UNE CARTE PRODUIT
    // ============================================
    const cardTemplate = `
        <div class="product-card">
            <!-- Slider -->
            <div class="product-card__slider swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="images/image1.jpg" alt="Кухня бежевая">
                    </div>
                    <div class="swiper-slide">
                        <img src="images/image1.jpg" alt="Кухня бежевая вид 2">
                    </div>
                    <div class="swiper-slide">
                        <img src="images/image1.jpg" alt="Кухня бежевая вид 3">
                    </div>
                    <div class="swiper-slide">
                        <img src="images/image1.jpg" alt="Кухня бежевая вид 4">
                    </div>
                    <div class="swiper-slide">
                        <img src="images/image1.jpg" alt="Кухня бежевая вид 5">
                    </div>
                    <div class="swiper-slide">
                        <img src="images/image1.jpg" alt="Кухня бежевая вид 6">
                    </div>
                </div>

                <div class="swiper-pagination"></div>

                <!-- BOUTON PRÉCÉDENT -->
                <div class="swiper-button-prev">
                    <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="43" height="43" rx="21.5" fill="white" fill-opacity="0.5" style="backdrop-filter: blur(2.5px);" />
                        <path d="M17.279 21.5326C17.2782 21.3981 17.304 21.2648 17.3548 21.1403C17.4057 21.0158 17.4806 20.9025 17.5753 20.807L23.7067 14.6756C23.8992 14.4832 24.1602 14.3751 24.4323 14.3751C24.7044 14.3751 24.9654 14.4832 25.1578 14.6756C25.3503 14.868 25.4584 15.129 25.4584 15.4011C25.4584 15.6733 25.3503 15.9343 25.1578 16.1267L19.7417 21.5326L25.1476 26.9385C25.315 27.1339 25.4025 27.3854 25.3926 27.6426C25.3826 27.8998 25.276 28.1438 25.094 28.3258C24.912 28.5077 24.6681 28.6144 24.4109 28.6243C24.1537 28.6342 23.9022 28.5468 23.7067 28.3793L17.5753 22.2479C17.3865 22.0576 17.2801 21.8007 17.279 21.5326Z" fill="#464646"/>
                    </svg>
                </div>

                <!-- BOUTON SUIVANT -->
                <div class="swiper-button-next">
                    <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="43" height="43" rx="21.5" fill="white" fill-opacity="0.5" style="backdrop-filter: blur(2.5px);" />
                        <path d="M25.721 21.5326C25.7218 21.3981 25.696 21.2648 25.6452 21.1403C25.5943 21.0158 25.5194 20.9025 25.4247 20.807L19.2933 14.6756C19.1008 14.4832 18.8398 14.3751 18.5677 14.3751C18.2956 14.3751 18.0346 14.4832 17.8422 14.6756C17.6497 14.868 17.5416 15.129 17.5416 15.4011C17.5416 15.6733 17.6497 15.9343 17.8422 16.1267L23.2583 21.5326L17.8524 26.9385C17.685 27.1339 17.5975 27.3854 17.6074 27.6426C17.6174 27.8998 17.724 28.1438 17.906 28.3258C18.088 28.5077 18.3319 28.6144 18.5891 28.6243C18.8463 28.6342 19.0978 28.5468 19.2933 28.3793L25.4247 22.2479C25.6135 22.0576 25.7199 21.8007 25.721 21.5326Z" fill="#464646"/>
                    </svg>
                </div>
                

                <!-- Titre -->
                <h3 class="product-card__title">Описание товара</h3>
            </div>

            <!-- SKU -->
            <div class="product-card__sku">
                <span class="product-card__sku-label">Артикул —</span>
                <span class="product-card__sku-value">4607</span>
            </div>

            <!-- Description -->
            <p class="product-card__description">Угловая бежевая кухня на заказ с матовыми фасадами в современном стиле</p>

            <!-- Matériaux -->
            <div class="product-card__materials">
                <h4 class="product-card__materials-title">Варианты материалов</h4>
                <div class="product-card__materials-list">
                    <label class="product-card__material">
                        <input type="radio" name="material-{id}" value="pvc" class="product-card__material-input" checked>
                        <span class="product-card__material-text">ПВХ</span>
                    </label>
                    <label class="product-card__material">
                        <input type="radio" name="material-{id}" value="enamel" class="product-card__material-input">
                        <span class="product-card__material-text">Эмаль</span>
                    </label>
                    <label class="product-card__material">
                        <input type="radio" name="material-{id}" value="plastic" class="product-card__material-input">
                        <span class="product-card__material-text">Пластик</span>
                    </label>
                    <label class="product-card__material">
                        <input type="radio" name="material-{id}" value="massive" class="product-card__material-input">
                        <span class="product-card__material-text">Массив</span>
                    </label>
                </div>
            </div>

            <!-- Zoom -->
            <a href="images/produit1-1.jpg" 
               class="product-card__zoom" 
               data-fancybox="gallery-{id}"
               aria-label="Увеличить">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2 8.1C16.2 8.33869 16.2948 8.56761 16.4636 8.7364C16.6324 8.90518 16.8613 9 17.1 9C17.3387 9 17.5676 8.90518 17.7364 8.7364C17.9052 8.56761 18 8.33869 18 8.1V0.9C18 0.661305 17.9052 0.432387 17.7364 0.263604C17.5676 0.0948211 17.3387 0 17.1 0H9.9C9.66131 0 9.43239 0.0948211 9.2636 0.263604C9.09482 0.432387 9 0.661305 9 0.9C9 1.13869 9.09482 1.36761 9.2636 1.5364C9.43239 1.70518 9.66131 1.8 9.9 1.8H16.2V8.1ZM1.8 9.9C1.8 9.6613 1.70518 9.43239 1.5364 9.2636C1.36761 9.09482 1.13869 9 0.9 9C0.661306 9 0.432386 9.09482 0.263603 9.2636C0.09482 9.43239 0 9.6613 0 9.9V17.1C0 17.3387 0.09482 17.5676 0.263603 17.7364C0.432386 17.9052 0.661306 18 0.9 18H8.1C8.3387 18 8.56761 17.9052 8.7364 17.7364C8.90518 17.5676 9 17.3387 9 17.1C9 16.8613 8.90518 16.6324 8.7364 16.4636C8.56761 16.2948 8.3387 16.2 8.1 16.2H1.8V9.9Z" fill="#464646"/>
                </svg>
            </a>

            <!-- Prix + Bouton -->
            <div class="product-card__price-row">
                <div class="product-card__price">
                    <div class="product-card__price-main">
                        <div class="product-card__price-group">
                            <span class="product-card__price-label">Цена от</span>
                            <span class="product-card__price-value">515 700 ₽</span>
                        </div>
                    </div>
                    
                    <div class="product-card__price-meter">
                        <span class="product-card__price-label">Погонный метр от</span>
                        <span class="product-card__price-dash">—</span>
                        <span class="product-card__price-value2">30 000 ₽</span>
                    </div>
                </div>
                
                <button class="product-card__order">Заказать</button>
            </div>

            <!-- Footer -->
            <div class="product-card__footer">
                <div class="product-card__divider"></div>
                <div class="product-card__footer-row">
                    <div class="product-card__counter">
                        <button class="product-card__like" aria-label="Нравится">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                        </button>
                        <span class="product-card__counter-value">57</span>
                    </div>
                    <a href="/calc" class="product-card__calc" target="_blank">
                        Рассчитать стоимость
                        <svg class="product-card__arrow" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.721 21.5326C25.7218 21.3981 25.696 21.2648 25.6452 21.1403C25.5943 21.0158 25.5194 20.9025 25.4247 20.807L19.2933 14.6756C19.1008 14.4832 18.8398 14.3751 18.5677 14.3751C18.2956 14.3751 18.0346 14.4832 17.8422 14.6756C17.6497 14.868 17.5416 15.129 17.5416 15.4011C17.5416 15.6733 17.6497 15.9343 17.8422 16.1267L23.2583 21.5326L17.8524 26.9385C17.685 27.1339 17.5975 27.3854 17.6074 27.6426C17.6174 27.8998 17.724 28.1438 17.906 28.3258C18.088 28.5077 18.3319 28.6144 18.5891 28.6243C18.8463 28.6342 19.0978 28.5468 19.2933 28.3793L25.4247 22.2479C25.6135 22.0576 25.7199 21.8007 25.721 21.5326Z" fill="#464646"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    `;

    // ============================================
    // GÉNÉRATION DES 6 CARTES
    // ============================================
    for (let i = 1; i <= 6; i++) {
        let cardHtml = cardTemplate.replace(/\{id\}/g, i);
        cardHtml = cardHtml.replace(/image1\.jpg/g, `image${1}.jpg`);
        $('.product-list').append(cardHtml);
    }

    // ============================================
    // ATTENDRE QUE LE DOM SOIT PRÊT
    // ============================================
    setTimeout(function() {
        // ============================================
        // INITIALISATION DES SWIPER SLIDERS
        // ============================================
        $('.product-card__slider').each(function(index) {
            const $slider = $(this);
            
            // S'assurer que le slider est visible
            $slider.css('visibility', 'visible');
            
            const isMobile = window.innerWidth <= 768;
            
            try {
                const swiper = new Swiper($slider[0], {
                   loop: true,
    pagination: {
        el: $slider.find('.swiper-pagination')[0],
        clickable: true,
        renderBullet: function(index, className) {
            // Force l'affichage des segments
            return '<span class="' + className + '"></span>';
        },
    },
    navigation: {
        nextEl: $slider.find('.swiper-button-next')[0],
        prevEl: $slider.find('.swiper-button-prev')[0],
    },
    autoplay: isMobile ? {
        delay: 3000,
        disableOnInteraction: false,
    } : false,
    slidesPerView: 1,
    spaceBetween: 0,
    watchOverflow: true,
                    on: {
                        init: function() {
                            console.log('Swiper initialisé pour le slider', index);
                        },
                        slideChange: function() {
                            // Optionnel
                        }
                    }
                });
                
                $slider.data('swiper', swiper);
                
            } catch (error) {
                console.error('Erreur initialisation Swiper:', error);
            }
        });

        // ============================================
        // FORCER L'AFFICHAGE DES SLIDERS
        // ============================================
        $('.swiper-slide').css({
            'display': 'block',
            'visibility': 'visible'
        });
        
        $('.swiper-slide img').css({
            'display': 'block',
            'visibility': 'visible',
            'opacity': '1'
        });

    }, 100); // Petit délai pour laisser le DOM se stabiliser

    // ============================================
    // GESTION DU REDIMENSIONNEMENT
    // ============================================
    let resizeTimer;
    $(window).on('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            const isMobile = window.innerWidth <= 768;
            
            $('.product-card__slider').each(function() {
                const swiper = $(this).data('swiper');
                if (swiper) {
                    if (isMobile) {
                        swiper.params.autoplay = { delay: 3000, disableOnInteraction: false };
                        swiper.autoplay.start();
                    } else {
                        swiper.params.autoplay = false;
                        swiper.autoplay.stop();
                    }
                    
                    // Mettre à jour le slider
                    swiper.update();
                }
            });
        }, 250);
    });

    // ============================================
    // GESTION DU CLIC SUR LA CARTE
    // ============================================
    $('.product-card').on('click', function(e) {
        const interactiveElements = [
            '.swiper-button-prev', '.swiper-button-next', '.swiper-pagination',
            '.product-card__material', '.product-card__material-input',
            '.product-card__order', '.product-card__like', '.product-card__zoom',
            '.product-card__calc', 'a', 'button', 'input'
        ];
        
        let isInteractive = false;
        interactiveElements.forEach(selector => {
            if ($(e.target).closest(selector).length) {
                isInteractive = true;
            }
        });
        
        if (!isInteractive) {
            window.open('/card', '_blank');
        }
    });

    // ============================================
    // GESTION DU LIKE
    // ============================================
    $('.product-card__like').on('click', function() {
        const $counter = $(this).closest('.product-card__counter');
        const $value = $counter.find('.product-card__counter-value');
        let count = parseInt($value.text());
        
        $(this).toggleClass('product-card__like--active');
        
        if ($(this).hasClass('product-card__like--active')) {
            $(this).find('svg').css('fill', '#e74c3c');
            $value.text(count + 1);
        } else {
            $(this).find('svg').css('fill', 'none');
            $value.text(count - 1);
        }
    });

    // ============================================
    // GESTION DES MATÉRIAUX
    // ============================================
    $('.product-card__material-input').on('change', function() {
        console.log('Matériau sélectionné:', $(this).val());
    });

});