const postagemBlog = {}

const criarPost = () => {

    postagemBlog.titulo = document.getElementById("titulo-post").value
    postagemBlog.autor = document.getElementById("autor-post").value
    postagemBlog.conteudo = document.getElementById("conteudo-post").value
    postagemBlog.imagem = document.getElementById("imagem-post").value
    const publicacaoBlog = document.getElementById("container-de-posts")

    publicacaoBlog.innerHTML += `<h1>${postagemBlog.titulo}</h1> <h2>${postagemBlog.autor}</h2>
     <p>${postagemBlog.conteudo}</p> <img src=${postagemBlog.imagem}></img>`

    postagemBlog.titulo = document.getElementById("titulo-post").value = ""
    postagemBlog.autor = document.getElementById("autor-post").value = ""
    postagemBlog.conteudo = document.getElementById("conteudo-post").value = ""
    postagemBlog.imagem = document.getElementById("imagem-post").value = ""

}



