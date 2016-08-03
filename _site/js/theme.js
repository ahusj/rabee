;(function($) {

  'use strict'

  var themeHero = function(){

    var $hero = $('.header-image');
    var $headbar = $('.site-header');
    var $wHeight = $(window).height();
    var $tbarHeight = $headbar.outerHeight();
    var $nHeight    = $wHeight-$tbarHeight;

    $hero.height($nHeight);

  };

  $(function() {

    themeHero();

  });


})(jQuery);
