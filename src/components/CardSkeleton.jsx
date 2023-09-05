import React from 'react'
import { css } from '@emotion/css'

const CardSkeleton = ({ data }) => {

    return (
        <div className={`skeleton ${css`
            width: 200px;
            height: 300px;
            background-position: center;
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: end;
            color: white;
            position: relative;
            padding: 10px;
            box-sizing: border-box;
        `}`}
        >
            <div className={css`
                z-index: 2;
            `}>
                <h4 className={css`
                    margin: 0px;
                    margin-bottom: 10px;
                    background-color: hsl(0, 0%, 26%);
                    color: transparent;
                `}>title</h4>
                <p className={css`
                    margin: 0px;
                    margin-bottom: 10px;
                    background-color: hsl(0, 0%, 26%);
                    color: transparent;
                `}>year (type)</p>
            </div>

        </div >
    )
}

export default CardSkeleton