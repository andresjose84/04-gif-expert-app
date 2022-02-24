import {React} from 'react';
import { shallow } from 'enzyme';
import GifGrid from "../components/GifGrid";
import { useFetchGifts } from '../hooks/useFetchGifs';
jest.mock('../hooks/useFetchGifs');

describe('Validamos el componente <GifGrid />', () => { 
    test('debe de generar el snapshot', () => { 
        useFetchGifts.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow( <GifGrid category="killua"/>);
        expect(wrapper).toMatchSnapshot();   
    });
    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => { 
        const obj = [{
            id : 'abc',
            url: 'https://localhost/asdfafdssfd/img.jpg',
            title: 'cualquier cosa'
        }]
        useFetchGifts.mockReturnValue({
            data: obj,
            loading: true
        });
        const wrapper = shallow( <GifGrid category="killua"/>);
        expect(wrapper).toMatchSnapshot();
    });
})