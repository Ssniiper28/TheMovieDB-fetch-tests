let peliculasSlideshow = document.getElementById("slider-peliculas")
let seriesSlideShow = document.getElementById("slider-series")
let popularSlideShow = document.getElementById("slider-populares")
let clasificacionSlideShow = document.getElementById("slider-clasificacion")
let tendenciasSlideShow = document.getElementById("slider-tendencias")

let baseImageUrl = "https://image.tmdb.org/t/p/w500/tmU7GeKVybMWFButWEGl2M4GeiP.jpg"

let curp = "LEVD081231HCSNLRA3"

console.log(curp.toLowerCase())

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzgxMGIwMTk3ZmJhZTJmYzFiNWIyZjQ1MTJjNjRmNSIsInN1YiI6IjY0ZmE3Mzc1NDM0OTRmMDBhZGRmNTY1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6cr5HuJM2zHbyzR2B96z7muii9-XHwD7g81BB-MbL48'
    }
  }
// Llenar datos de peliculas 

fetch('https://api.themoviedb.org/3/movie/now_playing?language=es-MX&page=1', options)
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
                <div class="about-container">
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


// Llenar datos de series 


// Llenar datos de tendencia 

fetch('https://api.themoviedb.org/3/trending/movie/week?language=es-mx', options)
    .then(response => response.json())
    .then(response => {
        //console.log(response)
        let movies = response.results
        let figureData = ""
        movies.map(movie => {
            //console.log(`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`)
            figureData = figureData + `
            <figure onclick="window.location.href='pelicula.html?id=${movie.id}'">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"/>
                <div class="about-container">
                    <p class="figure-description">${movie.overview}</p>
                    <div class="icons-container">
                        <a href=""><img src="src/images/info.svg" alt="" class="icons"></a>
                        <a href=""><img src="src/images/play.svg" alt="" class="icons"></a>
                    </div>
                </div>  
            </figure>
            `
        })
        tendenciasSlideShow.innerHTML = figureData
    })

    
// Llenar datos de popular 

fetch('https://api.themoviedb.org/3/movie/popular?language=es-mx&page=1', options)
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
            <div class="about-container">
                <p class="figure-description">${movie.overview}</p>
                <div class="icons-container">
                    <a href=""><img src="src/images/info.svg" alt="" class="icons"></a>
                    <a href=""><img src="src/images/play.svg" alt="" class="icons"></a>
                </div>
            </div>  
        </figure>
        `
    })
    popularSlideShow.innerHTML = figureData
}) 


// Llenar datos de clasificacion 

fetch('https://api.themoviedb.org/3/movie/top_rated?language=es-mx&page=1', options)
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
            <div class="about-container">
                <p class="figure-description">${movie.overview}</p>
                <div class="icons-container">
                    <a href=""><img src="src/images/info.svg" alt="" class="icons"></a>
                    <a href=""><img src="src/images/play.svg" alt="" class="icons"></a>
                </div>
            </div>  
        </figure>
        `
    })
    clasificacionSlideShow.innerHTML = figureData
}) 

let siguiente = document.getElementById("pelicula-siguiente")
let anterior = document.getElementById("pelicula-anterior")

siguiente.onclick = () => {
    peliculasSlideshow.scrollLeft += (peliculasSlideshow.offsetWidth - peliculasSlideshow.offsetWidth * 0.085) / 3
}

anterior.onclick = () => {
    peliculasSlideshow.scrollLeft -= (peliculasSlideshow.offsetWidth - peliculasSlideshow.offsetWidth * 0.085) / 3
}

siguiente = document.getElementById("serie-siguiente")
anterior = document.getElementById("serie-anterior")

siguiente.onclick = () => {
    seriesSlideShow.scrollLeft += (peliculasSlideshow.offsetWidth - peliculasSlideshow.offsetWidth * 0.085) / 3
}

anterior.onclick = () => {
    seriesSlideShow.scrollLeft -= (peliculasSlideshow.offsetWidth - peliculasSlideshow.offsetWidth * 0.085) / 3
}

siguiente = document.getElementById("tendencias-siguiente")
anterior = document.getElementById("tendencias-anterior")

siguiente.onclick = () => {
    tendenciasSlideShow.scrollLeft += (peliculasSlideshow.offsetWidth - peliculasSlideshow.offsetWidth * 0.085) / 3
}

anterior.onclick = () => {
    tendenciasSlideShow.scrollLeft -= (peliculasSlideshow.offsetWidth - peliculasSlideshow.offsetWidth * 0.085) / 3
}

siguiente = document.getElementById("populares-siguiente")
anterior = document.getElementById("populares-anterior")

siguiente.onclick = () => {
    popularSlideShow.scrollLeft += (peliculasSlideshow.offsetWidth - peliculasSlideshow.offsetWidth * 0.085) / 3
}

anterior.onclick = () => {
    popularSlideShow.scrollLeft -= (peliculasSlideshow.offsetWidth - peliculasSlideshow.offsetWidth * 0.085) / 3
}

siguiente = document.getElementById("clasificacion-siguiente")
anterior = document.getElementById("clasificacion-anterior")

siguiente.onclick = () => {
    clasificacionSlideShow.scrollLeft += (peliculasSlideshow.offsetWidth - peliculasSlideshow.offsetWidth * 0.085) / 3
}

anterior.onclick = () => {
    clasificacionSlideShow.scrollLeft -= (peliculasSlideshow.offsetWidth - peliculasSlideshow.offsetWidth * 0.085) / 3
}