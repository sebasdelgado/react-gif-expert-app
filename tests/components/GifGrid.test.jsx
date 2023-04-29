import { render, screen, fireEvent } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const category = 'One Punch';

    test('Debe mostrar el loading incialmente', () => {

        //Lamamos el useFetchGifs
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={ category } />);
        expect( screen.getByText( 'Cargando...'));
        expect( screen.getByText( category ));
        
    });

    test('Debe mostrar items cuando se cargan las imágenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ]

        //Llamamos el useFetchGifs enviandole los datos que nos retornará
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={ category } />);
        // screen.debug();
        //Validamos que por lo menos nos haya creado 2 elementos img con la info que enviamos
        expect( screen.getAllByRole( 'img' ).length ).toBe(2);
        
    });

});