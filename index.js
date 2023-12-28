

const sectionCard = document.querySelector(".all-cards")

const fetchQueen = () => {
    return fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
   .then((response) => response.json()) 
   .then((data) => {
      console.log (data.data) 
       for (let i = 0; i < data.data.length; i++) {
          sectionCard.innerHTML += ` <div class="cards col-4">
          <h2 class="band"> ${data.data[i].artist.name} </h2> 
          <img src=${data.data[i].artist.picture} class="w-100" alt="...">
          <p class="album-title"> Album: ${data.data[i].album.title}</p>
          <p class="mt-2"> ${data.data[i].title} </p>
          <p> durata: ${data.data[i].duration} min </p> 
          <button class="play"> Play </button>
          </div> ` 
            
       }
   })
} 
fetchQueen()


const sectionCard2 = document.querySelector(".all-cards2")

const fetchBeatles = () => {
   return fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=beatles")
  .then((response) => response.json()) 
  .then((data) => {
     console.log (data.data) 
      for (let i = 0; i < data.data.length; i++) {
         sectionCard2.innerHTML += ` <div class="cards col-4">
         <h2 class="band"> ${data.data[i].artist.name} </h2> 
         <img src=${data.data[i].artist.picture} class="w-100" alt="...">
         <p class="album-title"> Album: ${data.data[i].album.title}</p>
         <p class="mt-2"> ${data.data[i].title} </p>
         <p> durata: ${data.data[i].duration} min </p> 
         <button class="play"> Play </button>
         </div> ` 
           
      }
  })
} 
fetchBeatles()




const sectionCard3 = document.querySelector(".all-cards3")


const fetchLinkin = () => {
   return fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=linkinpark")
  .then((response) => response.json()) 
  .then((data) => {
     console.log (data.data) 
      for (let i = 0; i < data.data.length; i++) {
         sectionCard3.innerHTML += ` <div class="cards col-4">
         <h2 class="band"> ${data.data[i].artist.name} </h2> 
         <img src=${data.data[i].artist.picture} class="w-100" alt="...">
         <p class="album-title"> Album: ${data.data[i].album.title}</p>
         <p class="mt-2"> ${data.data[i].title} </p>
         <p> durata: ${data.data[i].duration} min </p> 
         <button class="play"> Play </button>
         </div> ` 
           
      }
  })
} 
fetchLinkin()






// !BUTTON


const buttonCrea = document.querySelector(".button-crea")
const elencoAlbum = document.querySelector(".elenco-musica")


const creaLista = function() {
   // const gruppo = document.querySelectorAll(".band")
   const allAlbum = document.querySelectorAll(".album-title")
   for (let i = 0; i < allAlbum.length; i++) {
      elencoAlbum.innerHTML += `<li> ${allAlbum[i].textContent} </li> `
   }
  
}
 buttonCrea.addEventListener(`click`, creaLista)


 



