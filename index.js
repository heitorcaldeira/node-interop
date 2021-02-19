const express = require('express')
const fs = require('fs')

const app = express()

app.get('/', (req, res) => {
    res.send('GET /node  -  GET /cpp')
})

app.get('/node', (req, res) => {
    console.time()

    let numberOfLines = 0
    
    fs.readFile('bigfile.txt', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }

        for(let i = 0; i < data.length; i++) {
            if (data[i] == '\n') {
                numberOfLines++
            } else {
                // just a test to assing some value
                data[i] = 'A'
            }
        }
        
        console.log('NUMBER OF LINES: ' + numberOfLines)
        console.timeEnd()

        res.json({status: 'done'})
    });
})

app.get('/cpp', (req, res) => {
    console.time()
    const addon = require('./build/Release/addon');
    
    const runAddon = () => addon.countAndAssing();
    
    runAddon();
    
    console.timeEnd()

    res.json({status: 'done'})
})

app.listen(3000, () => console.log('Listening on 3000'))
