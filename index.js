const express = require('express')
const app = express()
const ytdl = require('ytdl-core')


app.get('/' ,(req,res)=> {
    const {url} = req.query
    const date = Date.now()
    res.header("Content-Disposition",'filter: "videoandaudio"', 'attachmentt: filename="video.mp4"')
    return ytdl(url,{ filter: "videoandaudio"}).pipe(res);

})



app.listen(3000)
