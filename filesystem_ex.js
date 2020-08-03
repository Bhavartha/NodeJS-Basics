const fs = require('fs');

fs.writeFile('temp.txt','Temp text',(err)=>{
    if(err){
        console.log('F');
    }
    else{
        console.log('File created');
    }
});

fs.readFile('temp.txt','utf-8',(err,data)=>{
    if(err){
        console.log('F');
    }
    else{
        console.log(data);
    }
});

fs.rename('temp.txt','temporary.txt',(err)=>{
    if(err){
        console.log('F');
    }
    else{
        console.log('File renamed');
    }
});

fs.appendFile('temporary.txt','Appended data',(err)=>{
    if(err){
        console.log('F');
    }
    else{
        console.log('File appended');
    }
});

fs.unlink('temporary.txt',(err)=>{
    if(err){
        console.log('F');
    }
    else{
        console.log('File deleted');
    }
});


fs.readdir('del',(err,files)=>{
    if(err)
        console.log(err);
    else{
        for(let file of files){
            fs.unlink(`./del/${file}`,(err)=>{
                if(err){
                    console.log('F');
                }
                else{
                    console.log('File deleted');
                }
            });
        }
    }
});


