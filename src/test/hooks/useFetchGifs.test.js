import { shallow } from "enzyme";
import { React } from "react";
import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifts } from "../../hooks/useFetchGifs";
describe('Pruebas en el hook usFetchGifs', () => { 
    test('debe de retornar el estado inicial', async () => { 
        const category = 'killua';
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifts(category));
        const { data, loading } = result.current;
        //console.log(data, loading);
        expect( data ).toEqual([]);
        expect( loading ).toBe(true);
        await waitForNextUpdate();
    });
    test('debe de retornar un arreglo de imgs y el loading en false', async () => { 
        
        const category = 'killua';
        const {result, waitForNextUpdate } = renderHook( () => useFetchGifts(category));
        await waitForNextUpdate();
        const { data, loading } = result.current;
        //console.log(data, loading);
        expect( data.length ).toBe(10);
        expect( loading ).toBe(false);

    });
})