import React from 'react';
import PropTypes from 'prop-types'
import GifGridItem from './GifGridItem';
import { useFetchGifts } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifts(category);

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>

            { loading && <p className='animate__animated animate__flash'>Loading...</p> }

            <div className='card-grid'>
                {
                    images.map(ele => (
                        <GifGridItem 
                        key={ ele.id } 
                        { ...ele }
                        />
                        ))
                    }
            </div> 
        </>
    )
}

GifGrid.propTypes = {
    category : PropTypes.string.isRequired
}

export default GifGrid