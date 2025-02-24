import React, { useRef } from 'react'
import { Form } from 'react-router-dom'
import lang from '../Utils/langConstants'
import { useSelector } from 'react-redux'
import { SUPPORTED_LANG } from '../Utils/constants'
import openai from '../Utils/openAI'

const GPTSearchBar = () => {
    const client = new openai;

  const languageKey = useSelector(store => store.config.lang)
  const searchTxt=useRef(null)
  const handleGPTSearchClick=async()=>{
       const gptRes=await client.chat.completions.create({
        model: 'gpt-4o',
        messages: [{ role: 'user', content: 'Say this is a test' }],
        stream: true,
      });
      console.log(gptRes.choices)
  }

  return (
    <div className=" pt-24 flex justify-center">
      <form onSubmit={(e)=>e.preventDefault()} className="w-4/5 bg-black rounded-lg shadow-md flex overflow-hidden">
        {/* Language selector */}
        <select 
          className="bg-black text-white p-3 border-r border-gray-700" 
          defaultValue={SUPPORTED_LANG.id}
          aria-label="Select language"
        >
          <option value={SUPPORTED_LANG.id}>{SUPPORTED_LANG.name}</option>
          {/* Add more options if needed */}
        </select>
        {/* Search input */}
        <input 
        ref={searchTxt}
          type="text" 
          className="flex-grow p-4 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-700" 
          placeholder={lang[languageKey].gptsearchPlaceholder}
        />
        {/* Search button */}
        <button 
          className="px-6 py-3 bg-red-700 text-white font-semibold hover:bg-red-800 transition-colors"
          type="submit"
          onClick={handleGPTSearchClick}
        
        >
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  )
}

export default GPTSearchBar

