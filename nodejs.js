let {exec, spawn} = require('child_process');

// exec('node getTarget.js', function(err, stdout, stderr){
//     console.log("stdout :: ", stdout.toString());
// })


let spawnData = spawn('node', ['getTarget.js']);

spawnData.stdout.on('data', (data) => {
    console.log(data.toString());
})
// console.log();