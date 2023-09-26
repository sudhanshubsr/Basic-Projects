// 'https://jacintodesign.github.io/quotes-api/data/quotes.json'

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterButton = document.getElementById("twitter");
const newQuoteButton = document.getElementById("new-quote");
const Loader = document.getElementById("loader");
let apiQuotes = [];

// Show Loading

function loading() {
  Loader.hidden = false;
  quoteContainer.hidden = true;
}

function loadingcomplete() {
  quoteContainer.hidden = false;
  Loader.hidden = true;
}

// Show New Quote
function newQuote() {
  loading();
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length) + 1];
  //   check if author field is blank or not?

  if (!quote.author) {
    authorText.textContent = "~ Unknow";
  } else {
    authorText.textContent = `~ ${quote.author}`;
  }

  // Check Quote length to determine the size

  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }

  //set quote and hide loader
  quoteText.textContent = quote.text;
  loadingcomplete();
}

// Fetching from the API

async function getQuotes() {
  loading();
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    //Catch Error Here
  }
}

// Tweet Quote

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} ~ ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

newQuoteButton.addEventListener("click", newQuote);
twitterButton.addEventListener("click", tweetQuote);




getQuotes();