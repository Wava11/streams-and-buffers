import http from "http";
import Stream from "stream";

export const startServer = (port: number) => {
    http.createServer((req, res) => {
        console.log("got request");

        // const dateStream = createSlowReadTimeStream(30);
        const dateStream = createReadTimeStream();
        dateStream.pipe(res);
    }).listen(port);
};

export const createReadTimeStream = () => {
    return new class TimeStream extends Stream.Readable {
        _read(size: number): void {
            console.log("pushing!");

            this.push("0");
        }
    }({ objectMode: true });
};
export const createSlowReadTimeStream = (delayMs:number) => {
    return new class TimeStream extends Stream.Readable {
        _read(size: number): void {
            console.log("pushing!");
            setTimeout(() => {
                this.push("0");
                // this.push(new Date().toISOString());
            }, delayMs);
        }
    }({ objectMode: true });
};