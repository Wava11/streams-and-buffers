import { stdout } from "process";
import { createCountingReadableStream } from "../readable";
import { EchoStream } from "../writable";
import { Throttle } from './throttle';
import { PassThrough, pipeline } from 'stream';

export default () => {
    const writeStream = new EchoStream();
    const readStream = createCountingReadableStream(20);

    // readStream.pipe(new Throttle(500)).pipe(writeStream);

    // const passThrough = new PassThrough();
    
    // passThrough.pipe(new Throttle(1000)).pipe(writeStream);
    // passThrough.emit("data", "hiiii");
    // passThrough.emit("data", "bye   ee");
    
    const passThrough2 = new PassThrough();
    pipeline(
        passThrough2,
        writeStream,
        (e) => {
            console.log("pipeline produced an error :(");
            console.error(e);
        }
    );
    passThrough2.emit("data", "hiiii");
    passThrough2.emit("data", "byeee");
    passThrough2.emit("error", new Error("world is burning"));
    

    // TODO make readable stream that emits error

    // TODO add a transform stream to the pipeline

    // TODO use `pipeline()`
};