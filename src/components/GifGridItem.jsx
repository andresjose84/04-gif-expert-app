import React from 'react'
import PropTypes from 'prop-types';
const GifGridItem = ({id,title,url} ) => {
    return (
        <div className='card animate__animated animate__bounce' key={id}>
            <img src={url} alt={`img-${id}`} title={title}/>
            <p>{title}</p>
        </div>
    )
}
GifGridItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
export default GifGridItem;