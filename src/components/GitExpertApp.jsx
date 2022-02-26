import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GitExpertApp = ({ defaultCategories = [] }) => {

    //const categories = ['One punch','Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(defaultCategories);

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