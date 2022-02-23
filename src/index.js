/**
 * Created by meathill on 14/12/3.
 */
import '../styl/screen.styl';
import $ from 'jquery';
import Blog from './app/Blog';

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
new Blog({
  el: '#blog-grid'
});

// GA
const dataLayer = window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-26694288-7');
