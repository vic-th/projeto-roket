function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar a tag img
  const img = document.querySelector("#perfil img")
  //subistituir a imagemm
  if (html.classList.contains("light")) {
    //se tiver ligth mode adicionar imagem ligth
    img.setAttribute("src", "./assets/figma/avatar-light.png")
  } else {
    //s e tiver sem ligth manter imagem normal
    img.setAttribute("src", "./assets/figma/avatar.png")
  }

  if (html.classList.contains("light")) {
    //se tiver ligth mode colocar esse alt
    img.setAttribute(
      "alt",
      "pessoa com camisa do flamengo branca sentada numa cadeira tirando uma foto soridente"
    )
  } else {
    //se não for light mode usar
    img.setAttribute("alt", "pessoa sorindo para a foto usamdo um casaco cinza")
  }
}
