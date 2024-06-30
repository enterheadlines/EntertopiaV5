
  document.getElementById("search").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default form submission
      document.getElementById("searc").submit(); // Manually submit the form
    }
  });
