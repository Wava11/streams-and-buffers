import Stream from 'stream';

export const createCountingReadableStream = (amount: number) => {
    let counter = 0;
    function* yieldUntilAmount() {
        while (counter < amount) {
            counter++;
            yield counter.toString();
        }
    }
    return Stream.Readable.from(yieldUntilAmount());
};

export const createInfiniteReadableStreamOfZeros = () => {
    let counter = 0;
    return new Stream.Readable({
        read() {
            return counter++;
        }
    });
};

export class InfinitlyCountingReadableStream extends Stream.Readable {
    private counter = 0;
    read(size?: number) {
        return this.counter++;
    }
}