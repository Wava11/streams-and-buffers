import bufferExample from './buffers';
import emitterExample from './emitter';
import pausedStreamExample from './streams/readable/paused';
import flowingStreamExample from './streams/readable/flowing';
import writableStreamExample from './streams/writable';
import pipingExample from './streams/piping';
import { createConsumer, } from './streams/backpressure/consumer';
import { startServer } from './streams/backpressure/producer';
import { createCountingReadableStream } from './streams/readable';
import { Socket } from 'net';

startServer(2222);
// bufferExample();
// emitterExample();
// pausedStreamExample();
// flowingStreamExample();
// writableStreamExample();
// pipingExample();

// const stream = createCountingReadableStream(30);
// stream.on("data", (chunk) => {
//     console.log(chunk);
// });
// stream.on("end", () => {
//     console.log("done!");
// });