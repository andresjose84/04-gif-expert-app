import React from 'react'

const GifGridItem = ({id,title,url} ) => {
    return (
        <div className='card animate__animated animate__bounce' key={id}>
            <img src={url} alt={id} title={title}/>
            <p>{title}</p>
        </div>
    )
}
export default GifGridItem;