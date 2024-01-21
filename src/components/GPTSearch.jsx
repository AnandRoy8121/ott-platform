import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import { LoginBG } from '../utils/constants'

const GPTSearch = () => {
  return (
    <div className=''>
      <div className='absolute -z-10'>
        <img className='w-screen h-screen object-cover' src={LoginBG} alt="bg-image" />
      </div>
      <GPTSearchBar/>
      <GPTMovieSuggestion/>
    </div>
  )
}

export default GPTSearch