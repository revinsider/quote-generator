let apiQuotes = [];
const newQuoteBtn = document.getElementById("new-quote");
const twitterBtn = document.getElementById("twitter");
const quoteText = document.getElementById("quote");
const author = document.getElementById("author");

// Show NewQuote
function newQuote() {
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
  quoteText.textContent = quote.text;
}

// New Quotes on Click
function newQuotesad() {
  newQuote();
  newQuoteBtn.addEventListener("click", () => {
    quoteText.textContent = quote.text;
    author.textContent = quote.author;
  });
}

// Get Quotes From API
async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // Catch Error Here
  }
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
