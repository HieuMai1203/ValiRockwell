

//////////////////////CẤU HÌNH KẾT NỐI KEPWARE////////////////////
const {TagBuilder, IotGateway} = require('kepserverex-js');
const tagBuilder = new TagBuilder({ namespace: 'Channel1.Device1' });
const iotGateway = new IotGateway({
    host: '127.0.0.1',
    port: 5000
});
/////////////HÀM ĐỌC/GHI DỮ LIỆU XUỐNG KEPWARE(PLC)//////////////
//Đọc dữ liệu
var tagArr = [];
function fn_tagRead(){
	iotGateway.read(TagList).then((data)=>{
		var lodash = require('lodash');
		tagArr = lodash.map(data, (item) => item.v);
		console.log(tagArr);
      
	});
}
// Ghi dữ liệu
function fn_Data_Write(tag,data){   
    tagBuilder.clean();	
    const set_value = tagBuilder
        .write(tag,data)
        .get();
    iotGateway.write(set_value);
}
//Chuyển thành binary


/////////////////////////ĐỊNH NGHĨA TAG////////////////////////
// Khai báo tag

var GreenLightA          ='GreenLightA';
var GreenLightB          ='GreenLightB';
var RedLightA            ='RedLightA';
var RedLightB            ='RedLightB';
var YellowLightA         ='YellowLightA';
var YellowLightB         ='YellowLightB';
var LightSensor          = 'LightSensor';
var Start                ='Start';
var Stop                 ='Stop';
var Confirm              = 'Confirm';
var GreenTime            = 'GreenTime';
var RedTime              = 'RedTime';
var YellowTime           = 'YellowTime';
var SegmentA_0_Code      = 'SegmentA_0_Code';
var SegmentA_1_Code      = 'SegmentA_1_Code';
var SegmentB_0_Code      = 'SegmentB_0_Code';
var SegmentB_1_Code      = 'SegmentB_1_Code';
 
// Đọc dữ liệu
const TagList = tagBuilder

.read(GreenLightA)
.read(GreenLightB)
.read(RedLightA)
.read(RedLightB)
.read(YellowLightA)
.read(YellowLightB)
.read(LightSensor)
.read(Start)
.read(Stop)
.read(Confirm)
.read(GreenTime)
.read(RedTime)
.read(YellowTime)
.read(SegmentA_0_Code)
.read(SegmentA_1_Code)
.read(SegmentB_0_Code)
.read(SegmentB_1_Code)



.get();





/////////////////////////QUÉT DỮ LIỆU////////////////////////
//Tạo Timer quét dữ liệu
setInterval(
	() => fn_read_data_scan(),
	100 //100ms 
);



 
// Quét dữ liệu
function fn_read_data_scan(){
	fn_tagRead();	// Đọc giá trị tag
 
}

// /////////////////////////THIẾT LẬP KẾT NỐI WEB/////////////////////////
var express = require("express");
var app = express();
var livereload = require ("livereload");
var connectLivereload = require("connect-livereload");
const path = require('path');
const { words } = require('lodash');
const { start } = require('repl');

app.use(connectLivereload());
const puclicDirectory= path.join(__dirname, "public");
app.use(express.static(puclicDirectory));
app.set("view engine", "ejs");
app.set("views", "./views");

var server = require("http").Server(app);
var io = require("socket.io")(server);
var livereloadServer = livereload.createServer();
livereloadServer.watch(puclicDirectory);
livereloadServer.server.once("connection",() =>{
    setTimeout(() => {
        livereloadServer.refresh("/");
    }, 100);
    
} )
server.listen(3000);
// Home calling
app.get("/", function(req, res){
    res.render("home")
    
});
//

// ///////////LẬP BẢNG TAG ĐỂ GỬI QUA CLIENT (TRÌNH DUYỆT)/////////// 
function fn_tag(){
    io.sockets.emit("GreenLightA",      tagArr[0]);  
    io.sockets.emit("GreenLightB",      tagArr[1]);
    io.sockets.emit("RedLightA",        tagArr[2]);
    io.sockets.emit("RedLightB",        tagArr[3]);
    io.sockets.emit("YellowLightA",     tagArr[4]);
    io.sockets.emit("YellowLightB",     tagArr[5]);
    io.sockets.emit("LightSensor",      tagArr[6]);
    io.sockets.emit("Start",            tagArr[7]);
    io.sockets.emit("Stop",             tagArr[8]);
    io.sockets.emit("Confirm",          tagArr[9]);
    io.sockets.emit("GreenTime",        tagArr[10]);
    io.sockets.emit("RedTime",          tagArr[11]);
    io.sockets.emit("YellowTime",       tagArr[12]);
    io.sockets.emit("SegmentA_0_Code",  tagArr[13]);
    io.sockets.emit("SegmentA_1_Code",  tagArr[14]);
    io.sockets.emit("SegmentB_0_Code",  tagArr[15]);
    io.sockets.emit("SegmentB_1_Code",  tagArr[16]);

 

}
// ///////////GỬI DỮ LIỆU BẢNG TAG ĐẾN CLIENT (TRÌNH DUYỆT)///////////
io.on("connection", function(socket){
    socket.on("Client-send-data", function(data){
    fn_tag();
}); 
    
});

io.on("connection", function(socket)
{
    socket.on("cmd_Traffic_Lights_data", function(data){
        console.log("Client sent data: ", data);
        fn_Data_Write(RedTime,data[0]);
        fn_Data_Write(YellowTime,data[1]);
        fn_Data_Write(GreenTime,data[2]);
        fn_Data_Write(Confirm,data[3]);
    });

    socket.on("cmd_Traffic_Lights_control_Start", function(data){
        fn_Data_Write(Start,data);
    });

    socket.on("cmd_Traffic_Lights_control_Stop", function(data){
        fn_Data_Write(Stop,data);
    });
});

