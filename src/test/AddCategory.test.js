import { shallow } from "enzyme";
import { React } from "react";
import '@testing-library/jest-dom';
import AddCategory from '../components/AddCategory';

describe('Verificar addCategory', () => { 
    const setCategories= jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}></AddCategory>);

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}></AddCategory>);
    });

    test('debe de mostrar correctamente', () => { 
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja  de texto', () => { 
        
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change',{ target: {
            value : value
        } });
        expect(wrapper.find('p').text().trim()).toBe(value);

    });

    test('NO debe de postear la informacion on submit', () => { 
    
        wrapper.find('form').simulate('submit',{ preventDefault(){}, target:{value:{}} });
        expect(setCategories).not.toHaveBeenCalled();

    });

    test('debe llamar el setCategories y debe limpiar la caja de texto.', () => { 
        const input = wrapper.find('input');
        const value = 'Batman';
        input.simulate('change',{ target: {
            value : value
        } });
        wrapper.find('form').simulate('submit',{ preventDefault(){}, target:{value:value} });
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(wrapper.find('input').prop('value')).toBe('');
    });

});