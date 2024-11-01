// script.js

// List of random, useless facts
const facts = [
    "Ducks sometimes sleep with one eye open.",
    "Bananas are berries, but strawberries are not.",
    "A group of flamingos is called a 'flamboyance.'",
    "Honey never spoils. Archaeologists have found pots of honey in ancient tombs that are over 3000 years old and still edible!",
    "Octopuses have three hearts.",
    "The inventor of the Pringles can is now buried in one.",
    "A snail can sleep for three years.",
    
  ];
  
  // Get button and fact display elements
  const button = document.getElementById("mystery-button");
  const factDisplay = document.getElementById("fact-display");
  
  // Function to display a random fact
  function showRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factDisplay.textContent = facts[randomIndex];
    factDisplay.classList.remove("hidden");
  }
  
  // Add click event to the button
  button.addEventListener("click", showRandomFact);
  