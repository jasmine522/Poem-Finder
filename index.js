document.addEventListener("DOMContentLoaded", () => {

//API function fetches poem, parses each poem to only show the poems that has up to 20 lines, maps the data to show the title, author and lines of each poem, appends to DOM
function apiFetch (){
        fetch("https://poetrydb.org/random")
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            if(parseInt(data[0].linecount) > 20 ) {
                apiFetch()
            } else {
            const html = data.map(poem =>{
                return `<p><strong>Title of Poem: ${poem.title}</strong></p>
                        <p><em>Author: ${poem.author}</em></p>
                        <p>Poem: ${poem.lines}</p>`;
            }).join("")
            const div = document.getElementById("poems")
            div.innerHTML = html
            console.log(html);
            }
        })
        .catch(error =>{
            console.log(error);
        });
    }

//Variable for Find Poem button     
const btnSubmitResult = document.querySelector("#btn")

//Event Listener for when the Find Poem button is clicked 
btnSubmitResult.addEventListener("click", function(){
    apiFetch();
})
})
