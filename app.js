 //console.log('test')
// Modules 
// 1) Core module

// node nameofjsfile.js

// const fs = require('fs')
 //fs.writeFileSync('notes.txt','Hello')

// console.log(fs.readFileSync('notes.txt').toString())

// //appendFileSync
// fs.appendFileSync('notes.txt',' farah')

//////////////////////////////////////////////////////////////////////////////

// 2) Our own modules

// const x = require('./data')
// // console.log(x)
// // console.log(x(3,3))

// console.log(x)
// console.log(x.name1)
// console.log(x.l)
// console.log(x.sum(5,5))

//////////////////////////////////////////////////////////////////////////////

// NPM (Node pacakage manger)
// 1) npm init -y --> npm intalize
// npm i --> node_modules is deleted
// npm i namofpacakage ex(npm i validator)
// require
// use code

// const validator = require('validator')
// console.log(validator.isEmail('farah'))

// // chalk

// const chalk = require('chalk')
// const msg = chalk.green.bold('Sucess')
// console.log(msg)

//////////////////////////////////////////////////////////////////////////////


// process.argv  --> can not parse object
// console.log(process.argv)

// const command = process.argv[2]
// console.log(command)

// if(command === 'add'){
//     console.log('Add item')
// }
// else if(command ==='delete'){
//     console.log('Remove item')
// }
// else{
//     console.log('Error')
// }

///////////////////////////////////////////////////////////////////////////////

// yargs (Provide interactive way to deal with terminal)
// npm i yargs
// Version 1
//const yargs = require('yargs')

// list / read
// yargs.command({
//     command:'add',
//     describe:'Add notes',
//     handler:()=>{
//         console.log('Add notes')
//     }

// })

// yargs.command({
//     command:'delete',
//     describe:'Delete note',
//     handler:()=>{
//         console.log('Delete note')
//     }
// })

// yargs.command({
//     command:'list',
//     describe:'List Notes',
//     handler:()=>{
//         console.log('List Notes')
//     }
// })

// yargs.command({
//     command:'read',
//     describe:'Read Notes',
//     handler:()=>{
//         console.log('Read Notes')
//     }
// })

//////////////////////////////////////////////////////////////////////////////

// Version 2
// yargs.command({
//     command:'add',
//     describe:'Add notes',
//     // options which i will deal with
//     builder:{
//         title:{
//             describe:'This is title of note to be added',
//             type:'string',
//             demandOption:true
//         },
//         body:{
//             describe:'This is body of note to be added',
//             type:'string',
//             demandOption:true
//         }
//     },
//     handler:()=>{
//         console.log('Add notes')
//     }

// })

// yargs.command({
//     command:'delete',
//     describe:'Delete note',
//     builder:{
//         title:{
//             describe:'This is title of note to be added',
//             type:'string',
//             demandOption:true
//         }
//     },
//     handler:()=>{
//         console.log('Delete note')
//     }
// })

// yargs.command({
//     command:'list',
//     describe:'List Notes',
//     handler:()=>{
//         console.log('List Notes')
//     }
// })

// yargs.command({
//     command:'read',
//     describe:'Read Notes',
//     builder:{
//         title:{
//             describe:'This is title of note to be added',
//             type:'string',
//             demandOption:true
//         }
//     },
//     handler:()=>{
//         console.log('Read Notes')
//     }
// })

////////////////////////////////////////////////////////////////////////////////

// version 3
const notes = require('./notes')
const yargs =require('yargs')
yargs.command({
    command:'add',
    describe:'Add notes',
    // options which i will deal with
    builder:{
        title:{
            describe:'This is title of note to be added',
            type:'string',
            demandOption:true
        },
        body:{
            describe:'This is body of note to be added',
            type:'string',
            demandOption:true
        }
    },
    handler:(argv)=>{
    //    console.log(argv.title)
    //    console.log(argv.body)
    notes.addNote(argv.title,argv.body)
    }

})

yargs.command({
    command:'delete',
    describe:'Delete note',
    builder:{
        title:{
            describe:'This is title of note to be added',
            type:'string',
            demandOption:true
        }
    },
    handler:(argv)=>{
        console.log(argv)
        console.log(argv.title)
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'List Notes',
    handler:()=>{
         notes.listNote
       // console.log('List Notes')
    }
})

yargs.command({
    command:'read',
    describe:'Read Notes',
    builder:{
        title:{
            describe:'This is title of note to be added0',
            type:'string',
            demandOption:true
        }
    },
    handler:(argv)=>{
        notes.readNote(argv.title)
    }
})
 console.log(yargs.argv)
yargs.parse()

////////////////////////////////////////////////////////////////////////////////

// Save data json files (trial.js)

//////////////////////////////////////////////////////////////////////////////

