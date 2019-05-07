import React from 'react'
<<<<<<< HEAD
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
=======

class News extends React.Component {
  render() {
    return(
      <div className="news">
        <p className="news-author">Some author</p>
        <h2>Title of News</h2>
        <p className="news-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores neque, sint cupiditate necessitatibus illum saepe totam, perspiciatis aspernatur amet eius incidunt magnam eveniet, itaque quae, eligendi quas neque, sint cupiditate necessitatibus illum saepe totam, perspiciatis aspernatur amet eius incidunt dolorem dicta ipsa.</p>
      </div>
    )
>>>>>>> ab7c196b2ffcb843e0da905f3833d1da89e12ea5
  }
}

export default News
