// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

let topicsArray = [];

axios.get('https://lambda-times-backend.herokuapp.com/topics')

.then(response =>{
    topicsArray = response.data.topics

    topicsArray.forEach(topic  => {

        topicTab.appendChild(createTab(topic))
    })
})

.catch(error => {
    console.log('server not responding', error)
})

function createTab(topic) {
    const div = document.createElement('div')
    div.classList.add('tab')
    div.textContent = topic
    
    return div
}

const topicTab = document.querySelector('.topics')
