// 1 .

// asigno las "a" del archivo html a enlaces
let enlaces = document.querySelectorAll('a')

// creo un bucle que recorra todas las "a" y por cada una de ellas cree la funcion de al clicar acceda a la funcion "stopDefAction"
for (let i = 0; i < enlaces.length; i++) {
  enlaces[i].addEventListener('click', stopDefAction);
}

// para inhabilitar los links de "a"
function stopDefAction(evt) {
  evt.preventDefault();
}

// 2.1 .

// creo imagen y le asigno todas las imagenes del archivo html
let imagen = document.querySelectorAll('img')

// genero un bucle y hago que recorra todas las imagenes y les asigne un evento que use la funcion "cambiarGIF"
for (let i = 0; i < imagen.length; i++) {
  imagen[i].addEventListener('click', function (){
    cambiarGIF(imagen[i])
  })
}

// para generar un numero aleatorio entre el 6 y el 1 y asignando el "src" de las imagenes a ese nuevo gif aleatorio
function cambiarGIF(image){
  let random = Math.floor(Math.random() * 6) + 1;
  image.src = `assets/magic-${random}.gif`
}

// 2.2 .

let parrafo = document.querySelectorAll("p")

        for (let i = 0; i < parrafo.length; i++) {
          parrafo[i].addEventListener('click', function (){
            cambiarParrafo(parrafo[i])
          })  
        }

        function cambiarParrafo(p){
          p.style.backgroundColor = generarColores()

          p.style.color = generarColores()
        }

// 2.3 .

let article = document.querySelectorAll("article")

        for (let i = 0; i < article.length; i++) {
          article[i].addEventListener('click', function (){
            article[i].style.backgroundColor = generarColores()
          })  
        }

let section = document.querySelectorAll("section")

        for (let i = 0; i < section.length; i++) {
          section[i].addEventListener('click', function (){
            section[i].style.backgroundColor = generarColores()
          })  
        }

// 3.1 .

let hoverimagen = document.querySelectorAll("img")
let guardarimagen

for (let i = 0; i < hoverimagen.length; i++) {

  hoverimagen[i].addEventListener('mouseover', function(){

    guardarimagen = hoverimagen[i].src
    hoverimagen[i].src = "assets/abracadabra.gif"

  })

  hoverimagen[i].addEventListener('mouseout', function(){
    hoverimagen[i].src = guardarimagen

  })
}

// 3.2 .

let hovercolor = document.querySelectorAll("p")
let guardarcolorback
let guardarcolor

for (let i = 0; i < hovercolor.length; i++) {

  hovercolor[i].addEventListener('mouseover', function(){

    guardarcolor = hovercolor[i].style.color
    guardarcolorback = hovercolor[i].style.backgroundColor

    hovercolor[i].style.backgroundColor = generarColores()
    hovercolor[i].style.color = generarColores()

  })
  hovercolor[i].addEventListener('mouseout', function(){

    hovercolor[i].style.backgroundColor = guardarcolorback
    hovercolor[i].style.color = guardarcolor

  })
}

// 3.3 .

let guardarArticleSection

let hoverarticle = document.querySelectorAll("article")

        for (let i = 0; i < hoverarticle.length; i++) {
          hoverarticle[i].addEventListener('mouseover', function (){
            guardarArticleSection = hoverarticle[i].style.backgroundColor
            hoverarticle[i].style.backgroundColor = generarColores()
          })
          hoverarticle[i].addEventListener('mouseout', function (){
            hoverarticle[i].style.backgroundColor = guardarArticleSection
          })    
        }

let hoversection = document.querySelectorAll("section")

        for (let i = 0; i < hoversection.length; i++) {
          hoversection[i].addEventListener('mouseover', function (){
            guardarArticleSection = hoversection[i].style.backgroundColor
            hoversection[i].style.backgroundColor = generarColores()
          })
          hoversection[i].addEventListener('mouseout', function (){
            hoversection[i].style.backgroundColor = guardarArticleSection
          })    
        }



        
function generarColores(){
  let devuelve = "rgb(" 
  for (let i = 0; i < 3; i++) {
    let random = Math.floor(Math.random() * 255) + 0;
    if(i === 2){
      devuelve = devuelve + random + ")"
    }else{
      devuelve = devuelve + random + ","
      
    }
  }
  
  return devuelve
}
