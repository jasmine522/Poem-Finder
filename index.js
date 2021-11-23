document.addEventListener("DOMContentLoaded", () => {


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

    
const btnSubmitResult = document.querySelector("#btn")


btnSubmitResult.addEventListener("click", function(){
    apiFetch();
})
})
