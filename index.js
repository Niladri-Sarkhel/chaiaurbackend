require('dotenv').config();
const express = require('express')
const app = express()
const port = 4000

function f() {
    console.log("hello world");
}

const random_user_data = {
    "user": {
        "id": 123,
        "username": "random_user",
        "email": "random_user@example.com",
        "age": 25,
        "is_active": true
    },
    "posts": [
        {
            "id": 1,
            "title": "Random Post 1",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "timestamp": "2024-01-07T12:00:00Z"
        },
        {
            "id": 2,
            "title": "Random Post 2",
            "content": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "timestamp": "2024-01-08T09:30:00Z"
        }
    ],
    "settings": {
        "theme": "dark",
        "notifications": {
            "email": true,
            "push": false
        }
    }
};


app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/next', function (req, res) {
    res.send("<h1>hello there niladri</h1>");
});

app.get('/data', function(req, res) {
    res.json(random_user_data);
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})