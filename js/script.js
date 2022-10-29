$(document).ready(function(){
    $('.friends__wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icon/prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icon/next.png"></button>'
      });
});

const modalTrigger = document.querySelectorAll('[data-modal]'), 
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
        });
    });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    modalCloseBtn.addEventListener('click', closeModal);     

    modal.addEventListener('click', (e) =>{
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', (e) =>{
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });