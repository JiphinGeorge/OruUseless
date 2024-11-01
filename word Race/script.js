document.getElementById('word-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const word = document.getElementById('word').value;
    const raceTrack = document.getElementById('race-track'); 
    raceTrack.innerHTML = ''; 
    
    for (let i = 0; i < word.length; i++) {
        const letterElement = document.createElement('span'); 
        letterElement.textContent = word[i]; 
        letterElement.classList.add('letter'); 

        
        letterElement.style.top = Math.random() * 80 + '%';
        letterElement.style.left = Math.random() * 80 + '%';

        
        letterElement.addEventListener('mouseover', function() {
            
            letterElement.style.top = Math.random() * 80 + '%';
            letterElement.style.left = Math.random() * 80 + '%';
        });

        
        raceTrack.appendChild(letterElement);
    }

    
    document.getElementById('word-form').reset();
});
