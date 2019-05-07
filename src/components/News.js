import React from 'react'
import Article from './Article'

class News extends React.Component {

  renderNews = () => {
    const {news} = this.props
    let newsTemplate = null

    if(news.length) {
      newsTemplate = news.map(item => {
        return <Article key={item.id} news={item} />
      })
    }
    return newsTemplate
  }
  render() {
    return <> {this.renderNews()} </>
  }
}

export default News
