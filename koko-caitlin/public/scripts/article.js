'use strict';

function Article (rawDataObj) {
  this.author = rawDataObj.author;
  this.authorUrl = rawDataObj.authorUrl;
  this.title = rawDataObj.title;
  this.category = rawDataObj.category;
  this.body = rawDataObj.body;
  this.publishedOn = rawDataObj.publishedOn;
}

Article.all = [];

Article.prototype.toHtml = function() {
  let template = Handlebars.compile($('#article-template').text());

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';
  this.body = marked(this.body);

  return template(this);
};

Article.loadAll = rawData => {
  rawData.sort((a,b) => (new Date(b.publishedOn)) - (new Date(a.publishedOn)));

  rawData.forEach(articleObject => Article.all.push(new Article(articleObject)));
};

Article.fetchAll = () => {
  if (localStorage.rawData) {
    Article.loadAll(JSON.parse(localStorage.rawData));
    articleView.initIndexPage();
  } else {
    $.getJSON('/data/hackerIpsum.json')
      .then(rawData => {
        Article.loadAll(rawData);
        localStorage.rawData = JSON.stringify(rawData);
        articleView.initIndexPage();
      }, err => {
        console.error(err);
      });
  }
};

Article.prototype.insertRecord = function(callback) {
  $.post('/articles', {author: this.author, authorUrl: this.authorUrl, body: this.body, category: this.category, publishedOn: this.publishedOn, title: this.title})
    .then(data => {
      console.log(data);

      // COMMENT: What is the purpose of this line? Is the callback invoked when this method is called? Why or why not?
      // The call back function above is set up for a new article to populate the browser. If call back is true, return the callback aka push new article to browser. IN this case is it true so it's invoked.
      if (callback) callback();
    });
};
