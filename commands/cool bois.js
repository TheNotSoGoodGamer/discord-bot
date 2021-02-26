module.exports = {
    name: 'give role cool bois',
    discription: "this is command to get the cool bois role!",
    execute(message, args) {

        
      let role = message.guild.roles.cache.find(r => r.name === "cool bois");


        if(message.member.roles.cache.some(r => r.name === "cool bois")){
            message.channel.send('you already have this role');
         
         
        
          } else {
            message.channel.send('you have recieved the role');
            message.member.roles.add(role).catch(console.error);
        }
  
  
    }
}