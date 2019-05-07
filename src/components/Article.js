import React from 'react'

class Article extends React.Component {
  render() {
    const {author, title, content} = this.props.news
    return(
      <div className="news">
        <p className="news-author">{author}</p>
        <h2>{title}</h2>
        <p className="news-content">{content}</p>
      </div>
    )
  }
}

export default Article
