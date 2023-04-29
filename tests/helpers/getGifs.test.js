import { getGifs } from '../../src/helpers/getGifs';

describe('Pruebas en getGifs()', () => {

    test('Debe retornar un arrglo de gifs', async () => {
       
        const gifs = await getGifs( 'One Punch');

        //toBeGreaterThan() evaluamos que el array sea de longitud mayor que cero
        expect( gifs.length ).toBeGreaterThan( 0 );

        //expect.any( String ) podemos evaluar que retorne un objeto de la siguiente manera
        // con cualquier valor string, tambien puede ser number
        expect( gifs[0] ).toEqual({
            id: expect.any( String),
            title: expect.any( String),
            url: expect.any( String)
        })
    });


});