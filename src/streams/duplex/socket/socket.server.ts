import { createServer } from "net";
import { stdout } from "process";

export const startSocketServer = () => {
    createServer((socket) => {
        setInterval(() => {
            socket.write("server says hi\n");
        }, 1000);
        socket.pipe(stdout);
    }).listen(8888);
};
