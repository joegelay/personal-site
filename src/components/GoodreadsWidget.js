import React from 'react';

const widgetSrc =
  "https://www.goodreads.com/review/custom_widget/57355124.Joe's%20bookshelf:%20read?cover_position=left&cover_size=medium&num_books=10&order=d&shelf=read&show_author=1&show_cover=1&show_rating=1&show_review=1&show_tags=1&show_title=1&sort=date_read&widget_bg_color=FFFFFF&widget_bg_transparent=&widget_border_width=1&widget_id=1588112847&widget_text_color=000000&widget_title_size=medium&widget_width=full";

const srcDoc = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <style>
      body {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
      }
      a {
        text-decoration: none;
        color: black;
      }
      .gr_custom_container_1588112847 {
        margin-top: 1rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 1.25rem;
        color: #000000;
        width: 100%;
      }
      .gr_custom_header_1588112847 { display: none; }
      .gr_custom_each_container_1588112847 {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
      .gr_custom_book_container_1588112847 {
        box-shadow: 1px 4px 12px -2px rgba(0, 0, 0, 0.75);
      }
      .gr_custom_title_1588112847 {
        margin-top: 0.7rem;
        font-size: 1.1rem;
      }
      .gr_custom_author_1588112847 {
        margin-top: 0.3rem;
        font-size: 0.8rem;
      }
      .gr_custom_rating_1588112847 {
        margin-top: 0.25rem;
        order: 1;
      }
      .gr_custom_review_1588112847 { display: none; }
      img { vertical-align: bottom; }
      center { display: none; }
      @media (max-width: 795px) {
        .gr_custom_container_1588112847 {
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
        }
      }
    </style>
  </head>
  <body>
    <div id="gr_custom_widget_1588112847"></div>
    <script src="${widgetSrc}"></script>
  </body>
</html>`;

const GoodreadsWidget = () => {
  return (
    <div id='goodreads-widget'>
      <iframe
        title='Goodreads recent books'
        srcDoc={srcDoc}
        style={{ width: '100%', minHeight: '1400px', border: 0 }}
      />
    </div>
  );
};

export default GoodreadsWidget;
