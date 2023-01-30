let articleId = decodeURI(location.pathname.split("/").pop())
console.log(articleId)
document.getElementById("testa").innerHTML = articleId