import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {

    //Implementamos un Custom Hook
    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }
            <div className="card-grid">{
                    images.map( ( image ) => (
                       <GifItem     
                            key={ image.id }
                            //Con el operador spread exparcimos las props para así poder 
                            //enviar todas las propiedades al componente
                            { ...image }
                       />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category : PropTypes.string.isRequired
}