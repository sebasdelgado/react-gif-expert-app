import { useState } from 'react';
//De esta maneta importamos todo lo que este en el archivo barril de exportación
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    //Inicializamos el estado con la categoría One Punch
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = ( newCategory) => {

        //Validamos que el inpunt no esté ingresado anteriormete
        const categoryExists = categories.find( c => c.replace(' ','').toLowerCase() === newCategory.replace(' ','').toLowerCase());
        if (categoryExists) return;

        //Usamos el operador spread para agregar otro elemento al array
        setCategories([ newCategory, ...categories]);
    }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                // setCategories={ setCategories } //De esta manera enviamos la función al componente
                onNewCategory = { event => onAddCategory( event)}
            />

            {/* Listado de Gif */}

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }

        </>
    )
}