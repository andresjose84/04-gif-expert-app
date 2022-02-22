import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
    const [inputState, setInputState] = useState('');

    const handleOnChange = (e) => {
        //console.log(e.target.value);
        setInputState(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputState.trim().length > 1) {
            console.log('Submit hecho', e.target);
            setCategories(cats => [inputState, ...cats]);
            setInputState('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputState} onChange={handleOnChange}></input>
        </form>
    )
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
export default AddCategory