import Stream from 'stream';

export default async () => {
    const stream = Stream.Readable.from("");

    stream.push("one");
    stream.push("two");
    stream.push("three");
    stream.push("four");

    stream.on("data", (chunk) => {
        stream;
        console.log(chunk);

    });
    stream.push("five");
    stream.emit("end");
};