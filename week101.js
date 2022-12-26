//declarative function
function Hello (msg,name,age){
    //console.log(`${msg} ${name} ${age}`)
    return {msg,name,age} //object
}

const result = Hello('Hello world!','Mark Zuckerberg',25)//called function
console.log(`${result.msg} ${result.name} ${result.age}`)