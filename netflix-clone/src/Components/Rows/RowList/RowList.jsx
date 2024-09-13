import React from 'react'
import Row from '../Row/Row'
import requests from "../../../utils/requests"
const RowList = () => {
    return (
        <>
            <Row 
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow={true}
            />
            <Row 
                title="Trending Now" 
                fetchUrl={requests.fetchTrending}
            />
            <Row
                title="Top Rated Movies"
                fetchUrl={requests.fetchTopRatedMovies}
            />
            <Row
                title="Action movies"
                fetchUrl={requests.fetchActionMovies}
            />
            <Row
                title="Comedy Movies"
                fetchUrl={requests.fetchComedyMovies}
            />
            <Row
                title="Horror Movies"
                fetchUrl={requests.fetchHorrorMovies}
            />
            <Row
                title="Romace Movies"
                fetchUrl={requests.fetchRomanceMovies}
            />
            <Row
                title="Documentaries"
                fetchUrl={requests.fetchDocumentaries}
            />
            <Row
                title="TV Show"
                fetchUrl={requests.fetchTvShow}
            />
        </>
    )
}

export default RowList
