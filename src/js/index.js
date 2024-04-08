

const sliderPeliculas = document.querySelector('#slider-peliculas')
const sliderSeries = document.querySelector('#slider-series')
const sliderTendencia = document.querySelector('#slider-tendencia')
const sliderPopulares = document.querySelector('#slider-populares')
const sliderTop = document.querySelector('#slider-top')

function setContent(data, elemento){
    let content = ""

    data.map( contenido => {
        content = content + 
    `<figure>
        <img src='src/images/${contenido.Nombre}.jpg' />
        <div class="container-image-hover">
            <div>
                <a href=""><img src="src/images/info.svg" alt="" class="icons"></a>
                <a href=""><img src="src/images/play.svg" alt="" class="icons"></a>
            </div>
        </div>
    </figure>`
    })

    

    elemento.innerHTML = content
}

function setTop(data, elemento){
    let content = ""

    data.map( contenido => {
        content = content + 
    `<figure>
        <img src='src/images/${contenido.Nombre}.jpg' />
        <div class="container-image-hover">
            <div>
                <a href=""><img src="src/images/info.svg" alt="" class="icons"></a>
                <a href=""><img src="src/images/play.svg" alt="" class="icons"></a>
            </div>
        </div>
        <div class="views">
            <img src="src/images/estrella.svg" >
            <h3>${contenido.Calificacion}</h3>
        </div>
    </figure>`
    })

    

    elemento.innerHTML = content
}
 

    fetch('http://localhost:4000/api/movies')
        .then(response => response.json())
        .then(data => setContent(data, sliderPeliculas))
    

    fetch('http://localhost:4000/api/series')
        .then(response => response.json())
        .then(data => {setContent(data, sliderSeries)})
    

    fetch('http://localhost:4000/api/content/week')
        .then(response => response.json())
        .then(data => {setContent(data, sliderTendencia)})

    fetch('http://localhost:4000/api/content/month')
        .then(response => response.json())
        .then(data => setContent(data, sliderPopulares))

    fetch('http://localhost:4000/api/movies/popular')
        .then(response => response.json())
        .then(data => setTop(data, sliderTop))

    

        


