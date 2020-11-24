import React, { Component } from 'react';

class Blog extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: [],
  };

  componentDidMount() {
    fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@joegelay'
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items.filter((article) =>
              article.categories.includes('programming')
            ),
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    return (
      <div className="content">
        <header id="content-header">What I've Written.</header>
        <p id="content-description">
          My articles have been featured in Medium's largest tech publications
          including The Startup and Better Programming.
        </p>

        <div id="medium-widget">
          {!this.state.isLoaded && <p>Fetching data from Medium!</p>}
          {this.state.isLoaded &&
            this.state.items.map((article) => (
              <div className="article-card" key={article.guid}>
                <a className="article-image" href={article.link}>
                  <img width="100%" src={article.thumbnail} alt="img" />
                </a>
                <div className="article-title">
                  <a href={article.link}>{article.title}</a>
                </div>
                <div className="article-date">
                  {new Date(article.pubDate)
                    .toDateString()
                    .split(' ')
                    .slice(1, 3)
                    .join(' ')
                    .concat(
                      ', ',
                      new Date(article.pubDate)
                        .toDateString()
                        .split(' ')
                        .slice(3)
                    )}
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Blog;
