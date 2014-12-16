/**
 * Created by meathill on 14/12/3.
 */
'use strict';
$(function () {

  // topbar
  var topbar = $('#top-bar');
  $(window).on('scroll', function () {
    topbar.toggleClass('active', document.body.scrollTop > 0);
  });

  // weibo

  // blog

  // GA
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-26694288-7', 'auto');
  ga('send', 'pageview');
});