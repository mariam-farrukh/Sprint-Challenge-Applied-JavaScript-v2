// Step 2: Create Tabs
// -----------------------
// Using axios send a GET 
// request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
.then(res =>{
    const topic = res.topics;
    const tabsContainer = document.querySelector('.topics');
    tabsContainer.appendChild(Tabs(topic));
    console.log('it works', res.data);
})
.catch(error => {
    console.log('uh oh', error);
})

// tabsTopics.appendChild(Tabs());

function Tabs(topic){
    const tabTopic = document.createElement('div');

    tabTopic.classList.add('tab');

    tabTopic.textContent = topic.Topics;

    return tabTopic
}