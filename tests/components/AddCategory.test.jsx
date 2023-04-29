import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en <AddCategory/>', () => {

    test('Debe cambiar el valor de la caja de texto', () => {
       
        render( <AddCategory onNewCategory={ () => {} } />);
        //Obtenemos el input que vamos a evaluar
        const input = screen.getByRole('textbox');

        //fireEvent.input() realizamos un evento en el input 
        fireEvent.input( input, { target: { value: 'Saitama'} });

        expect( input.value ).toBe('Saitama');
    });

    test('Debe llamar onNewCategory si el input tiene un valor', () => {
       
        const inputValue = 'Saitama';
        //jest.fn() Declaramos una función simulada
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue} });
        //Realizamos el submit del formulario
        fireEvent.submit( form );

        //screen.debug();
        
        expect( input.value ).toBe('');
        //toHaveBeenCalled() validamos que la función haya sido llamada
        expect( onNewCategory ).toHaveBeenCalled();
        //toHaveBeenCalledTimes() validamos cuantas veces ha sido llamada la función
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        //toHaveBeenCalledWith() validamos el llamado de la función con el argumento
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
    });

    test('No debe llamar la función onNewCategory si el input está vacio', () => {

        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } />);

        const form = screen.getByRole('form');

        fireEvent.submit( form );

        //not para negar las funciones (la función no ha sido llamada)
        expect( onNewCategory ).not.toHaveBeenCalled();
    });
});