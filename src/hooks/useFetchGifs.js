import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages( newImages );
        setLoading(false);
    }
    
    //Mediante el hook useEffect podemos ejecutar las funciones que 
    //se encuentren dentro solamete cuando se cree el componente y no 
    //cuando se cambie el estado
    useEffect( () => {
        getImages();
        //Enviamos como segundo argumento los corcheres vacios para 
        //decirle a react que solamente llame la función getImages cuando se cree el componente
    }, []);

    return {
        images,
        isLoading
    }
}
