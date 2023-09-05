import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieById } from '../common/axiosRequest'
import { css } from '@emotion/css'
import { useContext } from 'react';
import { FavoritesContext } from '../state/FavoritesContext';

const DetailsSkeleton = () => {

    const [data, setData] = useState({});

    const { favorites, setFavorites } = useContext(FavoritesContext);
    const { imdbId } = useParams()

    useEffect(() => {
        getMovieById(imdbId).then(res => setData(res));
    }, [imdbId])

    const toggleFavorites = () => {
        let newFav = { ...favorites };

        if (!favorites[imdbId]) {
            newFav[imdbId] = data;
            console.log(newFav)
            setFavorites(newFav)
        }
        else {
            delete newFav[imdbId];
            console.log(newFav)
            setFavorites(newFav);
        }

        localStorage.setItem("favorites", JSON.stringify(newFav))
    }

    return (
        <div className={css`
            padding: 20px;
            display: flex;
            justify-content: center;
            color: white;
            @media (max-width: 768px) {
                flex-direction: column;
                padding: 10px;
            }
        `}>
            <div className={`skeleton ${css`
                width: 400px;
                height: 600px;
                @media (max-width: 768px) {
                    width: 100%;
                    height: 400px;
                }
            `}`}>
            </div>
            <div className={css`
                padding: 20px;
                display: flex;
                flex-direction: column;
                width: 500px;
                @media (max-width: 768px) {
                    width: 100%;
                    align-items: center;
                    padding: 0px;
                    margin-top: 20px;
                }
            `}>
                <h1 className={`skeleton ${css`
                    color: transparent;
                    margin-bottom: 10px;
                    @media (max-width: 768px) {
                        margin-bottom: 20px;
                    }
                `}`}>Title</h1>
                <p className={`skeleton ${css`
                    color: transparent;
                    width: 100px;
                    @media (max-width: 768px) {
                        margin-bottom: 20px;
                    }
                `}`}>Year</p>
                <p className={`skeleton ${css`
                    margin-top: 20px;
                    color: transparent;
                `}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>




                <p className={`skeleton ${css`
                    margin-top: auto;
                    font-size: 14px;
                    color: transparent;
                    @media (max-width: 768px) {
                        display: none;
                    }
                `}`}>Cast: test test test</p>
                <p className={`skeleton ${css`
                    font-size: 14px;
                    color: transparent;
                    @media (max-width: 768px) {
                        display: none;
                    }
                `}`}>Genre: test test test</p>
                <p className={`skeleton ${css`
                    font-size: 14px;
                    color: transparent;
                    @media (max-width: 768px) {
                        display: none;
                    }
                `}`}>Runtime: 123</p>
                <p className={`skeleton ${css`
                    font-size: 14px;
                    color: transparent;
                    @media (max-width: 768px) {
                        display: none;
                    }
                `}`}>Box Office: $123123</p>
            </div>
        </div>
    )
}

export default DetailsSkeleton;