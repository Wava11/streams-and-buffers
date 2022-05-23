import { stdout } from "process";
import { createCountingReadableStream } from "../readable";
import { EchoStream } from "../writable";
import { Throttle } from './throttle';
import { PassThrough, pipeline } from 'stream';
import { noPipeline, withPipeline } from "./errors";

export default () => {
    const writeStream = new EchoStream();
    const readStream = createCountingReadableStream(20);

    readStream.pipe(new Throttle(500)).pipe(writeStream);

    const passThrough = new PassThrough();
    
    passThrough.pipe(new Throttle(1000)).pipe(writeStream);
    passThrough.emit("data", "hiiii");
    passThrough.emit("data", "byeeee");
    
    // noPipeline()
    // withPipeline()

};