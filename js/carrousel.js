(function(){
  // console.log('début du carrousel')
  let carrousel = document.querySelector(".carrousel")
  // console.log("carrousel = " + carrousel.tagName)
  let bouton = document.querySelector(".bouton__ouvrir")
  // console.log("bouton = " + bouton.tagName)
  let carrousel__x = document.querySelector(".carrousel__x")

  let galerie = document.querySelector('.galerie')
  // let galerie__img = galerie.querySelector('img') // première image seulement


let carrousel__figure = document.querySelector(".carrousel__figure")
let galerie__img = galerie.querySelectorAll('img') // la collection des images de la galerie

let index = 0;
for(const elm of galerie__img){
  creer_image_carrousel(index,elm)
  creer_radio_carrousel(index)
  // elm.dataset.index = index
  index++
}

for (const elm of galerie__img){
  let carrousel__img = document.createElement('img')
  carrousel__img.classList.add('carrousel__img')
  carrousel__img.dataset.index = index
  console.log(elm.src)
  carrousel__img.src = elm.src
  console.log(carrousel__img.src)
  carrousel__figure.appendChild(carrousel__img)
}

/**
 * Créer une image du carrousel à partir d'une image de la galerie
 * @param {*} index num de l'image
 * @param {*} elm num de la galerie
 */
function creer_image_carrousel(index,elm){
  let carrousel__img = document.createElement('img')
  carrousel__img.classList.add('carrousel__img')
  carrousel__img.dataset.index = index
  carrousel__img.src = elm.src
  carrousel__figure.appendChild(carrousel__img)
}

let carrouse__form =  document.querySelector('.carrousel__form')
/**
 * créer les boutons radios 
 * @param {*} index 
 */
function creer_radio_carrousel(index){
  // créer input
  let input = document.createElement('input')
  // modifier le type = radio
  input.type = 'radio'
  // name attribut
  input.name = 'radio'
  // dataset index
  input.dataset.index = index
  // ajouter le bouton au formulaire
  carrousel__figure.appendChild(carrouse__form)
  // creer un écouteur d'événement sur le bouton onChange
  input.addEventListener('change', function(){
    // initialiser le style.opcaity=0 pour toutes les images
    for(const elm of galerie__img){
      elm.style.opacity = 0
    }
    // initialiser le style.opcaity=1 pour l'image courante
    galerie__img[index].style.opacity = 1
  })
}

 bouton.addEventListener('mousedown', function(){
      console.log("bouton mousedown")
      carrousel.classList.add('carrousel--ouvrir')
  })

  carrousel__x.addEventListener('mousedown', function(){
      console.log("bouton mousedown") 
      carrousel.classList.remove('carrousel--ouvrir')
  })
})