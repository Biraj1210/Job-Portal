const jobList = document.getElementById("jobList");

function postJob() {
    let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

    jobs.push({
        title: title.value,
        company: company.value
    });

    localStorage.setItem("jobs", JSON.stringify(jobs));
    alert("Job Posted!");
    displayJobs();
}

function displayJobs() {
    let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    jobList.innerHTML = "";

    jobs.forEach(job => {
        jobList.innerHTML += `
      <div class="card fade-in">
        <h3>${job.title}</h3>
        <p>${job.company}</p>
      </div>`;
    });
}

function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
}

displayJobs();
