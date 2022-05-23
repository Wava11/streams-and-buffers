import http from "http";
import Stream from "stream";

export const startServer = (port: number) => {
    http.createServer((req, res) => {
        console.log("got request");

        const dateStream = createSlowReadTimeStream(1000);
        // const dateStream = createReadTimeStream();
        dateStream.pipe(res);
    }).listen(port);
};

export const createReadTimeStream = () => {
    return new class TimeStream extends Stream.Readable {
        _read(size: number): void {
            console.log("pushing!");

            this.push(`${new Date()}\n`);
        }
    }({ objectMode: true });
};
export const createSlowReadTimeStream = (delayMs: number) => {
    return new class TimeStream extends Stream.Readable {
        _read(size: number): void {
            console.log("pushing!");
            setTimeout(() => {
                this.push(`${new Date()}\n`);
            }, delayMs);
        }
    }({ objectMode: true });
};