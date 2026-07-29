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
                    <p>Lift Yourself Higher Every Day</p>

                    <div class="card">
                        <h3>⭐ Level ${level}</h3>
                        <p>${xp} / ${xpNeeded} XP</p>

                        <div class="xp-bar">
                            <div class="xp-fill" style="width:${percent}%"></div>
                        </div>
                    </div>

                    <div class="card">
                        <h3>🔥 Daily Streak</h3>
                        <h1>${streak} Days</h1>
                    </div>

                    <div class="card">
                        <h3>🏅 Latest Badge</h3>
                        <p>No badges earned yet.</p>
                    </div>

                </section>
            `;
        }

        // ==========================
        // TRAINING
        // ==========================
        if (screen === "training") {

            content = `
                <section class="home">

                    <h2>💪 Training</h2>

                    <div class="card">
                        <h3>🏋️ Strength</h3>

                        <label><input type="checkbox"> Upper Body</label><br><br>
                        <label><input type="checkbox"> Lower Body</label><br><br>
                        <label><input type="checkbox"> Core</label><br><br>
                        <label><input type="checkbox"> Full Body</label>
                    </div>

                    <div class="card">
                        <h3>📣 Cheer</h3>

                        <label><input type="checkbox"> Backspot</label><br><br>
                        <label><input type="checkbox"> Stunts</label><br><br>
                        <label><input type="checkbox"> Jumps</label><br><br>
                        <label><input type="checkbox"> Motions</label><br><br>
                        <label><input type="checkbox"> Conditioning</label>
                    </div>

                    <div class="card">
                        <h3>🤸 Flexibility</h3>

                        <label><input type="checkbox"> Splits</label><br><br>
                        <label><input type="checkbox"> Pike</label><br><br>
                        <label><input type="checkbox"> Straddle</label><br><br>
                        <label><input type="checkbox"> Mobility</label><br><br>
                        <label><input type="checkbox"> Recovery Stretch</label>
                    </div>

                    <div class="card">
                        <h3>❤️ Recovery</h3>

                        <label><input type="checkbox"> Recovery Workout</label><br><br>
                        <label><input type="checkbox"> Light Stretch</label>
                    </div>

                    <div class="card">
                        <h3>🏖️ Vacation Workout</h3>

                        <label><input type="checkbox"> Deep Core Activation</label><br><br>
                        <label><input type="checkbox"> 1 Minute Plank</label><br><br>
                        <label><input type="checkbox"> 45 Seconds Russian Twists</label><br><br>
                        <label><input type="checkbox"> 10 Push-ups</label>
                    </div>

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
                    <p>Your earned and locked badges will appear here.</p>
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
                    <p>Your journal and Monday wellness check will be here.</p>
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
                    <p>Your stats will appear here.</p>
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
                        <h3>Workout Mode</h3>

                        <button>💖 Regular</button>
                        <button>🤍 Vacation</button>
                        <button>❤️ Period</button>
                    </div>

                    <div class="card">
                        <h3>Nutrition</h3>

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
                <button onclick="showScreen('home')">🏠<br>Home</button>
                <button onclick="showScreen('training')">💪<br>Training</button>
                <button onclick="showScreen('badges')">🏅<br>Badges</button>
                <button onclick="showScreen('diary')">📖<br>Diary</button>
                <button onclick="showScreen('profile')">👤<br>Profile</button>
                <button onclick="showScreen('settings')">⚙️<br>Settings</button>
            </nav>
        `;
    }

    window.showScreen = showScreen;

    showScreen("home");

});
