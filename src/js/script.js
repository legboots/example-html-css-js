// wait for page to load
document.addEventListener("DOMContentLoaded", function(event) {

    // view source button
    document.body.innerHTML += `<div id="viewSource"><a id="viewSourceHyperlink">View Source On GitHub</a></div>`
    const viewSourceButton = document.getElementById('viewSourceHyperlink');
    const ghUser = window.location.host.split('.')[0];
    const ghProject = window.location.pathname.split('/').filter(e => e)[0]
    viewSourceButton.href = `https://github.com/${ghUser}/${ghProject}`

    // get saved name from browser storage
    let savedName = localStorage.getItem('savedName');

    // if there is no saved name
    if (!savedName) {

        // ask for it until they type something
        while (!savedName) {
            savedName = prompt("Hi! What's your name?");
        }

        // save the new name
        localStorage.setItem('savedName', savedName);
    }

    // check if the settings form is on the screen
    let settingsForm = document.getElementById('settingsForm')

    // if the settings form exists
    if (settingsForm) {

        // find the name input
        let settingsFormNameInput = document.getElementById('name');

        // put the saved name into the form
        settingsFormNameInput.value = savedName;

        // listen for changes
        settingsForm.addEventListener('submit', (evt) => {
            
            // stop form reloading page
            evt.preventDefault()

            // update savedName variable
            savedName = settingsFormNameInput.value;

            // save the new name
            localStorage.setItem('savedName', savedName);
        });
    }

    // check if name span exists
    document.querySelectorAll('span[name="savedName"]').forEach(el => {
        el.innerText = savedName;
    })
});