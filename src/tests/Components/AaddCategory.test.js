import '@testing-library/dom';
import '@testing-library/jest-dom';
import React from 'react';
import { AddCategory } from '../../Components/AddCategory';
import { shallow } from 'enzyme';

describe('Pruebas en <AddCategory />', () => {

    
    const setCategories = jest.fn();

    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });
    
    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    })
    
    test('debe de cambiar la caja de taxto', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', {target: {value}});

        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(value);

    })

    test('no debe postear la informacion con submit si el input value esta vacio', () => {
        
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect(setCategories).not.toHaveBeenCalled();

    })

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        
        const value = 'Hola Mundo';
        const input = wrapper.find('input');
        
        input.simulate('change', {target: {value}});

        const form = wrapper.find('form');

        form.simulate('submit', {preventDefault(){}});

        expect(setCategories).toHaveBeenCalled();
        // expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        expect(input.prop('value')).toBe('');

    })
    
})
