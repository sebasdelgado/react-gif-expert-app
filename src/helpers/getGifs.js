export const getGifs = async ( category ) => {
    //Key de Giphy Developers
    const apiKey = '5LzPcPH6NmoAMIor4FE0u9EnOghc8HNw';

    //Peticion fetch
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}