document.getElementById("regForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let email = document.getElementById("email").value;
    let course = document.getElementById("course").value;

    document.getElementById("msg").innerHTML =
        "Registered Successfully!<br>" +
        "Name: " + name + "<br>" +
        "Roll: " + roll + "<br>" +
        "Email: " + email + "<br>" +
        "Course: " + course;
});
