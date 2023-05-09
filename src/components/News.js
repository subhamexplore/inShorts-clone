import React from 'react'
import './News.css'

const News = ({newsItem}) => {
    const fullDate = new Date(newsItem.publishedAt)
    var date = fullDate.toString().split(" ")
    const hour = parseInt(date[4].substring(0,2))
    const time = hour>12?true:false
  return (
<div className="news">
        <img src={newsItem.urlToImage?newsItem.urlToImage:"/noi.jpg"} alt="newsItem.title" className='newsImg'/>
    <div className="newsText">
            <span className="title">{newsItem.title}</span>
            <span className="author">
                <a href={newsItem.url} target="__blank">
                    <b>short{" "}</b>
                </a>
                <span className="muted">by {newsItem.author?newsItem.author:"unknown"} /{" "}
                    {
                        time?`${hour-12}:${date[4].substring(3,5)} PM`:`${hour}:${date[4].substring(3,5)} AM`
                    }
                    {" "}on {date[2]} {date[1]} {date[3]}, {date[0]}
                </span>
            </span>
        
        <div className="lowerNewstext">
            <div className="description">
                {newsItem.description}
            </div>
            <span className="readMore">
                read more at{" "}
                <a href={newsItem.url} target="__blank" className='source'>
                    <b>{newsItem.source.name}</b>
                </a>
            </span>
        </div>
    </div>
</div>
  )
}

export default News