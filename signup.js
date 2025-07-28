function togglePassword(inputId, iconElement) {
  const input = document.getElementById(inputId);
  if (input.type === "password") {
    input.type = "text";
    iconElement.textContent = "🙈";
  } else {
    input.type = "password";
    iconElement.textContent = "👁️";
  }
}

document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("signupUsername").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById("signupConfirmPassword").value;

  if (password !== confirmPassword) {
    alert("❌ Passwords do not match!");
    return;
  }

  const user = { username, email, password };
  localStorage.setItem("user", JSON.stringify(user));
  alert("✅ Signup successful! You can now login.");
  window.location.href = "login.html";
});
