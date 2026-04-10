function signup() {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.push({
        name: name.value,
        email: email.value,
        password: password.value,
        role: role.value
    });

    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful!");
}

function login() {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(u =>
        u.email === email.value && u.password === password.value
    );

    if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        window.location.href =
            user.role === "recruiter" ? "post-job.html" : "dashboard.html";
    } else {
        alert("Invalid login");
    }
}
