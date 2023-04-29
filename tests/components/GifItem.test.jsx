import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem/>', () => {

    const title = 'Prueba';
    const url = 'https://prueba.com/prueba.jpg';

    test('Debe hacer match con el snapshot', () => {
       
        const { container }= render( <GifItem title = { title } url = { url } />);
        expect( container ).toMatchSnapshot();
    });

    test('Debe mostrar la imagen con la URL y el ALT indicado', () => {
       
        render( <GifItem title = { title } url = { url } />);
        //screen.debug() nos permite ver el componente el consola
        // screen.debug();
        //Desestructuramos los atributos del img
        //getByRole() nos permite obtener elementos de html por su tag
        const { src, alt } = screen.getByRole('img');
        //toBe( ) comparamos los valores
        expect ( src ).toBe( url );
        expect ( alt ).toBe( title );
    });

    test('Debe mostrar el título del componente', () => {
       
        render( <GifItem title = { title } url = { url } />);
        // toBeTruthy() nos dice si el texto exite
        expect ( screen.getByText( title ) ).toBeTruthy();
    });
});