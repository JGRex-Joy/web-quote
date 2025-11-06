const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const apiKey = "1l7zjEo07u3WsWjnK5zk8Q==FqslT2m5UwBXrQGw";
const apiURL = "https://api.api-ninjas.com/v2/randomquotes";

async function getQuote() {
    try{
        btnEl.innerText = "Loading..."
        btnEl.disabled = true;

        quoteEl.innerText = "Updating...";
        authorEl.innerText = "Updating...";

        const response = await fetch(apiURL, {
            headers: {
            "X-Api-Key": apiKey
            }
        });

        const data = await response.json();
        const quoteContent = data[0].quote;
        const quoteAuthor = data[0].author;
        quoteEl.innerText = quoteContent;
        authorEl.innerText = "~ " + quoteAuthor;

        btnEl.innerText = "Get a quote"
        btnEl.disabled = false;
    } catch(error){
        console.log(error);
        quoteEl.innerText = "An error happened";
        authorEl.innerText = "An error happened"
    }
}

btnEl.addEventListener("click", getQuote);
