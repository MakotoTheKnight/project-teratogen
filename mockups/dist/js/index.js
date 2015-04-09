(function ($) {
  'use strict';

  $(document).ready(function () {
    function updateContent(dest) {
      $('.canvas-body').addClass('hidden');
      $('.' + dest).removeClass('hidden');
    }

    function onCategoryClick (event) {
      var type = $(event.currentTarget).attr('data-category');
      updateContent(type);
    }

    $('.category-btn').click(onCategoryClick);
  });

} (jQuery));