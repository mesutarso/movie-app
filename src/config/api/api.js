export  const endpoints = {

    base_url='https://api.themoviedb.org/3/',
    movies_url=`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.API_KEY}`,
    serie_url=`https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.API_KEY}`,
    all_data_url=`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}`,
    image_url ='https://image.tmdb.org/t/p/w500/'
    
};