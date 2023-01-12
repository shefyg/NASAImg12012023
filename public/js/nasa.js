
function showData(){
    fetch('/data')
        .then(response => response.json())
        .then(data => {
            console.log("data: "+JSON.stringify(data));
            // Update the DOM with the fetched data
            document.getElementById('titleHeader').innerHTML = data.title
            document.getElementById('contentDiv').innerHTML = data.body
        })
        .catch(error => console.error(error))
}

function init() {
    // code to be executed when the page is loaded
    console.log("Page Loaded");

    // hanlde loading data
    showData();

}
document.addEventListener("DOMContentLoaded", init);