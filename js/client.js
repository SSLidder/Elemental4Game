const address = "http://localhost";
const port = "3000";
const socket = io(address + ":" + port, { transports : ['websocket'] });

socket.on("connect", function() {
    console.log("connected to server");
});

socket.on("disconnect", function() {
    console.log("disconnected to server");
});