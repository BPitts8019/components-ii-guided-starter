// Your Javascript goes in this file.
// It is attached to index.html via the <script> tag at the end of body.
function DogCard (imgUrl, titleText) {
   const card = document.createElement("div");
   card.classList.add("dog-card");

   const image = document.createElement("img");
   image.classList.add("dog-image");
   image.src = imgUrl;
   card.appendChild(image);

   const title = document.createElement("h3");
   title.textContent = `Breed: ${titleText}`;
   card.appendChild(title);

   card.addEventListener("click", event => {
      event.currentTarget.classList.toggle("selected");
   });

   return card;
}

// const dogs = document.querySelector(".dogs");
// dogs.append(...[
//    DogCard("https://images.dog.ceo/breeds/husky/20180924_193829.jpg", "Husky"),
//    DogCard("https://images.dog.ceo/breeds/husky/n02110185_1066.jpg", "Husky"),
//    DogCard("https://images.dog.ceo/breeds/husky/n02110185_2736.jpg", "Husky")
// ]);

document.querySelector("#get-dogs").addEventListener("click", event => {
   axios.get("https://dog.ceo/api/breed/husky/images/random/12")
   .then(response => {
      const dogsHtml = document.querySelector(".dogs");
      const dogData = response.data.message;
      const dogs = dogData.map(data => {
         return DogCard(data, "Husky");
      });

      dogsHtml.textContent = null;
      dogsHtml.append(...dogs);
   })
   .catch(error => {
      console.log("Network request was unsuccessful.");
      console.log(error);
   });
});
