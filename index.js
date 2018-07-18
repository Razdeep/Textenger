express=require('express')
path=require('path')
app=express()
// app.use(express.static(path.join(__dirname, 'public')))

app.get('/',function(req,res){
    res.sendFile(__dirname+'/public/home.html')
})


app.listen(1998||process.env.PORT,function(err){
    console.log('Locally Listening at at http://127.0.0.1:1998')
})