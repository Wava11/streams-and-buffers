import Stream from "stream";

export class Throttle extends Stream.Duplex {

    constructor(private readonly delayMs: number, opts?: Stream.DuplexOptions) {
        super(opts);
    }

    _write(chunk: any, encoding: BufferEncoding, callback: (error?: Error | null) => void): void {
        this.push(chunk);
        setTimeout(callback, this.delayMs);
    }

    _read(size: number): void {

    }
}