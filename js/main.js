(function() {

    // Бургер

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon');
        const burgerNavLink = e.target.closest('.nav__link');

        if(!burgerIcon && !burgerNavLink) return
        if(document.documentElement.clientWidth < 900)

        if(document.body.classList.contains('body--burger-opened')) {
            document.body.classList.remove('body--burger-opened')
        } else {
            document.body.classList.add('body--burger-opened')
        }
        
    }

    // Модалка

    const btnOpenModal = document.querySelector('.about__inner-button');
    const modal = document.querySelector('.modal')

    btnOpenModal.addEventListener('click', () => {
        document.body.classList.add('body--modal-opened');
    })

    modal.addEventListener('click', event => {
        const target = event.target
        if(target && target.classList.contains('modal') || target.classList.contains('modal__cancel')) {
            document.body.classList.remove('body--modal-opened');
        }
    })

    document.addEventListener('keydown', event => {
        if(event.code === 'Escape') {
            document.body.classList.remove('body--modal-opened');
        }
    })

    // Табы

    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {

        const tabControl = e.target.closest(".tab-controls__link")

        if (!tabControl) return
        e.preventDefault() 
        if(tabControl.classList.contains('tab-controls__link--active')) return

        const tabContentID = tabControl.getAttribute('href'); 
        const tabContent = document.querySelector(tabContentID);
        const activeControl = document.querySelector('.tab-controls__link--active')
        const activeContent = document.querySelector('.tab-content--show')

        if(activeControl) {
        activeControl.classList.remove('tab-controls__link--active')
        }
        if(activeContent) {
        activeContent.classList.remove('tab-content--show')
        }

        tabControl.classList.add('tab-controls__link--active') 
        tabContent.classList.add('tab-content--show')

    }

})()
