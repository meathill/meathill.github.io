/**
 * Created by meathill on 14/12/9.
 */
import $ from 'jquery';
import template from '../../template/blog.pug';

const KEY = 'meathill-blogs';
const KEY_ID = 'meathill-latest';

/* global BLOG_URL */

export default class Blog {
  constructor(options) {
    this.$el = $(options.el);
    this.news = 0;

    let store = localStorage.getItem(KEY);
    this.latest = Number(localStorage.getItem(KEY_ID));
    if (store) {
      store = JSON.parse(store);
      this.render(store);
    }
    if (!this.latest) {
      this.latest = isNaN(Number(this.$el.data('latest'))) ? this.latest : Number(this.$el.data('latest'));
    }
    this.fetch();
  }

  fetch() {
    fetch('https://blog.meathill.com/feed')
      .then(response => response.text())
      .then(this.onSuccess.bind(this))
      .catch(Blog.onError);
  }

  parse(xml) {
    xml = $(xml);
    let collection = []
      , count = 0
      , tagReg = /^\w+:(\w+)$/
      , guidReg = /\?p=(\d+)$/;
    xml.find('item').each((index, element) => {
      let item = {};
      element = element.firstElementChild;
      while (element) {
        let attr = element.namespaceURI && element.tagName.match(tagReg) > 1 ? element.tagName.match(tagReg)[1] : element.tagName;
        item[attr] = element.textContent.replace(/<a.*>.*?<\/a>/, '');
        element = element.nextElementSibling;
      }
      let guid = parseInt(item.guid.match(guidReg)[1]);
      if (index === 0) {
        if (guid === this.latest) { // 没有更新，不重新渲染
          return false;
        }
        localStorage.setItem(KEY_ID, guid);
      }
      if (guid > this.latest) {
        this.news++;
      }
      collection.push(item);
      count++;
      if (count > 5) {
        return false
      }
    });
    if (this.news > 0) {
      this.news = this.news >= 5 ? '5+' : this.news;
      $('#top-bar').find('.blog').append('<span>' + this.news + '</span>');
    }
    console.log(collection);
    return collection;
  }

  render (list) {
    this.$el.html(template({list: list}));
  }

  onSuccess (data) {
    let list = this.parse(data)
      , store = JSON.stringify(list);
    if (list.length === 0) {
      return;
    }
    list = list.map(item => {
      item.thumbnail = item.thumbnail.replace('//blog.meathill.com/', '//qiniu.meathill.com');
      return item;
    });
    localStorage.setItem(KEY, store);
    this.render(list);
  }

  static onError(xhr, status, error) {
    console.log('read feed error: ', error);
  }
}
