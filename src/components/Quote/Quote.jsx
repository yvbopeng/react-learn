import { useState } from "react"
import './index.scss'

const mockData = [
    {
        id: 0,
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        id: 1,
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        id: 2,
        quote: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        id: 3,
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        author: "Eleanor Roosevelt"
    },
    {
        id: 4,
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        author: "Mae West"
    },
    {
        id: 5,
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    
]


function getRandomQuote() {
    return mockData[Math.floor(Math.random() * mockData.length)]
}

export default function Quote() {
    const { quote: quoteStr, author: authorStr } = getRandomQuote()
    const [quote, setQuote] = useState(quoteStr)
    const [author, setAuthor] = useState(authorStr)

    function updateQuote() {
        const { quote:quoteStrA, author:  authorStrA } = getRandomQuote()
        setQuote(quoteStrA)
        setAuthor(authorStrA)
    }

    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`;
    
    return (
        <div id="quote-box">
            <div id="text" className="text-sm">{quote}</div>
            <div id="author">{author}</div>
            <button id="new-quote" onClick={updateQuote}>更新</button>
            <a href={twitterUrl} id="tweet-quote">发布</a>
        </div>
    )
}