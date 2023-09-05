import React, { useEffect, useState } from 'react'
import { css } from '@emotion/css'
import Search from '../components/Search'
import List from '../components/List';

const ListPage = () => {

    const [query, setQuery] = useState('');



    return (
        <div className={css`
            background-color: black;
        `}>
            <div className={css`
                display: flex;
                justify-content: center;
                padding: 20px;
            `}>
                <h1 className={css`
                    color: white;
                    font-size: 40px;
                    font-style: italic;
                    @media (max-width: 768px) {
                        font-size: 30px;
                    }
                `}>The Movies App</h1>
            </div>
            <div className={css`
                margin:20px 0px;
                display: flex;
                justify-content: center;
            `}>
                <Search updateQuery={setQuery} />
            </div>
            <div className={css`
                margin:20px 0px;
            `}>
                <List query={query} />
            </div>
        </div>
    )
}

export default ListPage;