const fs = require('fs');
fs.readFile("./cool.txt","utf-8",function(err,content){
    console.log(content);
})

const quote ="You've got this"
fs.writeFile("./awesome.txt",quote,function(err){
    console.log("writting Completed");
});

const quote2 = "\n May be not today, may be not Tommorrow , but one day ill be a champion"

fs.appendFile("./awesome.txt",quote2,function(err){
    console.log("added to file");
});

