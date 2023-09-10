let siguiente = document.getElementById("pelicula-siguiente")
let anterior = document.getElementById("pelicula-anterior")

let peliculasSlideshow = document.getElementById("peliculas-slider")
let baseImageUrl = "https://image.tmdb.org/t/p/w500/tmU7GeKVybMWFButWEGl2M4GeiP.jpg"

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzgxMGIwMTk3ZmJhZTJmYzFiNWIyZjQ1MTJjNjRmNSIsInN1YiI6IjY0ZmE3Mzc1NDM0OTRmMDBhZGRmNTY1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6cr5HuJM2zHbyzR2B96z7muii9-XHwD7g81BB-MbL48'
    }
  }

fetch('https://api.themoviedb.org/3/trending/movie/week?language=es-mx', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        let movies = response.results
        let figureData = ""
        movies.map(movie => {
            //console.log(`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`)
            figureData = figureData + `
            <figure onclick="window.location.href='pelicula.html?id=${movie.id}'">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"/>
                <div class="figure-icons">
                    <p class="figure-description">${movie.overview}</p>
                    <div class="icons-container">
                    <a href=""><img src="src/images/info.svg" alt="" class="icons"></a>
                    <a href=""><img src="src/images/play.svg" alt="" class="icons"></a>
                    </div>
                </div>  
            </figure>
            `
        })
        peliculasSlideshow.innerHTML = figureData
    })

    

siguiente.onclick = () => {
    peliculasSlideshow.scrollLeft += (peliculasSlideshow.offsetWidth - peliculasSlideshow.offsetWidth * 0.085) / 3
}

anterior.onclick = () => {
    peliculasSlideshow.scrollLeft -= (peliculasSlideshow.offsetWidth - peliculasSlideshow.offsetWidth * 0.085) / 3
}