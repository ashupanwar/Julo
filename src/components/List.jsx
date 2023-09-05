import React, { useEffect, useState } from 'react'
import { getSearchResults } from '../common/axiosRequest'
import Card from './Card';
import { css } from '@emotion/css'
import CardSkeleton from './CardSkeleton';


const List = ({ query }) => {

    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getSearchResults(query, page)
            .then(res => {
                if (res.Response === 'True') {
                    setMovies(res.Search);
                    setTotalPages(Math.ceil(res.totalResults / 10))
                }
            })
    }, [query, page]);

    useEffect(() => {
        if (movies.length) {
            setLoading(false);
        }
    }, [movies])

    const handleClickPrev = () => {
        if (page > 1) {
            setPage(prev => prev - 1);

        }
    }
    const handleClickNext = () => {
        if (page < totalPages) {
            setPage(prev => prev + 1)

        }
    }


    return (
        <div className={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        `}>

            <div className={css`
                color: white;
                display: flex;
                align-items: center;    
                gap: 14px;
                margin: 20px;
            `}>
                <>
                    <div className={css`
                    color: black;
                    padding: 10px;
                    border-radius: 50%;
                    background-color: white;
                    font-weight: bold;
                    transition: transform 0.2s;
                    cursor: pointer;
                    :hover{
                        transform: scale(1.05);
                    }
                `}
                        onClick={handleClickPrev}
                    >{'<'}</div>
                    <p>{query ? page : 0}/{totalPages}</p>
                    <div className={css`
                    color: black;
                    padding: 10px;
                    border-radius: 50%;
                    background-color: white;
                    font-weight: bold;
                    transition: transform 0.2s;
                    cursor: pointer;
                    :hover{
                        transform: scale(1.05);
                    }
                `}
                        onClick={handleClickNext}
                    >{'>'}</div>
                </>
            </div>

            {loading ?

                <div className={css`
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    gap: 10px;
                    justify-content: center;
                    @media (max-width: 768px) {
                        grid-template-columns: 1fr;
                    }
                `}>
                    {[0, 1, 2, 3, 4, 5].map(elem => {
                        return <CardSkeleton />
                    })}
                </div>


                :


                <div className={css`
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    gap: 10px;
                    justify-content: center;
                    @media (max-width: 768px) {
                        grid-template-columns: 1fr;
                    }
                `}>
                    {movies.map(elem => {
                        return <Card key={elem.imdbID} data={elem} />
                    })}
                </div>
            }


        </div>
    )
}

export default List