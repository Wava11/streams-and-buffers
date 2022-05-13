import { writeFileSync } from 'fs';
export default () => {

    const buffer = Buffer.alloc(2);
    // const bigBuffer = Buffer.alloc(256000000);
    buffer[0] = 86;
    buffer[1] = 65;
    console.log(buffer);
    
    
    buffer.write("mate");
    console.log(buffer);
    
    
    buffer[3]=65
    console.log(buffer[3]);
    console.log(buffer);


};