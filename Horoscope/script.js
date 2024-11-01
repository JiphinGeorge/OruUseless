
const horoscopes = {
    Aries: [
        "Today, your spontaneous nature will lead you to buy a llama. Embrace the chaos!",
        "An unexpected adventure awaits you: a quest to find the perfect pizza topping.",
        "You might find a secret stash of glitter that will change your life forever. Use it wisely!",
        "A wild hair day will spark a movement in your neighborhood. Get ready for the compliments!"
    ],
    Taurus: [
        "You may find a secret stash of chocolate that will change your life forever. Share it wisely!",
        "A small investment in rubber ducks will pay off when you start a bath toy revolution.",
        "Your love for comfort will lead you to invent a chair that massages you while you snack.",
        "Prepare for a snack attack; today’s horoscope says you’ll discover a new favorite treat!"
    ],
    Gemini: [
        "A twin from another dimension will call you. Prepare for an outrageous conversation!",
        "Your social life will explode after you accidentally invite the entire universe to your birthday.",
        "Today, your split personality will argue about whether to binge-watch or read a book.",
        "A new friend will bring you the best gossip you’ve ever heard—just don’t spill it!"
    ],
    Cancer: [
        "Your emotional side will be tested when you accidentally start a water balloon fight. Dive in!",
        "Expect a surprise visit from your childhood teddy bear. It’s time to catch up!",
        "You’ll find yourself leading a neighborhood book club that devolves into a cookie-eating contest.",
        "A nostalgic craving will lead you to rediscover the joys of building pillow forts!"
    ],
    Leo: [
        "Your royal demeanor will attract a parade of squirrels. Wear your crown proudly!",
        "A spontaneous karaoke session will reveal your hidden talent as the next pop sensation!",
        "A request for your autograph will come from an unexpected fan—a small child with a crayon.",
        "Prepare for a spontaneous dance-off in the middle of the grocery store. Show them your moves!"
    ],
    Virgo: [
        "The stars suggest an unexpected obsession with organizing your sock drawer will emerge. Enjoy the order!",
        "Your meticulous planning will inspire others to organize their lives in color-coded charts.",
        "A sudden urge to alphabetize your spice rack will lead to a new culinary discovery!",
        "Expect a surprise visit from the organization fairy—she loves tidy spaces!"
    ],
    Libra: [
        "Today, you will inadvertently become the peacemaker between two feuding cats. Good luck!",
        "Your charming personality will attract a swarm of butterflies seeking advice on love.",
        "You’ll become an unwitting matchmaker for your friends’ pets. Prepare for cuteness overload!",
        "A balance will be restored in your life after you negotiate peace between your snack options."
    ],
    Scorpio: [
        "Your mysterious aura will lead you to uncover a hidden treasure… in your own backyard.",
        "An unexpected surprise will come from a secret admirer—who turns out to be a dog.",
        "A quest for the perfect pen will reveal hidden writing skills you never knew you had!",
        "Prepare for a dramatic flair as you unveil a secret talent for storytelling at dinner parties."
    ],
    Sagittarius: [
        "An impulse buy of a giant inflatable unicorn will take your pool parties to the next level!",
        "A spontaneous trip to the moon will be suggested by a very convincing friend—pack snacks!",
        "Today, your adventurous spirit will lead you to explore a new side of your favorite video game.",
        "You’ll discover a hidden talent for interpreting the thoughts of your houseplants!"
    ],
    Capricorn: [
        "Your ambition will lead you to challenge a cloud to a race. Spoiler: the cloud wins.",
        "An unexpected promotion will come when you accidentally invent a new office game—desk bowling!",
        "You’ll become the unlikely champion of a corporate baking competition. Flour power!",
        "Your leadership skills will shine when you organize a talent show for your office plants."
    ],
    Aquarius: [
        "You will discover a new conspiracy theory involving pigeons. Write your manifesto!",
        "A radical new hairstyle will earn you a spot in the local newspaper—prepare for fame!",
        "Your eccentricity will inspire a new fashion trend: wearing mismatched socks as a statement.",
        "Today, you’ll befriend a robot who thinks you’re the coolest human on Earth!"
    ],
    Pisces: [
        "Your creative side will shine when you decide to paint your cat. Expect unexpected results!",
        "A spontaneous urge to write poetry will lead you to become a local legend at coffee shops.",
        "You’ll encounter a talking fish that offers life advice. He’s been around the block!",
        "Prepare for a day filled with imagination as you create the world’s first bubble-wrap city!"
    ]
};

document.getElementById("generate-horoscope").addEventListener("click", function() {
    const sign = document.getElementById("zodiac-sign").value;
    const horoscopeDisplay = document.getElementById("horoscope-display");
    
    if (sign) {
        const randomIndex = Math.floor(Math.random() * horoscopes[sign].length);
        horoscopeDisplay.innerText = horoscopes[sign][randomIndex];
    } else {
        horoscopeDisplay.innerText = "Please select a zodiac sign!";
    }
});


document.getElementById("random-horoscope").addEventListener("click", function() {
    const signs = Object.keys(horoscopes);
    const randomSign = signs[Math.floor(Math.random() * signs.length)];
    const randomIndex = Math.floor(Math.random() * horoscopes[randomSign].length);
    document.getElementById("horoscope-display").innerText = horoscopes[randomSign][randomIndex];
});
