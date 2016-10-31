(function () {

  $('main')
    .find('li')
    .on('click', function zoomedIn(eventObj) {
      $(this).addClass('zoomed');
      $('main').toggleClass('zooming');
    })


















})();
