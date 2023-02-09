const express = require('express')
const app = express()
const fs = require('fs');   
const ytdl = require('ytdl-core')

app.get('/:name/' ,(req,res)=> {
    const {url} = req.query
    res.header("Content-Disposition",'filter: "videoandaudio"', 'attachmentt: filename="video.mp4"')
    return ytdl(url,{ filter: "videoandaudio"}).pipe(fs.createWriteStream(`./videos/${req.params.name}.mp4`));

})  
app.listen(4000)
