module.exports = {
    name: 'ping',
    discription: "this is a ping command!",
    execute(message, args){
        if (command == 'ping'){
        message.channel.send('pong!'); 
        } 
    }
}