import React from 'react';
import '@testing-library/jest-dom';
import {
    shallow
} from 'enzyme';
import GifGridItem from '../components/GifGridItem';
describe('Pruebas GifGridItem', () => {
            const obj = {
                id: 1,
                title: 'test',
                url: 'https://localhost:3000/imagen'
            };
            const wrapper = shallow( < GifGridItem {
                    ...obj
                }
                />);
                test('snapshot test', () => {
                    expect(wrapper).toMatchSnapshot();
                });

                test('Debe tener un titulo con el parrafo', () => {
                    const p = wrapper.find('p');
                    expect(p.text().trim()).toBe(obj.title);
                });

                test('debe tener la img igual al url y alt', () => {
                    const img = wrapper.find('img');
                    // console.log(img.prop('src'));
                    expect(img.prop('src')).toBe(obj.url);
                    // console.log(img.prop('alt').trim());
                    expect(img.prop('alt').trim()).toBe(`img-${obj.id}`);
                });

                test('debe de tener la clase animate__bounce', () => {

                    const div = wrapper.find('div');
                    // console.log(div.prop('className').includes('animate__bounce'));
                    // console.log(div.prop('className'));
                    expect(div.prop('className').includes('animate__bounce')).toBe(true);
                });
            });