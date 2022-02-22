import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGridItem from '../components/GifGridItem';
describe('Pruebas GifGridItem', () => { 
    test('snapshot test', () => { 
        const obj = {
            id:1,
            title:'test',
            url:'https://localhost:3000/imagen'
        }
        const wrapper  = shallow( <GifGridItem { ...obj }/>);
        expect(wrapper).toMatchSnapshot();
     });
 });