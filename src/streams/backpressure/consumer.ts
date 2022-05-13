import { createReadTimeStream } from "./producer";

import { execSync } from 'child_process';
import Stream from "stream";


class SlowEchoWriteStream extends Stream.Writable {
    _write(chunk: any, encoding: BufferEncoding, callback: (error?: Error | null) => void): void {
        execSync("sleep 1");
        console.log(chunk);
    }
}

export const createConsumer = () => {
    
    const readStream = createReadTimeStream();
    // const slowWriteStream = new SlowEchoWriteStream({ objectMode: true });
    readStream.pipe(process.stdout);
};