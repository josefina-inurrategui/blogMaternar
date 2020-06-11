const lastPostSpace = document.getElementById("lastPost");

placeLastPosts();
async function getposts (){
    const posts = await fetch('/post.json');
    const jsonPost = await posts.json();
            console.log("yeahp");
    return jsonPost;
};

async function placeLastPosts(){
    const posts = await getposts();
    const lastPosts = posts.slice(0,3);
            console.log(lastPosts);
    const divRow = document.createElement("div");
        divRow.className = "row flex-wrap justify-content-center pt-5";
    lastPosts.forEach(element => {
        const title = element.Titulo;
        const img = element.Img;
        const prepost = element.Prepost;
        const divPosteo = document.createElement("div");
            divPosteo.className = "col-md-3 col-xs-12 text-center";
        const portada = document.createElement("img");
            portada.className = "img-thumbnail portadas shadow";
            portada.src = img;
        const textoTitulo = document.createElement("p");
            textoTitulo.className = "text-dark bg-warning postTitulo mx-auto rounded";
            textoTitulo.innerHTML = title;

            divPosteo.appendChild(portada);
            divPosteo.appendChild(textoTitulo);
            divRow.appendChild(divPosteo);
            lastPostSpace.appendChild(divRow)

    })
};
