import React from 'react'
import { Container } from '@mui/system'
import "./Newscontent.css"
import News from '../components/News'

const Newscontent = ({ newsArray, newsResults, loadMore, setLoadMore }) => {

  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="orange">
          For the best experience use inshorts app on your smartphone
        </div>
        <div>
          <img
            src="/Group 2appled.png"
            height="40px"
            alt="apple_appdStore" />
        </div>
        <div>
          <img
            src="/dgp.png"
            height="70px"
            alt="googlePlayStore" />
        </div>
      </div>
      {
        newsArray.map((newsItem) => (
          <News newsItem={newsItem} key={newsItem.title} />
        ))
      }
      <div className="btn">
        {loadMore<=newsResults && (
          <>
            <button className="loadMore" onClick={()=>setLoadMore(loadMore+20)}>
              Load More
            </button>
          </>
          )
        }
      </div>
    </Container>
  )
}

export default Newscontent