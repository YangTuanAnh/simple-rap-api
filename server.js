const express = require('express')
const app = express()
const cors = use('cors')
const PORT = 8000

app.use(cors())

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'dylan': {
        'age': 29,
        'birthName': 'Dylan',
        'birthLocation': 'Dylan'
    }
}

app.get('/', (req, res) =>
{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (req, res) =>
{
    const rapperName = req.params.rapperName.toLowerCase()
    if (rappers[rapperName])
        res.json(rappers[rapperName])
    else
    {
        res.json(rappers['dylan'])
    }

})

app.listen(process.env.PORT || PORT, () =>
{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})