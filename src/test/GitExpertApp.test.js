import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GitExpertApp from '../components/GitExpertApp';

describe('Pruebas <GitExpertApp />', () => { 

    test('debe de crear un snapshot', () => { 
        const wrapper = shallow( <GitExpertApp /> );
        expect(wrapper).toMatchSnapshot();  
    });

    test('debe de mostrar una lista de categorias', () => { 
        const categories = ['Dragon ball','Ultrainstinto'];
        const wrapper = shallow( <GitExpertApp defaultCategories={categories}/> );
        expect(wrapper).toMatchSnapshot();  
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });

});