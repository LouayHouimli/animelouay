function searchAnime() {
    var animeTitle = document.getElementById("animeTitle").value;
    
    if (animeTitle.trim() === "") {
        alert("Please enter an anime title.");
        return;
    }
    
    var apiUrl = "https://api.consumet.org/anime/gogoanime/";
    var url = apiUrl + encodeURIComponent(animeTitle);
    
    fetch(url)
        .then(response => response.json())
        .then(data => displayResult(data))
        .catch(error => console.error("Error:", error));
}

function displayResult(data) {
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; // Clear existing content
    
    for (var i = 0; i < data.length; i++) {
        var anime = data[i];
        var idLink = document.createElement("a");
        idLink.href = "https://api.consumet.org/anime/gogoanime/" + encodeURIComponent(anime.id);
        idLink.textContent = "ID: " + anime.id;
        
        resultDiv.appendChild(idLink);
        resultDiv.appendChild(document.createElement("br"));
    }
}
