/**
 * Created by meathill on 14/12/3.
 */
import '../styl/screen.styl';
import $ from 'jquery';
import Blog from './app/Blog';

let topbar = $('#top-bar');
$(window).on('scroll', function () {
  let offset = document.body.scrollTop;
  topbar.toggleClass('bg-inverse', offset > 0);
  for (let i = points.length - 1; i > -1; i--) {
    if (points[i] - offset < 73 && points[i] - offset > -33) { // top-bar高度是53，给20px适配
      topbar.find('li').eq(i).addClass('active')
        .siblings().removeClass('active');
      break;
    }
  }
});

// way points
let points = [];
$('a[name]').each(function () {
  points.push($(this).offset().top);
});

// blog
let blog = new Blog({
  el: '#blog-grid'
});

// GA
(function(i,s,o,g,r,a){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o);
  a.async=1;a.src=g;
  document.body.append(a);
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-26694288-7', 'auto');
ga('send', 'pageview');
