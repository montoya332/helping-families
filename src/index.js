import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const location = window.location;

(function ($) {
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
      location.hostname === this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate(
          {
            scrollTop: target.offset().top - 70
          },
          1000
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').addClass('hide');
  });
  //Image Flip :
  $('.image-flip').click(function () {
    $(this).addClass('hover').removeClass('hover');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  // $('body').scrollspy({
  //   target: '#mainNav',
  //   offset: 100
  // });
  window.$ = $;
  // Collapse Navbar
  var navbarCollapse = function () {
    var mainNavElm = $('#mainNav');
    var whiteBrandImg = $('#white-brand-img')
    if (!mainNavElm.length) {
    } else if (mainNavElm.offset().top > 200) {
      mainNavElm.addClass('navbar-shrink');
      whiteBrandImg.attr("src", "logo_dark.svg");
    } else {
      mainNavElm.removeClass('navbar-shrink');
      whiteBrandImg.attr("src","logo.svg");

      var top = window.document.documentElement.scrollTop || window.document.body.scrollTop;
      if (top === -1) {
        $('html, body').animate({scrollTop: 0}, 1);
      }
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
})($); // End of use strict
