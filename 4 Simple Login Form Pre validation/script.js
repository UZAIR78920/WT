document.getElementById("loginForm").addEventListener("submit", function(e) {
	e.preventDefault();

	let email = document.getElementById("email").value.trim();
	let password = document.getElementById("password").value.trim();
	let emailError = document.getElementById("emailError");
	let passwordError = document.getElementById("passwordError");

	emailError.textContent = "";
	passwordError.textContent = "";

	let isValid = true;

	if (email === "") {
		emailError.textContent = "Email is required";
		isValid = false;
	} else if (!/^\S+@\S+\.\S+$/.test(email)) {
		emailError.textContent = "Invalid email format";
		isValid = false;
	}

	if (password === "") {
		passwordError.textContent = "Password is required";
		isValid = false;
	} else if (password.length < 6) {
		passwordError.textContent = "Password must be at least 6 characters";
		isValid = false;
	}

	if (isValid) {
		alert("Login Successful!");
	}
});