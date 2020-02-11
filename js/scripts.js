const url = 'https://newsapi.org/v2/top-headlines?country=mx&apiKey=61a2c1782069428b8b913bfd8cf962a7'
let rowNoticias = document.querySelector('.row')
let config = {
    method: 'get'
}

const mostrarNaTela = (listaNoticias) => {
    rowNoticias.innerHTML = ''
    listaNoticias.forEach((noticia) => {
        const cardNoticia =
            `<div class="col-md-4 mb-2">
                <div class="card " style="max-width: 22rem;">
                    <img src="${noticia.urlToImage}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${noticia.title}</h5>
                        <p class="card-text text-justify">${noticia.description}</p>
                        <a href="${noticia.url}" target="_blank" class="btn btn-info rounded-pill">Notícia Completa</a>
                    </div>
                </div>
            </div>`
        rowNoticias.insertAdjacentHTML('beforeend', cardNoticia)

    })
}

document.querySelector('button').onclick = () => {
    /*let result = */fetch(url, config)
        .then((resp) => resp.json())
        // .then((json) => json)
        .then((json) => {
            // console.log(json.articles[1])
            mostrarNaTela(json.articles)
        })
    // console.log(result)
}