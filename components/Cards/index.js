// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then( response => {
        const cardsContainer = document.querySelector('.cards-container');
        const res = response.data.articles

        for(i in res){

            let article = res[i];
            
            article.forEach(news =>{
                cardsContainer.appendChild(cardArticles(news))
            })
        }
        
        
    })
    .catch(err => {
        console.log(`You have a error on ${err}`)
    })


function cardArticles(article){

      //********************************   Making the element */
    const card = document.createElement('div'),
          headline = document.createElement('div'),
          authorCard = document.createElement('div'),
          imgCard = document.createElement('div'),
          img = document.createElement('img'),
          name = document.createElement('span');

    //********************************* adding class to the element */
    card.classList.add('card');
    headline.classList.add('haedline');
    authorCard.classList.add('author');
    imgCard.classList.add('img-container');

    card.style.boxShadow = `10px 14px 11px -6px black`

    //*********************************adding the text in element */
    headline.textContent = article.headline;
    img.src = article.authorPhoto;
    name.textContent = article.authorName;

     //************************adding where each element go in page */
    card.appendChild(headline);
    card.appendChild(authorCard);
    authorCard.appendChild(imgCard);
    imgCard.appendChild(img);
    authorCard.appendChild(name);

    //***************************************** event listener when the mouse enter and leave the card */
    card.addEventListener('mouseover', e => {
        card.style.transform = 'scale(1.1)'
        card.style.transition = '0.4s';
        card.style.border = `2px solid black`
    })

    card.addEventListener('mouseleave', e => {
        card.style.transform = 'scale(1.0)'
        card.style.border = `0px solid black`
    })

    //*****************  return the card */
    return card;

}