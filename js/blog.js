const blog = document.getElementById("blog");


async function getposts (){
    const posts = await fetch('/post.json');
    const jsonPost = await posts.json();
            console.log("yeahp");
    return jsonPost;
};
placeAllPosts();
async function placeAllPosts(){
    const posts = await getposts();
              console.log(posts);
    const divRow = document.createElement("div");
        divRow.className = "row flex-wrap justify-content-center pt-5";
    posts.forEach(element => {
        const title = element.Titulo;
        const img = element.Img;
        const prepost = element.Prepost;
        const divPosteo = document.createElement("div");
            divPosteo.className = "col-md-4 col-xs-12 text-center py-3";
        const portada = document.createElement("img");
            portada.className = "img-thumbnail portadas shadow";
            portada.src = img;
        const textoTitulo = document.createElement("p");
            textoTitulo.className = "text-dark bg-warning";
            textoTitulo.innerHTML = title;

            divPosteo.appendChild(portada);
            divPosteo.appendChild(textoTitulo);
            divRow.appendChild(divPosteo);
            blog.appendChild(divRow)

/*         portada.addEventListener("click",()=>{
            const modal = document.createElement("div");
                modal.className = "modal fade";
                modal.id = "modalScroll";
                modal.tabIndex = "-1";
                modal.role = "dialog";
            const modalDialog = document.createElement("div");
                modalDialog.className = "modal-dialog modal-dialog-scrollable";
                modalDialog.role = "document";
            const modalContent = document.createElement("div");
                modalContent.className = "modal-content";
            const modalHeader = document.createElement("div");
                modalHeader.className = "modal-header";
            const modalHeaderText = document.createElement("h5");
                modalHeaderText.className = "modal-title";
                modalHeaderText.innerHTML = title;
            const close = document.createElement("button");
                close.type ="button";
                close.className="close";
            close.style.data-dismiss = "modal";
            const modalfoto = document.createElement("img");
                modalfoto.className = "fotoposteo modal body"
            const modalBody = document.createElement("div");
                modalBody.innerHTML= prepost + element.post
            const modalFooter = document.createElement("div")
                modalFooter.className = "modal-footer"
            const modalLike = document.createElement("i")
                modalLike.className = "far fa heart text-dark"

            modalHeader.appendChild(modalHeaderText)
            modalHeader.appendChild(close)
            modalFooter.appendChild(modalLike)
            modalContent.appendChild(modalHeader)
            modalContent.appendChild(modalfoto)
            modalContent.appendChild(modalBody)            
            modalContent.appendChild(modalFooter)
            modalDialog.appendChild(modalContent)
            modal.appendChild(modalDialog)
            blog.appendChild(modal)        })  */

    }) 
};

