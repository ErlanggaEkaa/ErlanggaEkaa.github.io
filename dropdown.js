$(document).ready(function(){
    $('.dropdown-toggle').on('click', function(e) {
      var $el = $(this).next('.dropdown-menu');
      $('.dropdown-menu').not($el).hide();
      $el.toggle();
      e.stopPropagation();
    });
    $(document).on('click', function(e) {
      if (!$(e.target).closest('.dropdown').length) {
        $('.dropdown-menu').hide();
      }
    });
  });