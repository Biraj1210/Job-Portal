const jobsDiv = document.getElementById("jobs");
const savedDiv = document.getElementById("savedJobs");

let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
let saved = JSON.parse(localStorage.getItem("saved")) || [];

function displayJobs(filter = "") {
    jobsDiv.innerHTML = "";

    jobs
        .filter(job => job.title.toLowerCase().includes(filter.toLowerCase()))
        .forEach((job, index) => {
            jobsDiv.innerHTML += `
        <div class="card fade-in">
          <h3>${job.title}</h3>
          <p>${job.company}</p>
          <button onclick="applyJob(${index})">Apply</button>
          <button onclick="saveJob(${index})">❤️ Save</button>
        </div>`;
        });
}

function applyJob(index) {
    let apps = JSON.parse(localStorage.getItem("applications")) || [];
    let user = JSON.parse(localStorage.getItem("currentUser"));

    apps.push({ user: user.email, job: jobs[index].title });
    localStorage.setItem("applications", JSON.stringify(apps));
    alert("Applied 🚀");
    showAnalytics();
}

function saveJob(index) {
    saved.push(jobs[index]);
    localStorage.setItem("saved", JSON.stringify(saved));
    displaySaved();
    showAnalytics();
}

function displaySaved() {
    savedDiv.innerHTML = "";
    saved.forEach(job => {
        savedDiv.innerHTML += `
      <div class="card fade-in">
        <h3>${job.title}</h3>
        <p>${job.company}</p>
      </div>`;
    });
}

document.getElementById("search").addEventListener("input", e => {
    displayJobs(e.target.value);
});

function showAnalytics() {
    let apps = JSON.parse(localStorage.getItem("applications")) || [];
    document.getElementById("analytics").innerHTML = `
    <p>Total Applications: ${apps.length}</p>
    <p>Saved Jobs: ${saved.length}</p>`;
}

function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
}

displayJobs();
displaySaved();
showAnalytics();
