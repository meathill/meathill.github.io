/**
 * Created by meathill on 14/12/3.
 */
import '../styl/screen.styl';
import $ from 'jquery';
import Blog from './app/Blog';

const {forEach} = Array.prototype;

let topbar = $('#top-bar');
const points = [...document.querySelectorAll('body > div[id]')].map(item => {
  return item.getBoundingClientRect().top;
});
window.addEventListener('scroll', function () {
  const {scrollY} = window;
  topbar.toggleClass('bg-dark', scrollY > 10);
  for (let i = points.length - 1; i > -1; i--) {
    if (points[i] - scrollY < 73 && points[i] - scrollY > -33) { // top-bar高度是53，给20px适配
      topbar.find('li').eq(i).addClass('active')
        .siblings().removeClass('active');
      break;
    }
  }
});

// way points

// blog
const blog = new Blog({
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
