const express = require("express");
require("dotenv").config();
require("./Database/Connection");
const cors = require("cors");
const download = require("image-downloader");
const upload = require('./utils/Upload')
const cookieParser = require('cookie-parser')


const app = express();
const port = process.env.PORT;

app.use(cookieParser());

const userRouter = require("./Route/UserRoute");
const placeRouter = require('./Route/PlaceRoute');
const bookingRouter = require('./Route/BookingRoute')

app.use(express.json());

app.use('/uploads/', express.static(__dirname + '/uploads/'))

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/user", userRouter);
app.use(placeRouter)
app.use(bookingRouter)

app.use("/uploadbylink", (req, res) => {
  try {
    const filename = Date.now() + '.jpg';
  
    const options = {
      url: req.body.link,
      dest: __dirname + "/uploads/" + filename, 
    };
  
    download.image(options)
    .then(response => {res.json(filename); console.log(response)})
    .catch(err => {
      res.status(400).json({error: 'Something Went Wrong!'});
      console.log(err)
    })
  } catch(e) {
    console.log(e)
    res.status(400).json({error: 'Something Went Wrong!'})
  }
});

app.use('/uploadimage', upload.single('images'), (req, res) => {
  if(req.file) {
    return res.json(req.file.filename)
  }
  res.status(400).json({error: 'Photo is required!'})
})

app.listen(port, () => {
  console.log("CONNECTED TO BACKEND SUCCESSFULLY! at port " + port);
});
