function makeId() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 16; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
const id = makeId()
console.log(makeId());

https://www.reddit.com/api/v1/authorize?client_id=qpG2XbZrf0CR291krT7B_g&response_type=code&state=${id}&redirect_uri=https://bam-reddit-client.netlify.app/&duration=temporary&scope=edit,history,identity,mysubreddits,read,subscribe,vote