let search_results = document.getElementById("button");
let recipes = document.querySelectorAll(".recipes");
let text_input = document.getElementById('search_text');

// Making my search Box here

search_results.addEventListener("click", function (a) {
  fetch(`https://recipepuppyproxy.herokuapp.com/api/?q=${text_input.value}`)
  .then(
    function (response) {
      if(response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(function (data) {
        displayOne(data);
        console.log("tori", data);
      });
    }
  )

  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });
})

function displayOne(data) {
  for (var i = 0; i < data.results.length; i++) {
    let template = ``;

    template +=
    `
    <img src="${data.results[i].thumbnail}">
    <h3>${data.results[i].title}</h3>
    <a href="${data.results[i].href}">Recipe</a>
    `;
    recipes[i].innerHTML = template;
  }
}





//           `
//         }else{
//           art.innerHTML+=
//           `
//           <a href='${data.results[i].href}'><img src='https://baconmockup.com/600/450'/></a>
//



//           `
//         }
//         art.innerHTML+=
//         `
//         <h2><a href='${data.results[i].href}'>${data.results[i].title}</a></h2>
//         <p class="ingredients">${data.results[i].ingredients}</p>
// `
// searchResults.appendChild(art);
//   }
// })
// })
