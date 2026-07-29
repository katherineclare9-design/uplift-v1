// UpLift App

document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");

    app.innerHTML = `
        <section class="home">
            <h2>🏠 Home</h2>

            <h3>Welcome to UpLift!</h3>

            <p>💖 Lift Yourself Higher Every Day</p>

            <hr>

            <p><strong>⭐ Level:</strong> 1</p>
            <p><strong>⚡ XP:</strong> 0 / 500</p>
            <p><strong>🔥 Streak:</strong> 0 Days</p>

            <button id="startButton">Start Today's Workout</button>
        </section>

        <nav class="bottom-nav">
            <button>🏠<br>Home</button>
            <button>💪<br>Training</button>
            <button>🏅<br>Badges</button>
            <button>📖<br>Diary</button>
            <button>👤<br>Profile</button>
            <button>⚙️<br>Settings</button>
        </nav>
    `;

    document
        .getElementById("startButton")
        .addEventListener("click", () => {
            alert("Workout feature coming soon! 💪");
        });
});
