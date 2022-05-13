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
