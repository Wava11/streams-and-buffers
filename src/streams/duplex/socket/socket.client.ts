import { Socket } from "net";
import { stdout } from "process";

export const startSocketClient = () => {
    const socket = new Socket().connect({ port: 8888 });
    const intervalId = setInterval(() => {
        socket.write("client says hi\n");
    }, 1000);
    socket.on("close", () => {
        console.log("connection closed");
    });
    socket.on("error", (e) => {
        clearInterval(intervalId);
    });
    socket.pipe(stdout);
};