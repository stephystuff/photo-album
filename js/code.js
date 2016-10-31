(function () {
  'use strict';

  $('main')
  .find('li')
  .on('click', function zoomedIn(eventObj) {
    $(this).toggleClass('zoomed');
    $('main').toggleClass('zooming');
    $(this).append( $('nav'));
  })

  $('nav')
  .find('button')
  .on('click', function zoomPreviousImage(eventObj) {
    eventObj.stopPropagation();

    var currentImage = $(this).closest('li')
    var nextImage = $(this).closest('li').next();
    var previousImage = $(this).closest('li').prev();

    if($(this).is('.next')) {
      nextImage.append($('nav'));
      nextImage.toggleClass('zoomed');
      currentImage.removeClass('zoomed');

    } else {

      previousImage.append($('nav'));
      previousImage.toggleClass('zoomed');
      currentImage.removeClass('zoomed');
    }

  })






















})();
