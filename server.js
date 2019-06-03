const express = require('express');
const server = express();
server.use(express.json());

// your code here
server.get('/', (req, res) => {
    res.send(`<h2>Let's do this thang huh!</h2>`)
  });

const Accounts = require('./data/accounts-model.js');

console.log('hello');


//CREATE - tested

    server.post('/api/accounts', async (req, res)=> {
        try {
            console.log('hello');
            console.log(req.body);
            const account = await Accounts.find(req.body)
            console.log('goodbye') //
            console.log(account) //
            res.status(200).json(account)
        }
        catch (error) {
            res.status(500).json({
                message: 'there was an error in adding the accounts'

            })
        }
    })

//READ - tested
server.get('/api/accounts', async (req, res)=> {
    try {
        console.log('hello')
        console.log(Accounts);
        const accounts = await Accounts.find()
        console.log('goodbye') //
        console.log(accounts) //
        res.status(200).json(accounts)
    }
    catch (error) {
        res.status(500).json({
            message: 'there was an error in retrieving accounts'

         })
    }
})


//UPDATE - tested
server.put('/api/accounts/:id', async (req, res)=> {
    try {
        console.log('hello')
        const account = await Accounts.update(req.params.id, req.body)
        console.log('goodbye') //
                  
        if (account) {
            res.status(200).json(account);
          } else {
            res.status(404).json({ message: 'The account could not be found' });
          }
    }
    catch (error) {
            res.status(500).json({
            message: 'there was an error in updating the account'

         })
    }
})


//DELETE - tested
server.delete('/api/accounts/:id', async (req, res)=> {
    try {
        console.log('hello')
        const account = await Accounts.remove(req.params.id)
        console.log('goodbye') //
         //
         if (account>0) {
             res.status(200).json(account)
        }
    }
    catch (error) {
        res.status(500).json({
            message: 'there was an error in adding the accounts'

         })
    }
})



module.exports = server;