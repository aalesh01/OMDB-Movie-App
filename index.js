fetch('https://www.omdbapi.com/?i=tt3896198&apikey=b354cdfd')
    .then(response => response.json())
    .then(data => console.log(data));
