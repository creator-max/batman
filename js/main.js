$(document).ready(function () {
    let menuItem = $('.menu-i');

    menuItem.on('click', function (event) {
        event.preventDefault();
        $('.visible').toggleClass('visible');
        $($(this).attr('href')).toggleClass('visible');
        $('.active').toggleClass('active');
        $(this).toggleClass('active');
      });
});