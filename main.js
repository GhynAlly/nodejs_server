const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();
app.use(fileUpload());
const port = 4000;

var image_data
var dist
var servo = false



app.post('/upload', (req, res) => {
    console.log("/upload")
    var read = req.files;
    image_data = read.media.data;
    dist = read.dist.data;
    console.log(read)
    res.send(servo)
    servo = false
});

app.get('/', (req, res) => {
    console.log("/")
    res.send(image_data);
});

app.post('/servo', (req, res) => {
    console.log("/servo")
    res.send(dist);
    //servo = true;
});
app.post('/dist', (req, res) => {
    console.log("/dist")
    res.send(dist);
    dist = req.text
});

app.post('/location', (req, res) => {
    console.log("location get")
    
    res.send("OK")
    console.log(req.text)
    console.log(req.body)
    
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

