export const getGifs = async(category) => {

    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
      
    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=4tSd4P9CGTGm9LmHMLB95nkmWCir8rLR`, requestOptions);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    // console.log(gifs);
    return gifs;
}