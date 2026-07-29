// UpLift App

document.addEventListener("DOMContentLoaded", () => {

    const app = document.getElementById("app");


    function showScreen(screen) {

        let content = "";


        // ==========================
        // HOME
        // ==========================

        if (screen === "home") {

            const level = 1;
            const xp = 0;
            const xpNeeded = 500;
            const streak = 0;

            const percent = (xp / xpNeeded) * 100;


            content = `

                <section class="home">

                    <h2>💖 Good Morning!</h2>

                    <p>
                        Lift Yourself Higher Every Day
                    </p>


                    <div class="card">

                        <h3>⭐ Level ${level}</h3>

                        <p>
                            ${xp} / ${xpNeeded} XP
                        </p>


                        <div class="xp-bar">

                            <div 
                                class="xp-fill"
                                style="width:${percent}%">
                            </div>

                        </div>

                    </div>



                    <div class="card">

                        <h3>🔥 Daily Streak</h3>

                        <h1>${streak} Days</h1>

                    </div>



                    <div class="card">

                        <h3>🏅 Latest Badge</h3>

                        <p>
                            No badges earned yet.
                        </p>

                    </div>


                </section>

            `;
        }



        // ==========================
        // TRAINING
        // ==========================

        if (screen === "training") {


            let workoutCards = "";


            workouts.forEach(workout => {


                workoutCards += `

                    <div class="card">

                        <h3>
                            ${workout.name}
                        </h3>


                        <p>
                            📂 Category:
                            ${workout.category}
                        </p>


                        <p>
                            💪 Type:
                            ${workout.type}
                        </p>


                        <p>
                            ⭐ XP Reward:
                            ${workout.xp}
                        </p>



                        <button 
                            onclick="completeWorkout('${workout.id}')">

                            Complete Workout

                        </button>


                    </div>

                `;


            });



            content = `

                <section class="home">

                    <h2>💪 Training</h2>


                    <p>
                        Choose your workout.
                    </p>


                    ${workoutCards}


                </section>

            `;

        }



        // ==========================
        // BADGES
        // ==========================

        if (screen === "badges") {

            content = `

                <section class="home">

                    <h2>🏅 Badge Gallery</h2>

                    <p>
                        Your badges will appear here.
                    </p>

                </section>

            `;

        }



        // ==========================
        // DIARY
        // ==========================

        if (screen === "diary") {

            content = `

                <section class="home">

                    <h2>📖 Diary</h2>

                    <p>
                        Your reflections will appear here.
                    </p>

                </section>

            `;

        }



        // ==========================
        // PROFILE
        // ==========================

        if (screen === "profile") {

            content = `

                <section class="home">

                    <h2>👤 Profile</h2>

                    <p>
                        Your stats will appear here.
                    </p>

                </section>

            `;

        }



        // ==========================
        // SETTINGS
        // ==========================

        if (screen === "settings") {

            content = `

                <section class="home">


                    <h2>⚙️ Settings</h2>



                    <div class="card">

                        <h3>
                            Workout Mode
                        </h3>


                        <button>
                            💖 Regular
                        </button>


                        <button>
                            🤍 Vacation
                        </button>


                        <button>
                            ❤️ Period
                        </button>


                    </div>



                    <div class="card">

                        <h3>
                            Nutrition
                        </h3>


                        <label>

                            <input type="checkbox">

                            🥗 ARFID Mode

                        </label>


                    </div>



                </section>

            `;

        }




        app.innerHTML = `

            ${content}


            <nav class="bottom-nav">

                <button onclick="showScreen('home')">
                    🏠<br>
                    Home
                </button>


                <button onclick="showScreen('training')">
                    💪<br>
                    Training
                </button>


                <button onclick="showScreen('badges')">
                    🏅<br>
                    Badges
                </button>


                <button onclick="showScreen('diary')">
                    📖<br>
                    Diary
                </button>


                <button onclick="showScreen('profile')">
                    👤<br>
                    Profile
                </button>


                <button onclick="showScreen('settings')">
                    ⚙️<br>
                    Settings
                </button>


            </nav>

        `;

    }



    function completeWorkout(id) {


        const workout = workouts.find(
            workout => workout.id === id
        );


        alert(
            `${workout.name} completed! +${workout.xp} XP ⭐`
        );

    }



    window.showScreen = showScreen;

    window.completeWorkout = completeWorkout;


    showScreen("home");


});
