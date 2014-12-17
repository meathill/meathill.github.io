/**
 * Created by meathill on 14/12/9.
 */
'use strict';
(function (ns){
  var KEY = 'meathill-blogs'
    , KEY_ID = 'meathill-latest';

  var blog = ns.Blog = function (options) {
    this.$el = $(options.el);
    this.template = TEMPLATE['blog-template'];

    var store = localStorage.getItem(KEY);
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

  blog.prototype = {
    news: 0,
    fetch: function () {
      $.ajax(BLOG_URL, {
        dataType: 'xml',
        context: this,
        success: this.onSuccess,
        error: this.onError
      })
    },
    parse: function (xml) {
      xml = $(xml);
      var self = this
        , collection = []
        , count = 0
        , tagReg = /^\w+:(\w+)$/
        , guidReg = /\?p=(\d+)$/;
      xml.find('item').each(function (i) {
        var item = {}
          , element = this.firstElementChild;
        while (element) {
          var attr = element.namespaceURI ? element.tagName.match(tagReg)[1] : element.tagName;
          item[attr] = element.textContent.replace(/<a.*>.*?<\/a>/, '');
          element = element.nextElementSibling;
        }
        var guid = parseInt(item.guid.match(guidReg)[1]);
        if (i === 0) {
          if (guid === self.latest) { // 没有更新，不重新渲染
            return false;
          }
          localStorage.setItem(KEY_ID, guid);
        }
        if (guid > self.latest) {
          self.news++;
        }
        collection.push(item);
        count++;
        if (count > 5) {
          return false
        }
      });
      if (this.news > 0) {
        this.news = this.news >= 5 ? '5+' : this.news;
        $('#top-bar .blog').append('<span>' + this.news + '</span>');
      }
      console.log(collection);
      return collection;
    },
    render: function (list) {
      this.$el.html(this.template({list: list}));
    },
    onError: function (xhr, status, error) {
      this.render({isError: true});
    },
    onSuccess: function (data, status, xhr) {
      var list = this.parse(data)
        , store = JSON.stringify(list);
      if (list.length === 0) {
        return;
      }
      localStorage.setItem(KEY, store);
      this.render(list);
    }
  }
}(meathill));