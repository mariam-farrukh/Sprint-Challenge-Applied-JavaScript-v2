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
.then(res => {
    console.log(res);
    const topic = [];
    res.data.topics.forEach(dataTopic =>{
        topic.push(dataTopic);
    })
    topic.forEach(info =>{
        // console.log(info);
        Tabs(info);
    })
})
.catch(error =>{
    console.log('uh oh', error)
})

function Tabs(info) {
    const topicsDiv = document.querySelector('.topics');
    const tab = document.createElement('div');

    topicsDiv.appendChild(tab)

    tab.classList.add('tab');

    tab.textContent = info;
}