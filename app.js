let amigos = []

function asignarTextoElemento(elemento, texto) {
  const el = document.querySelector(elemento)
  if (el) el.innerHTML = texto
}

function actualizarLista() {
  const lista = document.getElementById("listaAmigos")
  lista.innerHTML = ""
  amigos.forEach(amigo => {
    const li = document.createElement("li")
    li.textContent = amigo
    lista.appendChild(li)
  })
}

function agregarAmigo() {
  const input = document.getElementById("nombreAmigo")
  const nombre = input.value.trim()
  if (!nombre) {
    alert("Ingresa un nombre válido")
    input.value = ""
    return
  }
  if (amigos.includes(nombre)) {
    alert("Este nombre ya existe")
    input.value = ""
    return
  }
  amigos.push(nombre)
  input.value = ""
  actualizarLista()
}

function sortearAmigo() {
  
  const indiceAleatorio = Math.floor(Math.random() * amigos.length)
  const amigoSecreto = amigos[indiceAleatorio]
  const listaRes = document.getElementById("resultado")
  listaRes.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`
}


