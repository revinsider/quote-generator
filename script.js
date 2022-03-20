const quoteContainer = document.getElementById("quote-container");
const newQuoteBtn = document.getElementById("new-quote");
const twitterBtn = document.getElementById("twitter");
const quoteText = document.getElementById("quote");
const author = document.getElementById("author");
const loader = document.getElementById("loader");

let apiQuotes = [];
// Show loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}

// Show NewQuote
function newQuote() {
  loading();
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
  //   Check if author field is blank and replace it with 'Unknown'

  if (!quote.author) {
    author.textContent = "Unknown";
  } else {
    author.textContent = quote.author;
  }
  //   Check Quote length to determine styling
  if (quote.text.length > 100) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  complete();
  quoteText.textContent = quote.text;
}

// Get Quotes From API
async function getQuotes() {
  loading();
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // Catch Error Here
  }
  complete();
}

// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${author.textContent}`;
  window.open(twitterUrl, "_blank");
}

// On Load
getQuotes();

// Event listeners
twitterBtn.addEventListener("click", tweetQuote);
newQuoteBtn.addEventListener("click", newQuote);
