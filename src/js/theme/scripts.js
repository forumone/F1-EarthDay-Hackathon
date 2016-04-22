(function ($) {
  'use strict';

  // Generic function that runs on window resize.
  function resizeStuff() {
  }

  // Runs function once on window resize.
    var TO = false;
  $(window).resize(function () {
    if (TO !== false) {
      clearTimeout(TO);
    }

    // 200 is time in miliseconds.
    TO = setTimeout(resizeStuff, 200);
  }).resize();

  // The styling is located in sass/components/_mobile-menu.scss.
  function mobileMenu() {
    $(function() {
      // Create mobile menu container, create mobile bar, and clone the main
      // menu in the navigation region.
      var $mobileNav = $('<nav class="mobile-menu" role="navigation"></nav>'),
          $mobileBar = $('<div class="mobile-menu__bar"><button class="mobile-menu__button js-mobile-menu-button mobile-menu__button--menu"><span class="mobile-menu__icon mobile-menu__icon--menu">Menu</span></button></div>'),
          $mobileLinks = $('<div class="mobile-menu__links element-hidden"></div>'),
          $mainMenu = $('.header__nav').find('.nav--main-menu').first().clone();

      // Add custom elements.
      var $mobileLogo = $('<div class="mobile-menu__logo"><a ui-sref="home">Logo</a></div>'),
          $myFavorites = $mainMenu.find('li.my-favorites').clone(),
          $secondaryNav = $('.header').find('.header__nav--secondary').clone();

      // Only create mobile menu if there is a main menu.
      if ($mainMenu.length > 0) {

        // Add Secondary nav items to mainMenu and modify classes.
        $secondaryNav.removeAttr('class').attr('class', 'secondary').appendTo($mainMenu);

        // Remove menu id, add classes, and format subnav menus.
        $mainMenu.removeAttr('id').attr('class', 'nav nav--mobile-menu').find('ul').first().attr('class', 'primary').each(function () {
          var $parentLink = $(this).siblings('a');
          $parentLink.addClass('nav__link--parent').parent('li').addClass('nav__item--parent');
          if ($parentLink.siblings('.nav__subnav-arrow').length < 1) {
            $parentLink.after('<button class="nav__subnav-arrow">Show</button>');
          }
        });

        // Remove third level menu items.
        $mainMenu.find('ul ul').remove();

        // Remove 'My Favorites' from menu items.
        $mainMenu.find('li.my-favorites').remove();

        // Insert the cloned menus into the mobile menu container.
        $mainMenu.appendTo($mobileLinks);

        // Insert search button and clone/append search bar, if it exists.
        if (!($('.mobile-menu .mobile-menu__search').length > 0)) {
          if ($('.block--search').length > 0) {
            $('.block--search').clone().addClass('mobile-menu__search').appendTo($mobileNav);
            $mobileBar.append('<button class="mobile-menu__button js-mobile-search-button mobile-menu__button--search"><span class="mobile-menu__icon mobile-menu__icon--search">Search</span></button>');
          }
        }

        // Insert 'My Favorites' into mobile bar and modify class.
        $myFavorites.removeAttr('class').attr('class', 'mobile-menu__button--my-favorites').appendTo($mobileBar);

        // Insert the logo into mobile bar.
        $mobileLogo.prependTo($mobileBar);

        // Insert the top bar into mobile menu container.
        $mobileBar.prependTo($mobileNav);

        // Insert the mobile links into mobile menu container.
        $mobileLinks.appendTo($mobileNav);

        // Insert the mobile menu markup on the page.
        $('body').prepend($mobileNav);

        var $mobileMenuWrapper = $('.mobile-menu__links'),
            $mobileMenuLinks = $mobileMenuWrapper.find('a');

        // Initially take mobile menu links out of tab flow.
        $mobileMenuLinks.attr('tabindex', -1);

        // Open/close mobile menu when menu button is clicked.
        $('.js-mobile-menu-button').click(function (e) {
          $(this).toggleClass('is-active');
          $mobileMenuWrapper.toggleClass('element-hidden');

          // Close search bar if open.
          if ($('.js-mobile-search-button').hasClass('is-active')) {
            $('.js-mobile-search-button').removeClass('is-active');
            $('.mobile-menu .mobile-menu__search').hide();
          }

          // Remove focus for mouse clicks after closing the menu.
          $(this).not('.is-active').mouseleave(function () {
            $(this).blur();
          });

          // Take mobile menu links out of tab flow if hidden.
          if ($mobileMenuWrapper.hasClass('element-hidden')) {
            $mobileMenuLinks.attr('tabindex', -1);
          }
          else {
            $mobileMenuLinks.removeAttr('tabindex');
          }

          e.preventDefault();
        });

        // Open/close submenus.
        $('.nav__subnav-arrow').click(function (e) {
          $(this).toggleClass('is-active').parent().toggleClass('is-open');
          $(this).siblings('.nav--subnav').slideToggle();

          // Remove focus for mouse clicks after closing the menu.
          $(this).not('.is-active').mouseleave(function () {
            $(this).blur();
          });

          e.preventDefault();
        });

        // Open/close search bar.
        $('.js-mobile-search-button').click(function (e) {
          $(this).toggleClass('is-active');

          // Close menu if open.
          if ($('.js-mobile-menu-button').hasClass('is-active')) {
            $('.js-mobile-menu-button').removeClass('is-active');
            $mobileMenuWrapper.addClass('element-hidden');
            $mobileMenuLinks.attr('tabindex', -1);
          }

          // Remove focus for mouse clicks after closing the menu.
          $(this).not('.is-active').mouseleave(function () {
            $(this).blur();
          });

          // Slide search bar.
          $('.mobile-menu .mobile-menu__search').slideToggle(200);

          e.preventDefault();
        });

        // Set the height of the menu.
        $mobileMenuWrapper.height($(document).height());
      }
    });
  }

  mobileMenu();

})(jQuery);
