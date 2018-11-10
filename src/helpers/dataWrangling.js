
// Parses the JSON reponse into an arrays of articles.
// returns an array of arrays 
export default function wrangleArticleResponse(data) {
    let responseJson = JSON.parse(data);
    let cnnArticles = [];
    let foxArticles = [];
    let wsjArticles = [];
    let nytimesArticles = [];
    let apArticles = [];
    let bloombergArticles = [];
    let bbcArticles = [];
    let cbsArticles = [];
    let msnbcArticles = [];
    let nbcArticles = [];
    let nymagazineArticles = [];
    let reutersArticles = [];
    let economistArticles = [];
    let huffingtonpostArticles = [];
    let washingtonpostArticles = [];
    let timeArticles = [];
    let usatodayArticles = [];
    let vicenewsArticles = [];
    let i;
    let articles = [];
    for (i = 0; i < responseJson.articles.length; i++) {
      console.log(responseJson.articles[i].source.id)
      if (responseJson.articles[i].source.id === 'cnn') {
        cnnArticles.push(responseJson.articles[i]);
      } else if (responseJson.articles[i].source.id === 'fox-news') {
        foxArticles.push(responseJson.articles[i]);
      } else if (responseJson.articles[i].source.id === 'the-wall-street-journal') {
        wsjArticles.push(responseJson.articles[i]);
      } else if (responseJson.articles[i].source.id === 'the-new-york-times') {
        nytimesArticles.push(responseJson.articles[i]);
      } else if (responseJson.articles[i].source.id === 'associated-press') {
        apArticles.push(responseJson.articles[i]);
      } else if (responseJson.articles[i].source.id === 'bloomberg') {
        bloombergArticles.push(responseJson.articles[i]);
      } else if (responseJson.articles[i].source.id === 'bbc-news') {
        bbcArticles.push(responseJson.articles[i]);
      } else if (responseJson.articles[i].source.id === 'cbs-news') {
        cbsArticles.push(responseJson.articles[i]);
      } else if (responseJson.articles[i].source.id === 'msnbc') {
        msnbcArticles.push(responseJson.articles[i]);
      } else if (responseJson.articles[i].source.id === 'nbc-news') {
        nbcArticles.push(responseJson.articles[i]);
      } else if (responseJson.articles[i].source.id === 'new-york-magazine') {
        nymagazineArticles.push(responseJson.articles[i]);
      } else if (responseJson.articles[i].source.id === 'reuters') {
        reutersArticles.push(responseJson.articles[i]);
      } else if (responseJson.articles[i].source.id === 'the-economist') {
        economistArticles.push(responseJson.articles[i]);
      } else if (responseJson.articles[i].source.id === 'the-huffington-post') {
        huffingtonpostArticles.push(responseJson.articles[i]);
      } else if (responseJson.articles[i].source.id === 'the-washington-post') {
        washingtonpostArticles.push(responseJson.articles[i]);
      } else if (responseJson.articles[i].source.id === 'time') {
        timeArticles.push(responseJson.articles[i]);
      } else if (responseJson.articles[i].source.id === 'usa-today') {
        usatodayArticles.push(responseJson.articles[i]);
      } else if (responseJson.articles[i].source.id === 'vice-news') {
        vicenewsArticles.push(responseJson.articles[i]);
      }
    }
    if (cnnArticles.length > 0) {
      let articlesObj = {
        source: '',
        content: cnnArticles
      };
      articles.push(articlesObj);
    }
    if (foxArticles.length > 0) {
      let articlesObj = {
        source: '',
        content: foxArticles
      };
      articles.push(articlesObj);
    }
    if (wsjArticles.length > 0) {
      let articlesObj = {
        source: '',
        content: wsjArticles
      };
      articles.push(articlesObj);
    }
    if (nytimesArticles.length > 0) {
      let articlesObj = {
        source: '',
        content: nytimesArticles
      };
      articles.push(articlesObj);
    }
    if (apArticles.length > 0) {
      let articlesObj = {
        source: '',
        content: apArticles
      };
      articles.push(articlesObj);
    }
    if (bloombergArticles.length > 0) {
      let articlesObj = {
        source: '',
        content: bloombergArticles
      };
      articles.push(articlesObj);
    }
    if (bbcArticles.length > 0) {
      let articlesObj = {
        source: '',
        content: bbcArticles
      };
      articles.push(articlesObj);
    }
    if (cbsArticles.length > 0) {
      let articlesObj = {
        source: '',
        content: cbsArticles
      };
      articles.push(articlesObj);
    }
    if (msnbcArticles.length > 0) {
      let articlesObj = {
        source: '',
        content: msnbcArticles
      };
      articles.push(articlesObj);
    }
    if (nbcArticles.length > 0) {
      let articlesObj = {
        source: '',
        content: nbcArticles
      };
      articles.push(articlesObj);
    }
    if (nymagazineArticles.length > 0) {
      let articlesObj = {
        source: '',
        content: nymagazineArticles
      };
      articles.push(articlesObj);
    }
    if (reutersArticles.length > 0) {
      let articlesObj = {
        source: '',
        content: reutersArticles
      };
      articles.push(articlesObj);
    }
    if (economistArticles.length > 0) {
      let articlesObj = {
        source: '',
        content: economistArticles
      };
      articles.push(articlesObj);
    }
    if (huffingtonpostArticles.length > 0) {
      let articlesObj = {
        source: '',
        content: huffingtonpostArticles
      };
      articles.push(articlesObj);
    }
    if (washingtonpostArticles.length > 0) {
      let articlesObj = {
        source: '',
        content: washingtonpostArticles
      };
      articles.push(articlesObj);
    }
    if (timeArticles.length > 0) {
      let articlesObj = {
        source: '',
        content: timeArticles
      };
      articles.push(articlesObj);
    }
    if (usatodayArticles.length > 0) {
      let articlesObj = {
        source: '',
        content: usatodayArticles
      };
      articles.push(articlesObj);
    }
    if (vicenewsArticles.length > 0) {
      let articlesObj = {
        source: '',
        content: vicenewsArticles
      };
      articles.push(articlesObj);
    }
    //console.log('articlessss')
    //console.log(articles)
    return articles;
  }