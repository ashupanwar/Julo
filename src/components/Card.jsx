import React from 'react'
import { css } from '@emotion/css'
import { useNavigate } from 'react-router-dom';

const Card = ({ data }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/${data?.imdbID}`)
    }

    return (
        <div className={css`
            width: 200px;
            height: 300px;
            background-image: url(${data?.Poster});
            background-position: center;
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: end;
            color: white;
            position: relative;
            padding: 10px;
            box-sizing: border-box;
            transition: transform .2s;
            :hover{
                transform: scale(1.05);
                cursor: pointer;
            }
            ::after{
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(to bottom, transparent 50%, black 100%);
            }
        `}
            onClick={handleClick}
        >
            <div className={css`
                z-index: 2;
            `}>
                <h4 className={css`
                    margin: 0px;
                `}>{data?.Title}</h4>
                <p className={css`
                    margin: 0px;
                    margin-bottom: 10px;
                    font-size: 12px;
                `}>{data?.Year} ({data?.Type})</p>
            </div>

        </div >
    )
}

export default Card