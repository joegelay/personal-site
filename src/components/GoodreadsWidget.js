import React, { Component } from 'react';

class GoodreadsWidget extends Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.async = true;
    script.src =
      "https://www.goodreads.com/review/custom_widget/57355124.Joe's%20bookshelf:%20read?cover_position=left&amp;cover_size=medium&amp;num_books=10&amp;order=d&amp;shelf=read&amp;show_author=1&amp;show_cover=1&amp;show_rating=1&amp;show_review=1&amp;show_tags=1&amp;show_title=1&amp;sort=date_read&amp;widget_bg_color=FFFFFF&amp;widget_bg_transparent=&amp;widget_border_width=1&amp;widget_id=1588112847&amp;widget_text_color=000000&amp;widget_title_size=medium&amp;widget_width=full";
    this.div.appendChild(script);
  }

  render() {
    return (
      <div id="goodreads-widget" ref={(el) => (this.div = el)}>
        <div id="gr_custom_widget_1588112847"></div>
      </div>
    );
  }
}

export default GoodreadsWidget;
