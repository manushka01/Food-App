var gifDiv = document.querySelector("#hero");

function gif() {
    var gifURL = "https://api.giphy.com/v1/gifs/random?api_key=0UTRbFtkMxAplrohufYco5IY74U8hOes&tag=food&rating=pg-13"

    fetch(gifURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var newGifUrl = data.data.images.original.url;
            console.log(newGifUrl);
            var imgElement = document.createElement("img");
            imgElement.src = newGifUrl;

            gifDiv.innerHTML = "";

            gifDiv.appendChild(imgElement);
        })

}

function localStorageChange() {
    // window.location.href = "/FavoriteRecipes.html";
    var favRecipeDiv = document.querySelector('#favrecipes')
    var retrievedData = localStorage.getItem("favoriteRecipes");
    var recipe = JSON.parse(retrievedData);
    console.log(recipe)
    var newSavedRecipeTitle = recipe.map(x => x.recipeTitle);
    var newSavedRecipeImg = recipe.map(x => x.recipeImg);
    var newSavedRecipeUrl = recipe.map(x => x.recipeURL);
    console.log(newSavedRecipeTitle)
    console.log(newSavedRecipe)

    var newSavedRecipe = document.createElement('div');
    newSavedRecipe.setAttribute('class', 'recipeColumns');
    newSavedRecipe.innerHTML = `
    <h2>${newSavedRecipeTitle}</h2>
    <a href='${newSavedRecipeUrl}'><img src='${newSavedRecipeImg}'></img></a>
    `;
    console.log(newSavedRecipe)
    console.log(favRecipeDiv)
    favRecipeDiv.append(newSavedRecipe)
}
localStorageChange();
gif();
