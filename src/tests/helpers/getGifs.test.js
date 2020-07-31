import '@testing-library/dom';
import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs Fetch', () => {
    
    test('debe de traer 10 elementos', async() => {
        
        const gifs = await getGifs('dragon ball');
        expect(gifs.length).toBe(10);

    });

    test('no debe traer elementos', async() => {
        
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);

    });
    
});
