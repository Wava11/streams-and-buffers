import Stream from 'stream';

export default async () => {
    const stream = Stream.Readable.from("");

    stream.push("one");
    stream.push("two");
    stream.push("three");
    stream.push("four");

    const chunk = stream.read();
    console.log(chunk);

    // we could loop until the stream emits null
    let chunkOfWhile;
    while (chunkOfWhile = stream.read()) {
        console.log(chunkOfWhile);
    }

    const secondStream = Stream.Readable.from("");
    secondStream.push("second one");
    secondStream.push("second two");
    secondStream.push("second three");
    secondStream.push("second four");

    // or use the `for await` syntax 
    for await (let chunk of secondStream) {
        console.log(chunk);
    }

};