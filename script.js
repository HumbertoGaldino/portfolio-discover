function toggleMode() {
  const html = document.documentElement
  //troca das classes
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  //substituição de imagens
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")

    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos escuros, camisa preta, jaqueta e barba com um fundo degradê lilas e azul."
    )
  } else {
    //se tiver sem light mode, manter a imagem padrão
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos, camisa preta, barba com um fundo amarelo."
    )
  }
}
