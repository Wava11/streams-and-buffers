import { PassThrough, pipeline } from "stream";
import { EchoStream } from "../writable";

export const noPipeline = () => {
    const writeStream = new EchoStream();

    writeStream.on("error", () => { console.log("write stream emitter error"); });

    const passThrough = new PassThrough();
    passThrough.pipe(writeStream);
    passThrough.emit("data", "hiiii");
    passThrough.emit("data", "byeee");
    passThrough.emit("error", new Error("world is burning"));

};

export const withPipeline = () => {
    const writeStream = new EchoStream();
    writeStream.on("error", () => { console.log("write stream emitted error"); });

    const passThrough = new PassThrough();
    pipeline(
        passThrough,
        writeStream,
        (e) => {
            console.log("pipeline produced an error :(");
        }
    );
    passThrough.emit("data", "hiiii");
    passThrough.emit("data", "byeee");
    passThrough.emit("error", new Error("world is burning"));

};