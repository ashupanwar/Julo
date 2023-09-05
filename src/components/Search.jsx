import React, { useRef } from 'react'
import { css } from '@emotion/css'
import { useNavigate } from 'react-router-dom'

const Search = ({ updateQuery }) => {

    const inputRef = useRef(null)
    const navigate = useNavigate();

    const handleSearch = () => {
        updateQuery(inputRef.current.value)
    }

    const handleFavoritesClick = () => {
        navigate('/favorites')
    }

    return (
        <div
            className={css`
                display: flex;
                position: relative;
                @media (max-width: 768px) {
                    flex-direction: column-reverse;
                }
            `}
        >
            <div
                className={css`
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: red;
                    border-radius: 20px;
                    padding: 10px 40px 10px 10px;
                    color: white;
                    position: relative;
                    left: 32px;
                    cursor: pointer;
                    transition: left .1s;
                    :hover{
                        left: 28px;
                        @media (max-width: 768px) {
                            left: 0;
                        }
                    }
                    @media (max-width: 768px) {
                        padding: 10px 0px 10px 0px;
                        left: 0;
                        right: 0;
                        width: 100%;
                    }
                `}
                onClick={handleFavoritesClick}
            >Favorites</div>
            <div className={css`
                width: 420px;
                height: 50px;
                background-color: white;
                display: flex;
                justify-content: space-between;
                padding: 0px 10px;
                align-items: center;
                border-radius: 20px;
                box-shadow: -3px 3px 4px black;
                z-index: 1;
                box-sizing: border-box;
                @media (max-width: 768px) {
                    width: 100%;
                }
            `}>

                <input className={css`
                    width: 100%;
                    font-size: 16px;
                    outline: none;
                    border: none;
                `}
                    ref={inputRef}
                    placeholder='search...'
                />
                <button
                    className={css`
                    background-color: #0062ff;
                    color: white;
                    border-radius: 20px;
                    padding: 10px;
                    border: none;
                    transition: transform .1s;
                    box-shadow: -2px 3px 3px black;
                    :hover{
                        transform: scale(1.02);
                        cursor: pointer;
                    }
                `}
                    onClick={handleSearch}
                >Search</button>
            </div>
        </div>
    )
}

export default Search