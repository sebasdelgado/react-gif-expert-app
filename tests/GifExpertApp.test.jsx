import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp/>', () => {

    test('Debe mostrar la nueva categoria enviada', () => {

        const inputValue = 'Goku';

        render( <GifExpertApp /> );
    
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } });
        fireEvent.submit( form );

        expect( screen.getByText( inputValue ));
        
    });

    test('Solo debe mostrar una vez la categoria enviada debido a que ya existe una', () => {

        const inputValue = 'One Punch';

        render( <GifExpertApp /> );
    
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } });
        fireEvent.submit( form );

        expect( screen.getAllByText( inputValue ).length ).toBe(1);
        
    });
});