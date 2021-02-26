module.exports = {
    name: 'hello',
    discription: "hello!",
    execute(message, args){
        if (command == 'hello'){   
        message.channel.send('hello!');
        }
    }
}