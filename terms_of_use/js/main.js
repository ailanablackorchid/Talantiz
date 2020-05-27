function openNotification() {
    openModal('#modal-notify');
}

function openModal(modal_id) {
    let modal = $(modal_id);
        
    modal.addClass('modal__shown');
    
    $('body').css({
        overflow: 'hidden'
    });

    modal.find('.modal-overlay, .modal-close')
        .one('click', close);

    function close() {
        $('body').css({
            overflow: 'initial'
        });

        modal.removeClass('modal__shown');
    }
}

$(() => {
    $('.header-mobile-toggler').click(() => {
        $('#header .header-right').toggleClass('header-right__toggled');
    });

    $('.register').click(() => openModal('#modal-register'));

    $('.login').click(() => openModal('#modal-login'));
});