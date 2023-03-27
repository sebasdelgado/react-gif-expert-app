import { useState } from "react";

// export const AddCategory = ( {setCategories} ) => { //De esta manera se recibe la función
export const AddCategory = ( {onNewCategory} ) => {

    const [ inputValue, setInputValue ] = useState('');

    //Desestructuramos el event y obetenemos el target
    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    
    const onSubmit = ( event ) => {
        //Usamos una función para cuando se ejecute el submit 
        //no refresque el navegador, debido a que el submit del formulario
        //refresca el navegador
        event.preventDefault();

        if(inputValue.trim().length <= 1) return;

        // setCategories( categories => [ inputValue, ...categories]); //De esta manera agregamos el valor
                                                                        //cuando recibimos la función
        onNewCategory( inputValue.trim() );
        //Limpiamos el input
        setInputValue('');
    }

    return (

        <form onSubmit={ (event) => onSubmit(event) }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                // Hacemos uso del onChange porque si seteamos un value
                // este no nos va a dejar modificar cuando se renderice 
                onChange = { onInputChange}
            />
        </form>
    )
}