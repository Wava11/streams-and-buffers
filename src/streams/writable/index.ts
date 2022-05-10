import Stream from 'stream';

export class EchoStream extends Stream.Writable {
    _write(chunk: any, encoding: BufferEncoding, callback: (error?: Error | null) => void): void {
        console.log(chunk.toString());
        callback();
    }
}

export default () => {
    const stream = new EchoStream();

    stream.write("hello");
    stream.write("world!");
};