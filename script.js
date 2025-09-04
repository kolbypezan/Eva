document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Menu Toggle ---
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.querySelector('.main-nav');

    if (menuIcon && navMenu) {
        menuIcon.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }


    // --- Services Page Tab Functionality ---
    const serviceTabsContainer = document.querySelector('.service-tabs');
    
    if (serviceTabsContainer) {
        const tabs = serviceTabsContainer.querySelectorAll('.service-tab');
        const infoPanels = document.querySelectorAll('.service-info');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Get the target tab from data attribute
                const targetId = tab.dataset.tab;
                const targetPanel = document.getElementById(targetId);

                // Remove active class from all tabs and info panels
                tabs.forEach(t => t.classList.remove('active'));
                infoPanels.forEach(p => p.classList.remove('active'));

                // Add active class to the clicked tab and its corresponding panel
                tab.classList.add('active');
                if (targetPanel) {
                    targetPanel.classList.add('active');
                }
            });
        });
    }

});
