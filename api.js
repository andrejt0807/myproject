/* const req = new XMLHttpRequest();

req.onload = function () {
    console.log("ALL DONE WITH REQUEST")
    const data = JSON.parse(this.responseText)
    console.log(data.ticker.price)
}
req.onerror = function () {
    console.log("ERROR!!!")
    console.log(this.responseText)
}
req.open("GET", "https://api.cryptonator.com/api/ticker/btc-usd")
req.send() */

/* fetch("https://api.cryptonator.com/api/ticker/btc-usd") */

const jokes = document.querySelector("#jokes")
const button = document.querySelector("button")


const addNewJoke = async () => {
    const jokeText = await getDadJoke()
    const newLI = document.createElement("LI")
    newLI.append(jokeText)
    jokes.append(newLI)
}
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: "application/json" } }
        const res = await axios.get("https://icanhazdadjoke.com/", config)
        return res.data.joke
    } catch (e) {
        return "NO JOKES AVAILABLE"
    }

}
button.addEventListener("click", addNewJoke)