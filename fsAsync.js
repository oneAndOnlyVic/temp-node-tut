const {readFile, writeFile} = require('fs');

readFile('./content/subfolder/first.txt','utf-8',(err, result) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    writeFile('./content/dampAsync.txt',`${result}` + 'new new',(err,result)=>{
        
    });
})
