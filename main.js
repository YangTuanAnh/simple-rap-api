const button = document.querySelector("button")
button.addEventListener("click", () =>
{
    const res = await fetch('/api/' + document.querySelector("input").value)
    const data = await res.json()
    console.log(data)
    const birthName = document.querySelector("h2")
    birthName.innerHTML = data["birthName"]
})

console.log('Working')