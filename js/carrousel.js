(function () {
    let carrousel = document.querySelector('.carrousel');
    let carrousel__x = document.querySelector('.carrousel__x');
    let galerie = document.querySelector('.galerie');
    let carrousel__figure = document.querySelector('.carrousel__figure');
    let galerie__img = galerie.querySelectorAll('img');
    let radioContainer = document.querySelector('.carrousel__form');
    let index = 0;
  
    for (const elm of galerie__img) {
        creer_image_carrousel(index, elm);
        creer_radio_carrousel(index);
        index++;
    }
  
    function creer_image_carrousel(index, imgGalerie) {
        let imgCarrousel = document.createElement('img');
        imgCarrousel.classList.add('carrousel__img');
        imgCarrousel.dataset.index = index;
        imgCarrousel.src = imgGalerie.src;
        carrousel__figure.appendChild(imgCarrousel);
  
        imgGalerie.addEventListener('click', function () {
            carrousel.classList.add('carrousel--ouvrir');
            changeImage(index);
        });
    }
  
    carrousel__x.addEventListener('click', function () {
        carrousel.classList.remove('carrousel--ouvrir');
    });
  
    function creer_radio_carrousel(index) {
        let radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'carrousel';
        radio.value = index;
        radioContainer.appendChild(radio);
  
        radio.addEventListener('change', function () {
            changeImage(this.value);
        });
    }
  
    function changeImage(index) {
        let carrousel__img = document.querySelectorAll('.carrousel__img');
        for (let img of carrousel__img) {
            img.style.opacity = 0;
        }
  
        let imageSelected = document.querySelector('.carrousel__img[data-index="' + index + '"]');
        imageSelected.style.opacity = 1;
  
        let imageWidth = imageSelected.naturalWidth;
        let imageHeight = imageSelected.naturalHeight;
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        let modalWidth = Math.min(imageWidth, windowWidth * 0.8);
        let modalHeight = imageHeight * (modalWidth / imageWidth);
  
        carrousel.style.width = modalWidth + 'px';
        carrousel.style.height = modalHeight + 'px';
        carrousel.style.left = (windowWidth - modalWidth) / 2 + 'px';
        carrousel.style.top = (windowHeight - modalHeight) / 2 + 'px';
  
        let radioSelected = document.querySelector('input[type="radio"][value="' + index + '"]');
        radioSelected.checked = true;
    }
  
    function navigate(direction) {
        let currentIndex = parseInt(document.querySelector('input[type="radio"]:checked').value);
        let newIndex = (currentIndex + direction + galerie__img.length) % galerie__img.length;
        changeImage(newIndex);
    }
  
    document.querySelector('.carrousel__prev').addEventListener('click', function() {
        navigate(-1);
    });
  
    document.querySelector('.carrousel__next').addEventListener('click', function() {
        navigate(1);
    });
  
    window.addEventListener('load', function() {
        updateModalSize(galerie__img[0]);
    });
  
  })();  