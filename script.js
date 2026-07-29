document.addEventListener("DOMContentLoaded", function () {

    const app = document.getElementById("app");


    function showScreen(page) {

        let content = "";


        if (page === "home") {

            content = `
                <h2>💖 Home</h2>
                <p>Welcome to UpLift!</p>
            `;

        }


        if (page === "training") {

            content = `
                <h2>💪 Training</h2>
                <p>TRAINING BUTTON WORKS!</p>
            `;

        }


        if (page === "settings") {

            content = `
                <h2>⚙️ Settings</h2>
                <p>Settings works!</p>
            `;

        }


        app.innerHTML = `

            ${content}


            <nav class="bottom-nav">

                <button id="homeButton">
                    🏠 Home
                </button>


                <button id="trainingButton">
                    💪 Training
                </button>


                <button id="settingsButton">
                    ⚙️ Settings
                </button>


            </nav>

        `;



        document.getElementById("homeButton")
        .addEventListener("click", function(){

            showScreen("home");

        });



        document.getElementById("trainingButton")
        .addEventListener("click", function(){

            showScreen("training");

        });



        document.getElementById("settingsButton")
        .addEventListener("click", function(){

            showScreen("settings");

        });


    }


    showScreen("home");


});
