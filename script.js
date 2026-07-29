// UpLift App

document.addEventListener("DOMContentLoaded", () => {

    const app = document.getElementById("app");


    // ==========================
    // USER DATA
    // ==========================

    let userData = JSON.parse(localStorage.getItem("upLiftData")) || {

        xp: 0,
        level: 1,
        streak: 0,
        lastWorkoutDate: null,
        completedWorkouts: 0

    };


    function saveData() {

        localStorage.setItem(
            "upLiftData",
            JSON.stringify(userData)
        );

    }



    // ==========================
    // TODAY'S WORKOUT
    // ==========================

    function getTodaysWorkout() {

        const days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];


        const today = new Date().getDay();

        const dayName = days[today];


        return dailyWorkouts[dayName];

    }



    // ==========================
    // COMPLETE DAILY WORKOUT
    // ==========================

    function completeDailyWorkout() {


        const today = new Date().toDateString();


        if (userData.lastWorkoutDate === today) {

            alert("You already completed today's workout! 🔥");

            return;

        }


        const workout = getTodaysWorkout();


        userData.xp += workout.xp;

        userData.streak += 1;

        userData.completedWorkouts += 1;

        userData.lastWorkoutDate = today;



        if (userData.xp >= userData.level * 500) {

            userData.level += 1;


            alert(
                `LEVEL UP! ⭐ Level ${userData.level}`
            );

        }


        saveData();


        alert(
            `${workout.name} completed! +${workout.xp} XP ⭐`
        );


        showScreen("home");

    }





    // ==========================
    // SHOW SCREEN
    // ==========================

    function showScreen(screen) {


        let content = "";



        // ==========================
        // HOME
        // ==========================

        if (screen === "home") {


            const workout = getTodaysWorkout();


            const xpNeeded = userData.level * 500;

            const percent =
                (userData.xp / xpNeeded) * 100;



            content = `

            <section class="home">


                <h2>💖 Good Morning!</h2>

                <p>
                    Lift Yourself Higher Every Day
                </p>



                <div class="card">

                    <h3>
                        ⭐ Level ${userData.level}
                    </h3>


                    <p>
                        ${userData.xp} / ${xpNeeded} XP
                    </p>


                    <div class="xp-bar">

                        <div 
                        class="xp-fill"
                        style="width:${percent}%">
                        </div>

                    </div>


                </div>




                <div class="card">

                    <h3>
                        🔥 Daily Streak
                    </h3>


                    <h1>
                        ${userData.streak} Days
                    </h1>

                </div>




                <div class="card">


                    <h3>
                        💪 Today's Workout
                    </h3>


                    <h4>
                        ${workout.name}
                    </h4>


                    <p>
                        📂 ${workout.category}
                    </p>


                    <p>
                        ⭐ ${workout.xp} XP
                    </p>



                    <ul>

                    ${
                        workout.workouts
                        .map(item => `<li>${item}</li>`)
                        .join("")
                    }

                    </ul>



                    <button id="completeDailyWorkout">

                        Complete Today's Workout

                    </button>


                </div>




                <div class="card">

                    <h3>
                        🏅 Latest Badge
                    </h3>


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
                        📂 ${workout.category}
                    </p>


                    <p>
                        💪 ${workout.type}
                    </p>


                    <p>
                        ⭐ ${workout.xp} XP
                    </p>



                    <button 
                    class="complete-workout"
                    data-id="${workout.id}">

                        Complete Workout

                    </button>


                </div>

                `;


            });



            content = `

            <section class="home">

                <h2>💪 Training</h2>

                ${workoutCards}

            </section>

            `;

        }





        // ==========================
        // OTHER TABS
        // ==========================


        if (screen === "badges") {

            content = `

            <section class="home">

                <h2>🏅 Badge Gallery</h2>

                <p>
                    Badges coming soon.
                </p>

            </section>

            `;

        }



        if (screen === "diary") {

            content = `

            <section class="home">

                <h2>📖 Diary</h2>

                <p>
                    Weekly wellness check coming soon.
                </p>

            </section>

            `;

        }



        if (screen === "profile") {

            content = `

            <section class="home">

                <h2>👤 Profile</h2>

                <p>
                    Workouts completed:
                    ${userData.completedWorkouts}
                </p>

            </section>

            `;

        }



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




        // ==========================
        // INSERT PAGE
        // ==========================

        app.innerHTML = `

        ${content}


        <nav class="bottom-nav">

            <button data-screen="home">
                🏠<br>Home
            </button>


            <button data-screen="training">
                💪<br>Training
            </button>


            <button data-screen="badges">
                🏅<br>Badges
            </button>


            <button data-screen="diary">
                📖<br>Diary
            </button>


            <button data-screen="profile">
                👤<br>Profile
            </button>


            <button data-screen="settings">
                ⚙️<br>Settings
            </button>


        </nav>

        `;




        // Navigation

        document
        .querySelectorAll(".bottom-nav button")
        .forEach(button => {

            button.addEventListener("click", () => {

                showScreen(
                    button.dataset.screen
                );

            });

        });



        // Daily workout button

        const dailyButton =
        document.getElementById(
            "completeDailyWorkout"
        );


        if (dailyButton) {

            dailyButton.addEventListener(
                "click",
                completeDailyWorkout
            );

        }



    }



    showScreen("home");


});
