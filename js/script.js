let currentSlide = 0;

        function changeSlide(direction) {
            const slides = document.querySelectorAll('.slide');
            const totalSlides = slides.length;

            currentSlide += direction;

            if (currentSlide >= totalSlides - 2) {
                currentSlide = totalSlides - 3;
            } else if (currentSlide <= -1) {
                currentSlide = 0;
            }

            const offset = -currentSlide * (100 / 3);
            document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
        }

        function openModal(modalId) {
            document.getElementById(modalId).style.display = "block";
        }

        function closeModal(modalId) {
            document.getElementById(modalId).style.display = "none";
        }

        function showNotification(title, message) {
            document.getElementById('notificationTitle').textContent = title;
            document.getElementById('notificationMessage').textContent = message;
            openModal('notificationModal');
        }

        function handleLogin(event) {
            event.preventDefault();
            closeModal('loginModal');
            showNotification("Вы вошли в профиль!");
            return false;
        }

        function handleRegister(event) {
            event.preventDefault();
            closeModal('registerModal');
            showNotification("Успешная регистрация", "Вы успешно зарегистрировались!");
            return false;
        }
        document.addEventListener("DOMContentLoaded", function() {
            const faqQuestions = document.querySelectorAll('.faq-question');
        
            faqQuestions.forEach(question => {
                question.addEventListener('click', function() {
                    const answer = this.nextElementSibling;
                    const isVisible = answer.style.display === 'block';
        
                    // Скрыть все ответы
                    document.querySelectorAll('.faq-answer').forEach(answer => {
                        answer.style.display = 'none';
                    });
        
                    // Показать или скрыть текущий ответ
                    answer.style.display = isVisible ? 'none' : 'block';
                });
            });
        });
        
        document.addEventListener("DOMContentLoaded", function() {
            const contactForm = document.getElementById('contactForm');
        
            contactForm.addEventListener('submit', function(event) {
                event.preventDefault();
        
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const message = document.getElementById('message').value;
        
                // Здесь вы можете добавить код для отправки данных формы на сервер
        
                alert(`Спасибо, ${name}! Ваше сообщение отправлено.`);
                
                // Очистка формы после отправки
                contactForm.reset();
            });
        });
        