const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const db = require('./Database/db');
const router = express.Router();
const model = require('./Models/user')
const cors = require("cors");
const PORT = process.env.PORT || 3000;


const youtube_search = require('./Routes/youtube_search')
const video_description = require('./Routes/video_description')
const video_growth = require('./Routes/video_growth')
const mp4_to_text = require('./Routes/mp4_to_text')
const generate_pdf = require('./generate_pdf')
const user = require('./Routes/users')
const pdf = require('./Routes/addPdf')
const app = require('./backend/React-Pdf-Multer-Backend/app')


app.use(cors());

app.use("/files", express.static("files"))
app.use(bodyParser.json());
app.use('/youtube',youtube_search);
app.use('/video',video_description);
app.use('/growth',video_growth);
app.use('/',generate_pdf);
app.use('/',mp4_to_text);
app.use('/user',user); 
app.use('/pdf',pdf);
app.use('/backend',app); 
app.get('/',(req,res)=>{
    res.json({msg:"Welcome, Welcome, Bhale Padhara"});
})

app.listen(PORT, ()=>{
    console.log("Listing on port 3000...");
})