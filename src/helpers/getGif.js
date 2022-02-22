export const getGif = async (category, ) => {
    const apiKey = '2yN0wtjyQI2vW5s3o4J169YDvuhN8oU9';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${ encodeURI(category)}&limit=10`;
    console.log(url);
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(ele => {
        return {
            id: ele.id,
            title: ele.title,
            original: ele.images?.original,
            img_large: ele.images?.downsized_large,
            img_mid: ele.images?.downsized_medium,
            url: ele.images?.downsized_medium.url
        }
    });
    return gifs;
};