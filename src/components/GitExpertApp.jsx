import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GitExpertApp = () => {

    //const categories = ['One punch','Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One punch']);

    return (<>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}></AddCategory>
        <hr />
        <ol>
            { categories.map((ele,key) => (
                <GifGrid key = { ele } category={ ele } indx = {key} />
            ) ) }
        </ol>
    </>)
};

export default GitExpertApp;