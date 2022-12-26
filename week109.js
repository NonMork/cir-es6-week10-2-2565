//function
function greet(name,callback){
    console.log(name)
    callback()
}

function callMe(){
    
}

greet('Peter',callMe)