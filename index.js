express=require('express')
path=require('path')
dotenv=require('dotenv')
bodyParser=require('body-parser')
dotenv.config()
client=require('twilio')(process.env.TWILIO_SID,process.env.TWILIO_TOKEN)
app=express()
app.use(express.static(path.join(__dirname, 'public')))
// console.log(process.env.TWILIO_SID)
// console.log(process.env.TWILIO_TOKEN)
app.use(bodyParser.urlencoded({extended: true}))
app.get('/',function(req,res){
    res.sendFile(__dirname+'/public/home.html')
})
app.post('/',function(req,res){
    client.messages.create({
        to: process.env.MY_PHONE_NUMBER,
        from: process.env.MY_TWILIO_NUMBER,
        body: req.body.message
    },function(err,data){
        if(err)
            console.log(err)
        console.log(data)
    }).then((messsage) => console.log(message.sid))
    console.log('RRC : Sending MESSAGE SENT text')
    res.send('Message sent... ')
})

app.listen((process.env.PORT||1998),function(err){
    console.log('Locally Listening at at http://127.0.0.1:1998')
})