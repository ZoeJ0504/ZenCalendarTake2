import { useEffect, useState } from "react"
import React from 'react'
import styled from 'styled-components'

function Quotes() {
    const [quote, setQuote] = useState({})
    useEffect(() => {
        fetch('https://api.quotable.io/random')
            .then(res => res.json())
            .then(data => setQuote(data))
    }, [])
    return (
        <QuoteDiv>
            {quote.content}
            <p>{quote.author}</p>
        </QuoteDiv>
    )
}

const QuoteDiv = styled.div`
font-size: 30px;

`
export default Quotes