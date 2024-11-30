document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault(); 

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    const data = {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    };


    fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(function(response) {
        if (response.status >= 200 && response.status < 300) {
            return response.json(); 
        } else {
            return response.json().then(function(errorData) {
                document.getElementById("responseMessage").innerHTML = "<p>Error: " + errorData.error + "</p>";
            });
        }
    })
    .then(function(data) {
        document.getElementById("registrationForm").style.display = "none";
        document.getElementById("responseMessage").innerHTML = "<p>Registration Successful!</p>";
        console.log("Access Token:", data.accessToken);
    })
    .catch(function(error) {
        document.getElementById("responseMessage").innerHTML = "<p>Error: " + error.message + "</p>";
    });
});
