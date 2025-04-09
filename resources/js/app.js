         document.querySelectorAll('.icon').forEach(item => {
             item.addEventListener('click', () => {
                 alert('Action en cours de développement !');
             });
         });
         
         
         
         document.addEventListener("DOMContentLoaded", function () {
             let videos = document.querySelectorAll("video");
         
             let observer = new IntersectionObserver((entries) => {
                 entries.forEach((entry) => {
                     if (entry.isIntersecting) {
                         entry.target.play();
                     } else {
                         entry.target.pause();
                     }
                 });
             }, { threshold: 0.5 });
         
             videos.forEach((video) => {
                 observer.observe(video);
             });
         });
         
         document.addEventListener("DOMContentLoaded", () => {
             const tabs = document.querySelectorAll(".tab");
             const indicator = document.querySelector(".tab-indicator");
         
             tabs.forEach((tab, index) => {
                 tab.addEventListener("click", () => {
                     // Supprime la classe active de tous les onglets
                     tabs.forEach(t => t.classList.remove("active"));
                     tab.classList.add("active");
         
                     // Déplace l'indicateur sous l'onglet sélectionné
                     indicator.style.transform =  `translateX(${index * 100}%)`;
                 });
             });
         });
         
         document.addEventListener("DOMContentLoaded", function() {
             let followBtn = document.getElementById("follow-btn");
             let followersCount = document.getElementById("followers");
         
             let isFollowing = false;
         
             followBtn.addEventListener("click", function() {
                 isFollowing = !isFollowing;
         
                 if (isFollowing) {
                     followersCount.textContent = parseInt(followersCount.textContent) + 1;
                     followBtn.textContent = "Abonné(e)";
                     followBtn.style.backgroundColor = "#555";
                 } else {
                     followersCount.textContent = parseInt(followersCount.textContent) - 1;
                     followBtn.textContent = "Suivre";
                     followBtn.style.backgroundColor = "#1DA1F2";
                 }
             });
         });


         /*================= SE DECONNECTER ====================*/


        document.addEventListener('DOMContentLoaded', function() {
            // Éléments du DOM
            const loginPage = document.getElementById('login-page');
            const signupPage = document.getElementById('signup-page');
            const savedAccount = document.getElementById('saved-account');
            const profileDropdown = document.getElementById('profile-dropdown');
            const logoutBtn = document.getElementById('logout-btn');
            const addAccountBtn = document.getElementById('add-account-btn');
            const signupLink = document.getElementById('signup-link');
            const loginFromSignup = document.getElementById('login-from-signup');
            
            // État de l'application
            let isLoggedIn = false;
            let accounts = [
                { name: "Obed", email: "obedmbora60@gmail.com", username: "Obed" },
                { name: "Delen", email: "delenboard@gmail.com", username: "Delen" }
            ];
            
            // Remplir les sélecteurs de date
            function populateDateSelects() {
                const monthSelect = document.getElementById('birth-month');
                const daySelect = document.getElementById('birth-day');
                const yearSelect = document.getElementById('birth-year');
                
                // Mois
                const months = [
                    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
                    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
                ];
                months.forEach((month, index) => {
                    const option = document.createElement('option');
                    option.value = index + 1;
                    option.textContent = month;
                    monthSelect.appendChild(option);
                });
                
                // Jours
                for (let i = 1; i <= 31; i++) {
                    const option = document.createElement('option');
                    option.value = i;
                    option.textContent = i;
                    daySelect.appendChild(option);
                }
                
                // Années
                const currentYear = new Date().getFullYear();
                for (let i = currentYear; i >= currentYear - 100; i--) {
                    const option = document.createElement('option');
                    option.value = i;
                    option.textContent = i;
                    yearSelect.appendChild(option);
                }
            }
            
            // Gestion du compte sauvegardé
            savedAccount.addEventListener('click', function() {
                if (!isLoggedIn) {
                    // Simuler une connexion
                    isLoggedIn = true;
                    alert("Connecté en tant que Obed");
                    
                    // Afficher le menu profil
                    profileDropdown.style.display = 'block';
                } else {
                    // Basculer l'affichage du menu
                    profileDropdown.style.display = 
                        profileDropdown.style.display === 'block' ? 'none' : 'block';
                }
            });
            
            // Déconnexion
            logoutBtn.addEventListener('click', function() {
                isLoggedIn = false;
                profileDropdown.style.display = 'none';
                alert("Vous avez été déconnecté");
            });
            
            // Ajouter un autre compte
            addAccountBtn.addEventListener('click', function() {
                profileDropdown.style.display = 'none';
                alert("Fonctionnalité d'ajout de compte");
            });
            
            // Navigation entre les pages
            signupLink.addEventListener('click', function(e) {
                e.preventDefault();
                loginPage.style.display = 'none';
                signupPage.style.display = 'block';
            });
            
            loginFromSignup.addEventListener('click', function(e) {
                e.preventDefault();
                signupPage.style.display = 'none';
                loginPage.style.display = 'block';
            });
            
            // Fermer le menu quand on clique ailleurs
            document.addEventListener('click', function(e) {
                if (!e.target.closest('.profile-dropdown') && 
                    !e.target.closest('#saved-account')) {
                    profileDropdown.style.display = 'none';
                }
            });
            
            // Initialisation
            populateDateSelects();
        });


