import '@testing-library/dom';
import '@testing-library/jest-dom';
import React from 'react';
import { GifExpertApp } from '../GifExpertApp';
import { shallow } from 'enzyme';

describe('Pruebas en <GifExpertApp />', () => {
    
    test('debe mostrarse correctamente', () => {
        
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar un lista de categorias', () => {
        
        const categories = ['One punch', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);

    })
    
});
