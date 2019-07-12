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
    const jsArticles = res.data.articles.javascript
    const bootStrapArticles = res.data.articles.bootstrap;
    const techArticles = res.data.articles.technology;
    const jqueryArticles = res.data.articles.jquery;
    const nodeArticles = res.data.articles.node

    const articles = [jsArticles, bootStrapArticles, techArticles, jqueryArticles, nodeArticles]
    
    // const articles = [];
    // res.data.articles.forEach(dataArticle =>{
    //     articles.push(dataArticle)
    // })
    // trying to get code to loop over articles instead of hard coding it into the array
    articles.forEach(article => {
        article.forEach(info => {
            const cards = document.querySelector('.cards-container');
            cards.appendChild(Articles(info));
        })
    })
    console.log('Cards data working', res.data);
})
.catch(error =>{
    console.log('error with cards data', error);
})

function Articles(info){
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

    articleCard.appendChild(articleHeadline);
    articleCard.appendChild(articleAuthor);
    articleAuthor.appendChild(articleImgContainer);
    articleAuthor.appendChild(articleAuthorName);
    articleImgContainer.appendChild(articleImg);
    
    return articleCard;
}