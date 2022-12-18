
const cargarPeliculas = async () => {

    try{
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=ec22095141db5f8793f13fe0e7886808&lenguage=es-MX`);
    
        console.log(respuesta);

        if(respuesta.status === 200){
            let peliculas = '';
            const datos = await respuesta.json();
            datos.results.forEach(pelicula => {
                peliculas +=`
                <div class="pelicula">
                <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                <h3 class="titulo">${pelicula.title}</h3>
                </div>
                `
            });
            document.getElementById('contenedor').innerHTML = peliculas;

        } else if(respuesta.status === 401){
            console.log('Pusiste la llave mal')
        } else if(respuesta.status === 404){
            console.log('La pelicula no existe')
        }else{
            console.log('Hubo un error y no sabemos que paso')
        }
    }catch(error){
        console.log(error);
    }


}

cargarPeliculas();