import { useEffect, useState } from "react"
import { getGif } from '../helpers/getGif';

export const useFetchGifts = (category) => {
    const [state, setState] = useState({
        data : [],
        loading: true
    });

    useEffect( () => {
        getGif( category ).then(obj => {
            setState({
                data : obj,
                loading: false
            });
        })
    }, [category])

    return state;
}