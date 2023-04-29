import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => {

    test('Debe regresar el estado inicial', () => {

        const { result } = renderHook( () => useFetchGifs( 'One Punch'));
        const { images, isLoading } = result.current;

        //Validamos que en el estado inicial el array de imagenes esté vacio
        expect( images.length ).toBe(0);
        //Validamos que en el estado inicial el isLoading sea verdadero
        expect( isLoading ).toBeTruthy();
        
    });

    test('Debe retornar un arreglo de imagenes y isLoading en false', async () => {

        const { result } = renderHook( () => useFetchGifs( 'One Punch'));

        //Espera que la respuesta del array de imagenes sea mayor que cero
        //debido a que tenemos una promesa
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );
        
        const { images, isLoading } = result.current;

        //Validamos que el  array de imagenes no esté vacio
        expect( images.length ).toBeGreaterThan(0);
        //Validamos que el isLoading sea falso
        expect( isLoading ).toBeFalsy();
        
    });
})