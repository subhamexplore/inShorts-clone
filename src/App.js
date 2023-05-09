import './App.css';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import Newscontent from './NewsContent/Newscontent';
import axios from 'axios';
import Footer from './components/Footer';

function App() {
  const [category, setCategory] = useState("general")
  const [newsArray, setNewsArray] = useState([])
  const [newsResults, setNewsResults] = useState()
  const [loadMore, setLoadMore] = useState(20)

  const fetchNews = async() => {
    try {
        const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&category=${category}&pageSize=${loadMore}`)
        // console.log(news.data.articles);
        setNewsArray(news.data.articles)
        setNewsResults(news.data.totalResults)
    } catch (error) {
        console.log(error);
    }
}  
console.log(newsArray);
  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line
  }, [category, newsResults, loadMore])
  
  return (
    <div className="App">
      <Navbar setCategory = {setCategory}/>
      <Newscontent loadMore={loadMore} setLoadMore={setLoadMore} newsArray={newsArray} newsResults={newsResults}/>
      <Footer/>
    </div>
  )
}

export default App;
