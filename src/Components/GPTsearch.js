import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { NETFLIX_BG } from '../Utils/constants'

const GPTsearch = () => {
  return (
    
      <div className="relative">
  <div className="absolute -z-10">
    <img className="absolute w-full" src={NETFLIX_BG} alt="Netflix Background"/>
  </div>
  <GPTSearchBar/>
  <GPTMovieSuggestions/>
</div>

    

  )
}

export default GPTsearch
