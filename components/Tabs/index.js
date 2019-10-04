// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then(response => {
        //******element in html folder with class .topics
        const topics = document.querySelector('.topics')

        response.data.topics.forEach(iteam => {
            topics.appendChild(tabs(iteam));
        })
    })
    .catch(err =>{
        console.log(`you have a error of ${err}`);
    })
    

function tabs(name){
    //Make the element 
    const tab = document.createElement('div');

    //making the class
    tab.classList.add('tab');

    //adding text to it
    tab.textContent = name;

    //returing the tab
    return tab;
}