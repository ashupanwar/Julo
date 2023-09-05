import React from 'react'
import { css } from '@emotion/css'
import { useContext } from 'react';
import { FavoritesContext } from '../state/FavoritesContext';
import Card from '../components/Card';

const FavoritesPage = () => {

    const { favorites } = useContext(FavoritesContext);



    return (
        <div className={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        `}>
            <h1 className={css`
                color: white;
                font-size: 40px;
                margin: 20px 0px;
            `}>Favorites</h1>
            <div className={css`
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    gap: 10px;
                    justify-content: center;
                    margin-top: 20px;
                    @media (max-width: 768px) {
                        grid-template-columns: 1fr;
                    }
                `}>
                {Object.values(favorites).map(elem => {
                    return (
                        <Card key={elem.imdbID} data={elem} />
                    )
                })}
            </div>

        </div>
    )
}

export default FavoritesPage