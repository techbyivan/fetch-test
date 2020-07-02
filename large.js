// let baseUrl = `http://api.openweathermap.org/data/2.5/weather/?appId=${appId}'

// fetch("http://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=e5c5d7a64cbc34fdfa140d4ef967e1d3")
// .then(resp => resp.json())
//     .then(console.log)



fetch("https://www.anapioficeandfire.com/api/characters?page=1&pageSize=25")
    .then(resp => resp.json())
    .then(json=>addUsers(json))


const addUsers = json => {
     json=json.filter(i => i.names!=)   
    }



// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(resp => resp.json())
//     .then(console.log)

// let mainContainer = document.getElementById("myUsers");

// function appendData(data) {
//     let mainContainer = document.getElementById("myUsers");
//     for (let i = 0; i < data.length; i++) {
//       let div = document.createElement("div");
//       div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
//       mainContainer.appendChild(div);
//     }
//   }
