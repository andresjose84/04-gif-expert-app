import {React} from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { useFetchGifts } from '../../hooks/useFetchGifs';
import GifGrid from '../../components/GifGrid';
jest.mock('../../hooks/useFetchGifs');


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
            id : 1,
            url: 'https://localhost/asdfafdssfd/img.jpg',
            title: 'cualquier cosa'
        }]
        useFetchGifts.mockReturnValue({
            data: obj,
            loading: true
        });
        const wrapper = shallow( <GifGrid category="killua"/>);

        //expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(true);
        expect(wrapper.find('GifGridItem').length).toBe(obj.length)
    });
})