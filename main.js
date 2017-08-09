let search = document.getElementById('searchBar');
let searchBtn = document.getElementById('searchBtn');
let searchResults = document.querySelector ('main');

searchBtn.addEventListener('click', function(){

    searchResults.InnerHTML = "";

    //Get Value From Search Bar//
    let searchQUery=search.value;
    let urlBase = 'http://recipepuppyproxy.herokuapp.com/api/?q=';
// url  , search query //
let urlQuery= urlBase + searchQuery
fetch(urlQuery)
    .then(function(response){
      return response.json().then(function(data){
        for (var i = 0; i < data.results.length; i++) {
          let art = document.createElement('article');
        if(data.results(i).thumbnail){
          art.InnerHTML
          `
          <a href='${data.results[i].href}'><img src='${data.results[i].thumbnail}'/></a>
          `
        }else{
          art.innerHTML+=
          `
          <a href='${data.results[i].href}'><img src='https://baconmockup.com/600/450'/></a>

          `
        }
        art.innerHTML+=
        `
        <h2><a href='${data.results[i].href}'>${data.results[i].title}</a></h2>
        <p class="ingredients">${data.results[i].ingredients}</p>
`
searchResults.appendChild(art);
  }
})
})
.catch(function(error){
  console.log("Nuts:It does not work");
})
  })
