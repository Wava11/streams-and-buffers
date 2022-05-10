import EventEmitter from 'events';

export default () => {
    const myEmitter = new EventEmitter();
    
    //  Listeners are registered via the `.on` method
    //  event names are standardly camelCase
    myEmitter.on('rocketLaunched', (...args) => {
        setImmediate(() => {
            console.log("red alert!");
        });
    });
    
    //  The .emit method syncronously invokes all listeners matching the event name

    console.log("emitting moo...");
    myEmitter.emit("moo",);
    console.log("moo emitted");
    
    console.log("emitting rocketLaunched...");
    myEmitter.emit("rocketLaunched");
    console.log("rocketLaunched emitted");
}