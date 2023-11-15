const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();
app.use(fileUpload());
const port = 4000;

var image_data

var snapshot = false

app.post('/upload', (req, res) => {
    console.log("upload")
    var read = req.files;
    image_data = read.media.data;
    res.send()
    snapshot = false
});

app.get('/', (req, res) => {
    console.log("/")
    res.send(image_data);
});





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

