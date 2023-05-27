var http = require('http')
var fs = require('fs')
var index = fs.readFileSync('index.html')

var SerialPort = require('serialport')

const parsers = SerialPort.parsers
const parser = new parsers.Readline({
    delimiter: '\r\n'
})

var port = new SerialPort('COM3',{
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
})

port.pipe(parser)

var app = http.createServer(function(req,res){
    res.writeHead(200,{
        'Content-Type': 'text/html'
    })
    res.end(index)
})

var io = require('socket.io').listen(app)

io.on('connection',function(socket){
    socket.on('lights',function(data){
        console.log('Node js escutando...')
    })
})

parser.on('data',function(data){
    console.log(data)
    io.emit('data',data)
})

parser.on('web',function(btn){
    var dado_web = btn.value
    console.log(dado_web)
    SerialPort.write(dado_web)
    //port.write(dado_web)    
})

app.listen(3000)