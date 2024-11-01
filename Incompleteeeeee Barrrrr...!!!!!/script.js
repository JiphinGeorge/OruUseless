// script.js
const messages = [
    "Almost there! Just another eternity...",
    "Loading the secrets of the universe...",
    "Calculating… recalculating… recalculating again...",
    "98% done! Just kidding, it's actually 3%.",
    "You're doing great! This bar though? Not so much.",
    "Hang tight... forever!",
    "It’s definitely not frozen. Promise.",
    "Searching for lost pixels…",
  ];
  
  const messageElement = document.getElementById("loading-message");
  
  // Function to change loading messages periodically
  function changeMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    messageElement.innerText = messages[randomIndex];
  }
  
  // Change message every 2 seconds
  setInterval(changeMessage, 2000);
  