const scienceQuotes = [
  {
    scientist: "Albert Einstein",
    quote:
      "The important thing is not to stop questioning. Curiosity has its own reason for existing.",
  },
  {
    scientist: "Carl Sagan",
    quote: "Somewhere, something incredible is waiting to be known.",
  },
  {
    scientist: "Isaac Newton",
    quote:
      "If I have seen further, it is by standing on the shoulders of giants.",
  },
  {
    scientist: "Werner Heisenberg",
    quote:
      "Not only is the Universe stranger than we think, it is stranger than we can think.",
  },
  {
    scientist: "Stephen Hawking",
    quote:
      "We are all now connected by the Internet, like neurons in a giant brain.",
  },
  {
    scientist: "Robert A. Heinlein",
    quote: "Everything is theoretically impossible, until it is done.",
  },
  {
    scientist: "Albert Einstein",
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  },
  {
    scientist: "Charles Darwin",
    quote:
      "It is not the strongest of the species that survives, nor the most intelligent, but the one most responsive to change.",
  },
  {
    scientist: "Neil deGrasse Tyson",
    quote:
      "The good thing about science is that it's true whether or not you believe in it.",
  },
  {
    scientist: "Isaac Asimov",
    quote:
      "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.",
  },
];

let generateQuote = document.getElementById("generateQuote");
generateQuote.addEventListener("click", () => {
  let randomint =
    scienceQuotes[Math.floor(Math.random() * scienceQuotes.length)];

//   console.log(randomint);
  let { scientist, quote } = randomint;
  let quoteDisplay = document.getElementById("quoteDisplay");
  let nameDasplay = document.getElementById("nameDasplay");

  quoteDisplay.innerText = quote;
  nameDasplay.innerText = scientist;
});
