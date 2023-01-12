const express = require('express')
const app = express()
app.use(express.static('public'))

app.get('/data', (req, res) => {
    // Fetch data from an API
    // fetch('https://jsonplaceholder.typicode.com/posts/1')
    //     .then(response => response.json())
    //     .then(data => {
    //         // Send the data as a JSON response
    //         res.json(data)
    //     })
    //     .catch(error => {
    //         console.error(error)
    //         res.send(error)
    //     })
    res.json({'title': "Hi there", 'body': "Nice to see you"});
})


// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.listen(3000, () => {
    console.log('Server started on port 3000')
})
