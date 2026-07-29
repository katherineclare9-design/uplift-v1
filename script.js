document.addEventListener("DOMContentLoaded", function () {

    const app = document.getElementById("app");


    function showScreen(page) {

        let content = "";


        if (page === "home") {

            content = `
                <section class="home">

                    <h2>💖 Home</h2>

                    <div class="card">
                        <h3>⭐ Level 1</h3>
                        <p>0 / 500 XP</p>
                    </div>

                    <div class="card">
                        <h3>🔥 Daily Streak</h3>
                        <p>0 Days</p>
                    </div>

                </section>
            `;

        }



        if (page === "training") {

            content = `

                <section class="home">

                    <h2>💪 Training</h2>


                    <div class="card">

                        <h3>🔥 Core Crusher</h3>

                        <p>
                            Category: Strength
                        </p>

                        <p>
                            Type: Core
                        </p>


                    </div>


                    <div class="card">

                        <h3>📣 Backspot Training</h3>

                        <p>
                            Category: Cheer
                        </p>

                        <p>
                            Type: Backspot
                        </p>


                    </div>


                </section>

            `;

        }



        if (page === "settings") {

            content = `

                <section class="home">

                    <h2>⚙️ Settings</h2>

                    <div class="card">

                        <p>
                            Settings page works!
                        </p>

                    </div>

                </section>

            `;

        }



        app.innerHTML = content + `

            <nav class="bottom-nav">

                <button id="homeBtn">
                    🏠<br>
                    Home
                </button>


                <button id="trainingBtn">
                    💪<br>
                    Training
                </button>


                <button id="settingsBtn">
                    ⚙️<br>
                    Settings
                </button>

            </nav>

        `;



        document
        .getElementById("homeBtn")
        .onclick = function () {

            showScreen("home");

        };


        document
        .getElementById("trainingBtn")
        .onclick = function () {

            showScreen("training");

        };


        document
        .getElementById("settingsBtn")
        .onclick = function () {

            showScreen("settings");

        };


    }


    showScreen("home");


});
