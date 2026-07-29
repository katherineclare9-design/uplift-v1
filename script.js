document.addEventListener("DOMContentLoaded", () => {


    const app = document.getElementById("app");


    function showScreen(screen) {


        let content = "";


        if (screen === "home") {

            content = `

            <section class="home">

                <h2>💖 Home</h2>

                <div class="card">

                    <h3>⭐ Level 1</h3>

                    <p>
                        0 / 500 XP
                    </p>

                </div>


                <div class="card">

                    <h3>🔥 Daily Streak</h3>

                    <h1>
                        0 Days
                    </h1>

                </div>


            </section>

            `;

        }



        if (screen === "training") {


            let workoutHTML = "";


            workouts.forEach(workout => {


                workoutHTML += `

                <div class="card">

                    <h3>
                        ${workout.name}
                    </h3>


                    <p>
                        📂 ${workout.category}
                    </p>


                    <p>
                        💪 ${workout.type}
                    </p>


                    <p>
                        ⭐ ${workout.xp} XP
                    </p>


                    <button>
                        Complete Workout
                    </button>


                </div>

                `;


            });



            content = `

            <section class="home">

                <h2>💪 Training</h2>

                ${workoutHTML}

            </section>

            `;

        }



        if (screen === "badges") {

            content = `

            <section class="home">

                <h2>🏅 Badges</h2>

                <p>
                    Coming soon
                </p>

            </section>

            `;

        }



        if (screen === "profile") {

            content = `

            <section class="home">

                <h2>👤 Profile</h2>

                <p>
                    Stats coming soon
                </p>

            </section>

            `;

        }



        if (screen === "settings") {

            content = `

            <section class="home">

                <h2>⚙️ Settings</h2>

                <p>
                    Settings coming soon
                </p>

            </section>

            `;

        }



        app.innerHTML = `

        ${content}


        <nav class="bottom-nav">


            <button data-page="home">
                🏠
                <br>
                Home
            </button>


            <button data-page="training">
                💪
                <br>
                Training
            </button>


            <button data-page="badges">
                🏅
                <br>
                Badges
            </button>


            <button data-page="profile">
                👤
                <br>
                Profile
            </button>


            <button data-page="settings">
                ⚙️
                <br>
                Settings
            </button>


        </nav>

        `;



        document
        .querySelectorAll(".bottom-nav button")
        .forEach(button => {


            button.addEventListener("click", () => {


                showScreen(
                    button.dataset.page
                );


            });


        });


    }



    showScreen("home");


});
