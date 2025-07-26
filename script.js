document.getElementById('signupForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const res = await fetch('https://backendsetup.h2510079.repl.co/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (!res.ok) {
      const data = await res.json();
      document.getElementById('errorMessage').textContent = data.error || "Something went wrong.";
      return;
    }

    // On 3rd try = success
    localStorage.setItem('userEmail', email);
    window.location.href = "welcome.html";

  } catch (err) {
    document.getElementById('errorMessage').textContent = "Network error.";
  }
});
