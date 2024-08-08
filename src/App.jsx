import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const App = () => {

const [articles , setArticles] = useState([])

  useEffect(()=>{ 
    Axios.get(`https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=${import.meta.env.VITE_SOME_KEY}`).then((response)=>{
        setArticles(response.data.articles)
    })
  },[]);

  return (
    <>
    <h1 className='font-bold text-3xl text-center pt-8'>Global News</h1>
    <div className='flex justify-center flex-wrap gap-4 p-8 '>
      {articles.map((article,index)=>(
        <div key={index} className='bg-gray-200 w-[32rem] rounded-lg'>
        <h1 className='font-semibold text-lg p-4'>{article.title}</h1>
        <img className='p-6' src={article.image} alt="Not rendered" />
        <p className='text-base p-4 '> {article.description}</p>
        <a href={article.url} className='ml-4 pb-3'>Read More ...</a>
      </div>
      ))}


    </div>
    </>
  )
}

export default App