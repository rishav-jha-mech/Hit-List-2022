const HIT = document.getElementById('hit')

const killArray = [
    {
        "name": "Adnan",
        "kill": false,
    },
    {
        "name": "Subrata",
        "kill": true,
    },
    {
        "name": "Somrick",
        "kill": true,
    },
    {
        "name": "Saikat",
        "kill": false,
    },
    {
        "name": "Shreyan",
        "kill": false,
    },
]

for (let i = 0; i < killArray.length; i++) {
    var div = document.createElement('div')
    div.setAttribute("class","kill-human")
    var green = "green"
    if (killArray[i].kill != true) {
        green = ""
    }
    div.innerHTML = `
            <h1>${i+1}.</h1>
            <h1><i class="fas ${green} fa-skull"></i>
            &nbsp;&nbsp;
            ${killArray[i].name}</h1>
            <h1><i class="fas fa-skull-crossbones"></i></h1>
            `
    HIT.appendChild(div)
}

document.getElementById("footer").innerHTML = "Jinka naam S se start hota hai unhi ke saath mera lafda hota rehta hai"