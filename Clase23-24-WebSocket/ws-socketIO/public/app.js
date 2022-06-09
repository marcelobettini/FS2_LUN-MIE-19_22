const socket = io()
const typing = document.getElementById("typing")
const inMsg = document.getElementById("inMsg")
const btnSend = document.getElementById("btnSend")
const user = document.getElementById("user")
const outMsg = document.getElementById("outMsg")

btnSend.addEventListener("click", () => {
    if (outMsg.value && user.value) {
        socket.emit("chat:message", {
            message: outMsg.value,
            user: user.value
        })
    }
});
outMsg.addEventListener("keypress", () => {
    socket.emit("chat:typing", user.value)
})


socket.on("chat:message", (data) => {
    typing.innerHTML = null
    inMsg.innerHTML += `<p><strong>${data.user}</strong>: ${data.message}</p>`
})

socket.on("chat:typing", (user) => {
    typing.innerHTML = `<p>${user} está escribiendo...</p>`
})