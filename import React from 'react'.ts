import React from 'react'

 const LandingPage = () => {
  return (
    <div>
        <header>
            <h1 className='py-10  text-5xl font-extrabold text-center text-blue-600' >Short URL</h1>
        </header>
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl mx-auto mt-10">
      <h1 className="text-gray-600 font-bold mb-4 text-center text-3xl ">Paste the URL to be shortened</h1>
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="Enter the link here"
          className="border border-gray-300 rounded p-2 w-full text-lg"/>
        <button
          className="bg-blue-600 text-white rounded px-6 py-2 text-lg hover:bg-blue-700" >
          Shorten URL
        </button>
      </div>
      <p className="text-gray-500 text-sm">
        ShortURL is a free tool to shorten URLs and generate short links. URL shortener allows to create a shortened link making it easy to share.
      </p>
    </div>
    
      <div className="bg-white p-8 w-full max-w-3xl mx-auto mt-10 text-center">
      <h3 className="text-xl font-bold mb-4">Simple and fast URL shortener!</h3>
      <p className="text-gray-500 mb-2">
        ShortURL allows to shorten long links from 
        <span className="font-medium text-black"> Instagram, Facebook, YouTube, Twitter, LinkedIn, WhatsApp, TikTok</span>,
        blogs and sites. Just paste the long URL and click the <span className="font-medium text-black">Shorten URL</span> button.
      </p>
      <p className="text-gray-500 mb-2">
        On the next page, copy the shortened URL and share it on sites, chat, and emails. After shortening the URL, check 
        how many clicks it received.
      </p>
    </div>
    </div>
  )
}
export  default LandingPage