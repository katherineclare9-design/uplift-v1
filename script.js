// UpLift App

document.addEventListener("DOMContentLoaded", () => {

    const app = document.getElementById("app");

    function showScreen(screen) {

        let content = "";

        if (screen === "home") {
            content = `
                <section class="home">

                    <h2>💖 Good Morning!</h2>
                    <p>Lift Yourself Higher Every Day</p>

                    <div class="card">
                        <h3>⭐ Level 1</h3>
                        <p>0 / 500 XP</p>

                        <div class="xp-bar">
                            <div class="xp-fill"></div>
                        </div>
                    </div>

                    <div class="card">
                        <h3>🔥 Daily Streak</h3>
                        <h1>0 Days</h1>
                    </div>

                    <div class="card">
                        <h3>✅ Today's Checklist</h3>

                        <label><input type="checkbox"> Complete Workout</label><br><br>
                        <label><input type="checkbox"> Drink Water Goal</label><br><br>
                        <label><input type="checkbox"> Nutrition Goal</label><br><br>
                        <label><input type="checkbox"> Journal Entry</label>
                    </div>

                    <div class="card">
                        <h3>🏅 Latest Badge</h3>
                        <p>No badges earned yet.</p>
                    </div>

                    <button id="startButton">Start Today's Workout</button>

                </section>
            `;
        }

        if (screen === "training") {
            content = `
                <section class="home">
                    <h2>💪 Training</h2>
                    <p>Your workouts will appear here.</p>
                </section>
            `;
        }

        if (screen === "badges") {
            content = `
                <section class="home">
                    <h2>🏅 Badge Gallery</h2>
                    <p>Your earned and locked badges will appear here.</p>
                </section>
            `;
        }

        if (screen === "diary") {
            content = `
                <section class="home">
                    <h2>📖 Diary</h2>
                    <p>Your journal and Monday wellness check will be here.</p>
                </section>
            `;
        }

        if (screen === "profile") {
            content = `
                <section class="home">
                    <h2>👤 Profile</h2>
                    <p>Your stats will appear here.</p>
                </section>
            `;
        }

        if (screen === "settings") {
            content = `
                <section class="home">
                    <h2>⚙️ Settings</h2>

                    <h3>Workout Mode</h3>

                    <button>💖 Regular</button>
                    <button>🤍 Vacation</button>
                    <button>❤️ Period</button>

                    <hr>

                    <label>
                        <input type="checkbox">
                        🥗 ARFID Mode
                    </label>
                </section>
            `;
        }

        app.innerHTML = `
            ${content}

            <nav class="bottom-nav">
                <button onclick="showScreen('home')">🏠<br>Home</button>
                <button onclick="showScreen('training')">💪<br>Training</button>
                <button onclick="showScreen('badges')">🏅<br>Badges</button>
                <button onclick="showScreen('diary')">📖<br>Diary</button>
                <button onclick="showScreen('profile')">👤<br>Profile</button>
                <button onclick="showScreen('settings')">⚙️<br>Settings</button>
            </nav>
        `;

        const workoutButton = document.getElementById("startButton");

        if (workoutButton) {
            workoutButton.onclick = () => {
                alert("Workout feature coming soon! 💪");
            };
        }
    }

    window.showScreen = showScreen;

    showScreen("home");

});
