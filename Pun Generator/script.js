const puns = [
    "I’m reading a book on anti-gravity. It’s impossible to put down!",
    "I used to be a baker, but I couldn't make enough dough.",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "I told my computer I needed a break, and now it won’t stop sending me Kit-Kat ads.",
    "I don’t trust stairs because they’re always up to something.",
    "What do you call fake spaghetti? An impasta!",
    "I used to be a banker, but I lost interest.",
    "The guy who invented Lifesavers candy made it because he wanted to make a mint!",
    "I couldn't figure out how to put my seatbelt on. Then it 'clicked'!",
    "I don’t know why I said that. It must have been a ‘pun’-derful mistake.",
    "I’m reading a book on anti-gravity. It’s impossible to put down!",
    "I used to be a baker, but I couldn't make enough dough.",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "I told my computer I needed a break, and now it won’t stop sending me Kit-Kat ads.",
    "I don’t trust stairs because they’re always up to something.",
    "What do you call fake spaghetti? An impasta!",
    "I used to be a banker, but I lost interest.",
    "The guy who invented Lifesavers candy made it because he wanted to make a mint!",
    "I couldn't figure out how to put my seatbelt on. Then it 'clicked'!",
    "I don’t know why I said that. It must have been a ‘pun’-derful mistake.",
    "What did one wall say to the other wall? I'll meet you at the corner!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What do you call cheese that isn't yours? Nacho cheese!",
    "I would tell you a joke about an elevator, but it’s an uplifting experience.",
    "I got my friend a job at a bakery because she kneads dough.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why was the math book sad? It had too many problems.",
    "I don't play soccer because I enjoy the sport. I'm just doing it for kicks!",
    "The only thing I like more than being right is being right.",
    "I can’t believe I got fired from the calendar factory. All I did was take a day off!",
    "I'm on a whiskey diet. I've lost three days already!",
    "I used to be indecisive, but now I’m not too sure.",
    "I told my friend 10 jokes to make him laugh. Sadly, no pun in ten did.",
    "How does a penguin build its house? Igloos it together!",
    "I named my dog ‘Five Miles’ so I can say I walk Five Miles every day.",
    "I used to have a job as a professional cricket player, but I got stumped!",
    "Why do cows wear bells? Because their horns don't work!",
    "Why was the computer cold? It left its Windows open!",
    "Why do seagulls fly over the ocean? Because if they flew over the bay, they’d be bagels!",
    "I would make a chemistry joke, but I know I wouldn’t get a reaction.",
    "The future, the present, and the past walked into a bar. Things got a bit tense.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you call a bear with no teeth? A gummy bear!",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "How do you organize a space party? You planet!",
    "I used to be a baker, but I couldn't make enough dough.",
];

document.getElementById("generate-pun").addEventListener("click", function() {
    const randomPun = puns[Math.floor(Math.random() * puns.length)];
    document.getElementById("pun-display").innerText = randomPun;
});
