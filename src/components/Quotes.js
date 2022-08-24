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
            "{quote.content}"
            <AuthorPara>-{quote.author}</AuthorPara>
        </QuoteDiv>
    )
}

const QuoteDiv = styled.div`
padding: 20px;
margin:20 px;
font-size: 30px;
background-color: #BFAFA6;
`
const AuthorPara = styled.p`
font-size: 20px
`
export default Quotes