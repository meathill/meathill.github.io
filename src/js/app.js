/**
 * Created by meathill on 14/12/3.
 */
'use strict';
$(function (ns) {
  if (DEBUG) {
    $('template').each(function () {
      TEMPLATE[this.id] = Handlebars.compile(this.innerHTML.replace(/\s{2,}|\n/g, ''));
    }).remove();
  }

  // topbar
  var topbar = $('#top-bar');
  $(window).on('scroll', function () {
    var offset = document.body.scrollTop;
    topbar.toggleClass('active', offset > 0);
    for (var i = points.length - 1; i > -1; i--) {
      if (points[i] - offset < 73 && points[i] - offset > -33) { // top-bar高度是53，给20px适配
        topbar.find('li').eq(i).addClass('active')
          .siblings().removeClass('active');
        break;
      }
    }
  });

  // way points
  var points = [];
  $('a[name]').each(function () {
    points.push($(this).offset().top);
  });

  // blog
  var blog = new ns.Blog({
    el: '#blog-grid'
  });

  // GA
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-26694288-7', 'auto');
  ga('send', 'pageview');
}(meathill));
