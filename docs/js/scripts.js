const apiKey = '61a2c1782069428b8b913bfd8cf962a7'
const country = document.querySelector('#paisNoticia')
const category = document.querySelector('#categoriaNoticia')
const rowNoticias = document.querySelector('.noticias')
const config = {
    method: 'get'
}

const getUrl = (country, category) => {
    const url = `https://newsapi.org/v2/top-headlines?country=${country.value}&category=${category.value}&apiKey=${apiKey}`
    return url
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
    fetch(getUrl(country, category), config)
        .then((resp) => resp.json())
        .then((json) => {
            mostrarNaTela(json.articles)
        })
}