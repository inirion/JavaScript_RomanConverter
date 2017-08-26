const Reader = require('./Reader.js');
const Writer = require('./Writer.js');
const Roman = require('./Roman2Arabic.js');

class Manager{
    constructor(){
        this.reader = Reader;
        this.writer = Writer;
        this.roman = Roman;
    }

    convert(){
        this.writer.writeToUser(this.roman.convertRoman2Arabic(this.reader.getRomanNumberFromFile()));
    }

}

let manager = new Manager();
manager.convert();