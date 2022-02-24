import {
    getGif
} from '../../helpers/getGif';
describe('Pruebas con getGifs Fetch', () => {
    test('debe de traer 10 elementos', async () => {
        const gifs = await getGif('Batman');
        expect(gifs.length).toBe(10);
    });
    test('debe de traer 0 elementos', async () => {
        const gifs = await getGif('');
        expect(gifs.length).toBe(0);
    });
});