const navigator_name = navigator.userAgent;
let agents = navigator_name.split(" ")
for (i in agents) {
    agents[i] = agents[i].replace(";", "")
}

const agent = agents[2] + " " + agents[3] + " "+ agents[4]
const local_machine = window.location.href;
const header = document.querySelector("div.header")
header.innerHTML = `<p>${agent}: <a href="${local_machine}">${local_machine}</a></p>`

const input = document.querySelector("input.text-box");
const display = document.querySelector("div.display");
let num = 0;
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter" || event.keyCode === 13) {
        const text = input.value;
        display.innerHTML += `<p>${text} ${num+1}</p>` + "<hr>";
        num++;
        document.documentElement.scrollTop = document.documentElement.scrollHeight;
        // Você pode chamar uma função ou realizar outras ações aqui
    }
});
