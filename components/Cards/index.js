// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the 
// following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
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
.then(res =>{
    const articlesData = res.data.articles;
    articlesData.bootstrap.forEach(Articles);
    articlesData.javascript.forEach(Articles);
    articlesData.jquery.forEach(Articles);
    articlesData.node.forEach(Articles);
    articlesData.technology.forEach(Articles);
    console.log('Cards are working', res.data);
})
.catch(error =>{
    console.log('error with cards data', error);
})

function Articles(info){
    const articleCardContainer = document.querySelector('.cards-container');
    const articleCard = document.createElement('div');
    const articleHeadline = document.createElement('div');
    const articleAuthor = document.createElement('div');
    const articleImgContainer = document.createElement('div');
    const articleImg = document.createElement('img');
    const articleAuthorName = document.createElement('span');

    //add class element
    articleCard.classList.add('card');
    articleHeadline.classList.add('headline');
    articleAuthor.classList.add('author');
    articleImgContainer.classList.add('img-container');

    //add text content
    articleHeadline.textContent = info.headline;
    articleAuthorName.textContent = info.authorName;
    articleImg.src = info.authorPhoto;

    articleCardContainer.appendChild(articleCard);
    articleCard.appendChild(articleHeadline);
    articleCard.appendChild(articleAuthor);
    articleAuthor.appendChild(articleImgContainer);
    articleAuthor.appendChild(articleAuthorName);
    articleImgContainer.appendChild(articleImg);
    
    // return articleCard;
}