import { createCountingReadableStream } from "../readable";
import { EchoStream } from "../writable";

export default () => {
    const writeStream = new EchoStream();
    const readStream = createCountingReadableStream(10);
    
    readStream.pipe(writeStream);

    // TODO make readable stream that emits error

    // TODO add a transform stream to the pipeline

    // TODO use `pipeline()`
}