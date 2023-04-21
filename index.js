

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


/////////////////////////ĐỊNH NGHĨA TAG////////////////////////

// Khai báo tag đèn giao thông (17 tags)
var Traffic_RedTime              = 'Traffic_RedTime';
var Traffic_YellowTime           = 'Traffic_YellowTime';
var Traffic_GreenTime            = 'Traffic_GreenTime';
var Traffic_Start                ='Traffic_Start';
var Traffic_Stop                 ='Traffic_Stop';
var Traffic_Confirm              = 'Traffic_Confirm';
var Traffic_SegmentA_0_Code      = 'Traffic_SegmentA_0_Code';
var Traffic_SegmentA_1_Code      = 'Traffic_SegmentA_1_Code';
var Traffic_SegmentB_0_Code      = 'Traffic_SegmentB_0_Code';
var Traffic_SegmentB_1_Code      = 'Traffic_SegmentB_1_Code';
var Traffic_LightSensor          = 'Traffic_LightSensor';
var Traffic_GreenLightA          ='Traffic_GreenLightA';
var Traffic_GreenLightB          ='Traffic_GreenLightB';
var Traffic_RedLightA            ='Traffic_RedLightA';
var Traffic_RedLightB            ='Traffic_RedLightB';
var Traffic_YellowLightA         ='Traffic_YellowLightA';
var Traffic_YellowLightB         ='Traffic_YellowLightB';
var Traffic_RedTimeDisplay      = 'Traffic_RedTimeDisplay';
var Traffic_YellowTimeDisplay   = 'Traffic_YellowTimeDisplay';
var Traffic_GreenTimeDisplay    = 'Traffic_GreenTimeDisplay';


//Khai báo tag biến tần (8 tag)
var Inverter_Start               ='Inverter_Start'
var Inverter_Stop                ='Inverter_Stop'
var Inverter_Confirm             ='Inverter_Confirm'
var Inverter_Jog                 ='Inverter_Jog'
var Inverter_Fwd                 ='Inverter_Fwd'
var Inverter_Rev                 ='Inverter_Rev'
var Inverter_Speed_SP            ='Inverter_Speed_SP'
var Inverter_Speed_PV            ='Inverter_Speed_PV'

//Khai báo tag khoan phôi (22 tag +)
var Billet_Start                 ='Billet_Start'
var Billet_Stop                  ='Billet_Stop'
var Billet_Pause                 ='Billet_Pause'
var Billet_So_phoi_IN            ='Billet_So_phoi_IN'
var Billet_So_lo_IN              ='Billet_So_lo_IN'
var Billet_Confirm               ='Billet_Confirm'
var Billet_So_phoi_OUT           ='Billet_So_phoi_OUT'
var Billet_So_lo_OUT             ='Billet_So_lo_OUT'
var Billet_A1                    ='Billet_A1'
var Billet_A2                    ='Billet_A2'
var Billet_A3                    ='Billet_A3'
var Billet_A4                    ='Billet_A4'
var Billet_B1                    ='Billet_B1'
var Billet_B2                    ='Billet_B2'
var Billet_B3                    ='Billet_B3'
var Billet_B4                    ='Billet_B4'
var Billet_Green                 ='Billet_Green'
var Billet_Red                   ='Billet_Red'
var Billet_Yellow                ='Billet_Yellow'
var Billet_Guard                 ='Billet_Guard'
var Billet_Auto_Manu             ='Billet_Auto_Manu'
var Billet_ErrorCode             ='Billet_ErrorCode'
var Billet_Error                 ='Billet_Error'
var Billet_Complete              ='Billet_Complete'





// Đọc dữ liệu
const TagList = tagBuilder

.read(Traffic_RedTime)
.read(Traffic_YellowTime)
.read(Traffic_GreenTime)
.read(Traffic_Start)
.read(Traffic_Stop)
.read(Traffic_Confirm)
.read(Traffic_SegmentA_0_Code)
.read(Traffic_SegmentA_1_Code)
.read(Traffic_SegmentB_0_Code)
.read(Traffic_SegmentB_1_Code)
.read(Traffic_LightSensor)
.read(Traffic_GreenLightA)
.read(Traffic_GreenLightB)
.read(Traffic_RedLightA)
.read(Traffic_RedLightB)
.read(Traffic_YellowLightA)
.read(Traffic_YellowLightB)
.read(Traffic_RedTimeDisplay)
.read(Traffic_YellowTimeDisplay)
.read(Traffic_GreenTimeDisplay)


.read(Inverter_Start)
.read(Inverter_Stop)
.read(Inverter_Jog)
.read(Inverter_Confirm)
.read(Inverter_Fwd)
.read(Inverter_Rev)
.read(Inverter_Speed_SP)
.read(Inverter_Speed_PV)

.read(Billet_Start)                 
.read(Billet_Stop)                  
.read(Billet_Pause)                 
.read(Billet_So_phoi_IN)            
.read(Billet_So_lo_IN)              
.read(Billet_Confirm)               
.read(Billet_So_phoi_OUT)           
.read(Billet_So_lo_OUT)             
.read(Billet_A1)                    
.read(Billet_A2)                   
.read(Billet_A3)                    
.read(Billet_A4)                   
.read(Billet_B1)                    
.read(Billet_B2)                    
.read(Billet_B3)                    
.read(Billet_B4)                    
.read(Billet_Green)                 
.read(Billet_Red)                   
.read(Billet_Yellow)                
.read(Billet_Guard)                 
.read(Billet_Auto_Manu)
.read(Billet_ErrorCode)
.read(Billet_Error)
.read(Billet_Complete)

    

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
    fn_sql_insert(); // Ghi dữ liệu vào SQL
    fn_Alarm_Manage(); //Quản lí lỗi
 
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
   
    io.sockets.emit("Traffic_RedTime",          tagArr[0]);
    io.sockets.emit("Traffic_YellowTime",       tagArr[1]);
    io.sockets.emit("Traffic_GreenTime",        tagArr[2]);
    io.sockets.emit("Traffic_Start",            tagArr[3]);
    io.sockets.emit("Traffic_Stop",             tagArr[4]);
    io.sockets.emit("Traffic_Confirm",          tagArr[5]);
    io.sockets.emit("Traffic_SegmentA_0_Code",  tagArr[6]);
    io.sockets.emit("Traffic_SegmentA_1_Code",  tagArr[7]);
    io.sockets.emit("Traffic_SegmentB_0_Code",  tagArr[8]);
    io.sockets.emit("Traffic_SegmentB_1_Code",  tagArr[9]);
    io.sockets.emit("Traffic_LightSensor",      tagArr[10]);
    io.sockets.emit("Traffic_GreenLightA",      tagArr[11]);  
    io.sockets.emit("Traffic_GreenLightB",      tagArr[12]);
    io.sockets.emit("Traffic_RedLightA",        tagArr[13]);
    io.sockets.emit("Traffic_RedLightB",        tagArr[14]);
    io.sockets.emit("Traffic_YellowLightA",     tagArr[15]);
    io.sockets.emit("Traffic_YellowLightB",     tagArr[16]);
    io.sockets.emit("Traffic_RedTimeDisplay",          tagArr[17]);
    io.sockets.emit("Traffic_YellowTimeDisplay",       tagArr[18]);
    io.sockets.emit("Traffic_GreenTimeDisplay",        tagArr[19]);
    

    io.sockets.emit("Inverter_Start",           tagArr[20]);
    io.sockets.emit("Inverter_Stop",            tagArr[21]);
    io.sockets.emit("Inverter_Confirm",         tagArr[22]);
    io.sockets.emit("Inverter_Jog",             tagArr[23]);
    io.sockets.emit("Inverter_Fwd",             tagArr[24]);
    io.sockets.emit("Inverter_Rev",             tagArr[25]);
    io.sockets.emit("Inverter_Speed_SP",        tagArr[26]);
    io.sockets.emit("Inverter_Speed_PV",        tagArr[27]);

    io.sockets.emit("Billet_Start",             tagArr[28]);                 
    io.sockets.emit("Billet_Stop",              tagArr[29]);
    io.sockets.emit("Billet_Pause",             tagArr[30]);
    io.sockets.emit("Billet_So_phoi_IN",        tagArr[31]);
    io.sockets.emit("Billet_So_lo_IN",          tagArr[32]);
    io.sockets.emit("Billet_Confirm",           tagArr[33]);
    io.sockets.emit("Billet_So_phoi_OUT",       tagArr[34]);
    io.sockets.emit("Billet_So_lo_OUT",         tagArr[35]);
    io.sockets.emit("Billet_A1",                tagArr[36]);
    io.sockets.emit("Billet_A2",                tagArr[37]);
    io.sockets.emit("Billet_A3",                tagArr[38]);
    io.sockets.emit("Billet_A4",                tagArr[39]);
    io.sockets.emit("Billet_B1",                tagArr[40]);
    io.sockets.emit("Billet_B2",                tagArr[41]);
    io.sockets.emit("Billet_B3",                tagArr[42]);
    io.sockets.emit("Billet_B4",                tagArr[43]);
    io.sockets.emit("Billet_Green",             tagArr[44]);
    io.sockets.emit("Billet_Red",               tagArr[45]);
    io.sockets.emit("Billet_Yellow",            tagArr[46]);
    io.sockets.emit("Billet_Guard",             tagArr[47]);
    io.sockets.emit("Billet_Auto_Manu",         tagArr[48]);
    io.sockets.emit("Billet_ErrorCode",         tagArr[49]);
    io.sockets.emit("Billet_Error",             tagArr[50]);
    io.sockets.emit("Billet_Complete",          tagArr[51]);
        
   

}
// ///////////GỬI DỮ LIỆU BẢNG TAG ĐẾN CLIENT (TRÌNH DUYỆT)///////////
io.on("connection", function(socket){
    socket.on("Client-send-data", function(data){
    fn_tag();
}); 
    
});
//////////////Gửi dữ liệu đèn và các nút nhấn///////
io.on("connection", function(socket)
{   
    //Client send traffic data
    socket.on("cmd_Traffic_Lights_data", function(data){
        fn_Data_Write(Traffic_RedTime,data[0]);
        fn_Data_Write(Traffic_YellowTime,data[1]);
        fn_Data_Write(Traffic_GreenTime,data[2]);
        fn_Data_Write(Traffic_Confirm,data[3]);
        
    });

    //Client send Billet data
    socket.on("cmd_Billet_data", function(data){
        fn_Data_Write(Billet_So_phoi_IN,data[0]);
        fn_Data_Write(Billet_So_lo_IN,data[1]);
        fn_Data_Write(Billet_Confirm,data[2]);
        
    });

    //Client send Inverter data
    socket.on("cmd_Inverter_data", function(data){
        fn_Data_Write(Inverter_Speed_SP,data[0]);
        fn_Data_Write(Inverter_Confirm,data[1]);
        
    });


    //Server lắng nghe dữ liệu nút nhấn bt đèn gia thông từ client, ghi vào các biến để truyền về kepware
    socket.on("cmd_Traffic_Lights_control_Start", function(data){
        fn_Data_Write(Traffic_Start,data);
    });

    socket.on("cmd_Traffic_Lights_control_Stop", function(data){
        fn_Data_Write(Traffic_Stop,data);
    });

    //Server lắng nghe dữ liệu nút nhấn bt khoan phôi từ client, ghi vào các biến để truyền về kepware
    socket.on("cmd_Billet_control_Start", function(data){
        fn_Data_Write(Billet_Start,data);
    });

    socket.on("cmd_Billet_control_Stop", function(data){
        fn_Data_Write(Billet_Stop,data);
    });

    socket.on("cmd_Billet_control_Pause", function(data){
        fn_Data_Write(Billet_Pause,data);
    });

    //Server lắng nghe dữ liệu nút nhấn bt biến tần từ client, ghi vào các biến để truyền về kepware
    socket.on("cmd_Inverter_control_Start", function(data){
        fn_Data_Write(Inverter_Start,data);
    });

    socket.on("cmd_Inverter_control_Stop", function(data){
        fn_Data_Write(Inverter_Stop,data);
    });

    socket.on("cmd_Inverter_control_Jog", function(data){
        fn_Data_Write(Inverter_Jog,data);
    });

    socket.on("cmd_Inverter_control_Fwd", function(data){
        fn_Data_Write(Inverter_Fwd,data);
    });

    socket.on("cmd_Inverter_control_Rev", function(data){
        fn_Data_Write(Inverter_Rev,data);
    });


});

///////////////////////////////////////////////////////////SQL///////////////////////////////////////////////////////////////////
// Khai báo SQL
var mysql = require('mysql');
var sqlcon = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0908571332a",
  database: "sql_plc",
  dateStrings:true
});

// Ghi dữ liệu vào SQL
var sqlins_done = false; // Biến báo đã ghi xong dữ liệu
function fn_sql_insert(){
    var trigger = tagArr[51];  // Trigger đọc về từ PLC
    var sqltable_Name = "plc_data";
    // Lấy thời gian hiện tại
    var tzoffset = (new Date()).getTimezoneOffset() * 60000; //Vùng Việt Nam (GMT7+)
    var temp_datenow = new Date();
 var timeNow = (new Date(temp_datenow - tzoffset)).toISOString().slice(0, -1).replace("T"," ");
    var timeNow_toSQL = "'" + timeNow + "',";
 
    // Dữ liệu đọc lên từ các tag
    var data_Billet =     "'" + tagArr[31] + "',";
    var data_Hole =       "'" + tagArr[32] + "'";
    // Ghi dữ liệu vào SQL
    if (trigger == true & trigger != sqlins_done)
    {
        var sqlins1 = "INSERT INTO " 
                    + sqltable_Name 
                    + " (date_time, data_Billet, data_Hole) VALUES (";
        var sqlins2 = timeNow_toSQL 
                    + data_Billet 
                    + data_Hole
                    ;
        var sqlins = sqlins1 + sqlins2 + ");";
        // Thực hiện ghi dữ liệu vào SQL
        sqlcon.query(sqlins, function (err, result) {
            if (err) {
                console.log(err);
             } else {
                console.log("SQL - Ghi dữ liệu thành công");
              } 
            });
    }
    sqlins_done = trigger;
}
// Đọc dữ liệu từ SQL
io.on("connection", function(socket){
    socket.on("msg_SQL_Show", function(data)
    {
        var sqltable_Name = "plc_data";
        var query = "SELECT * FROM " + sqltable_Name + ";" 
        sqlcon.query(query, function(err, results, fields) {
            if (err) {
                console.log(err);
            } else {
                const objectifyRawPacket = row => ({...row});
                const convertedResponse = results.map(objectifyRawPacket);
                socket.emit('SQL_Show', convertedResponse);
            } 
        });
    });
});


 
// Mảng xuất dữ liệu Excel
var SQL_Excel = [];  // Dữ liệu Excel   
 // Tìm kiếm dữ liệu SQL theo khoảng thời gian
io.on("connection", function(socket){
    socket.on("msg_SQL_ByTime", function(data)
    {
        var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset time Việt Nam (GMT7+)
        // Lấy thời gian tìm kiếm từ date time piker
        var timeS = new Date(data[0]); // Thời gian bắt đầu
        var timeE = new Date(data[1]); // Thời gian kết thúc
        // Quy đổi thời gian ra định dạng cua MySQL
        var timeS1 = "'" + (new Date(timeS - tzoffset)).toISOString().slice(0, -1).replace("T"," ") + "'";
        var timeE1 = "'" + (new Date(timeE - tzoffset)).toISOString().slice(0, -1).replace("T"," ") + "'";
        var timeR = timeS1 + "AND" + timeE1; // Khoảng thời gian tìm kiếm (Time Range)
 
        var sqltable_Name = "plc_data"; // Tên bảng
        var dt_col_Name = "date_time";  // Tên cột thời gian
 
        var Query1 = "SELECT * FROM " + sqltable_Name + " WHERE "+ dt_col_Name + " BETWEEN ";
        var Query = Query1 + timeR + ";";
        
        sqlcon.query(Query, function(err, results, fields) {
            if (err) {
                console.log(err);
            } else {
                const objectifyRawPacket = row => ({...row});
                const convertedResponse = results.map(objectifyRawPacket);
                SQL_Excel = convertedResponse; // Xuất báo cáo Excel
                socket.emit('SQL_ByTime', convertedResponse);
            } 
        });
    });
});

// /////////////////////////////// BÁO CÁO EXCEL ///////////////////////////////
const Excel = require('exceljs');
const { CONNREFUSED } = require('dns');


function fn_excelExport(){
    // =====================CÁC THUỘC TÍNH CHUNG=====================
        // Lấy ngày tháng hiện tại
        let date_ob = new Date();
        let date = ("0" + date_ob.getDate()).slice(-2);
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        let year = date_ob.getFullYear();
        let hours = date_ob.getHours();
        let minutes = date_ob.getMinutes();
        let seconds = date_ob.getSeconds();
        let day = date_ob.getDay();
        var dayName = '';
        if(day == 0){dayName = 'Chủ nhật,'}
        else if(day == 1){dayName = 'Thứ hai,'}
        else if(day == 2){dayName = 'Thứ ba,'}
        else if(day == 3){dayName = 'Thứ tư,'}
        else if(day == 4){dayName = 'Thứ năm,'}
        else if(day == 5){dayName = 'Thứ sáu,'}
        else if(day == 6){dayName = 'Thứ bảy,'}
        else{};
    // Tạo và khai báo Excel
    let workbook = new Excel.Workbook()
    let worksheet =  workbook.addWorksheet('Báo cáo sản xuất', {
      pageSetup:{paperSize: 9, orientation:'landscape'},
      properties:{tabColor:{argb:'FFC0000'}},
    });
    // Page setup (cài đặt trang)
    worksheet.properties.defaultRowHeight = 20;
    worksheet.pageSetup.margins = {
      left: 0.3, right: 0.25,
      top: 0.75, bottom: 0.75,
      header: 0.3, footer: 0.3
    };
    // =====================THẾT KẾ HEADER=====================
    // Logo công ty
    const imageId1 = workbook.addImage({
        filename: 'public/images/Logo.png',
        extension: 'png',
      });
    worksheet.addImage(imageId1, 'A1:A4');
    // Thông tin công ty
    worksheet.getCell('B1').value = 'Công ty TNHH ABC';
    worksheet.getCell('B2').value = 'Địa chỉ: 123 Đường số 4, Phường 5, Quận 6, HCM';
    worksheet.getCell('B3').value = 'Hotline: +84 908 571 332';
    // Tên báo cáo
    worksheet.getCell('A5').value = 'BÁO CÁO SẢN XUẤT';
    worksheet.mergeCells('A5:F5');
    worksheet.getCell('A5').style = { font:{name: 'Times New Roman', bold: true,size: 16},alignment: {horizontal:'center',vertical: 'middle'}} ;
    // Ngày in biểu
    worksheet.getCell('F6').value = "Ngày in biểu: " + dayName + date + "/" + month + "/" + year + " " + hours + ":" + minutes + ":" + seconds;
    worksheet.getCell('F6').style = { font:{bold: false, italic: true},alignment: {horizontal:'right',vertical: 'bottom',wrapText: false}} ;
     
    // Tên nhãn các cột
    var rowpos = 7;
    var collumName = ["STT","Thời gian", "Số phôi", "Số lỗ", "Ghi chú"]
    worksheet.spliceRows(rowpos, 1, collumName);
    
    // =====================XUẤT DỮ LIỆU EXCEL SQL=====================
    // Dump all the data into Excel
    var rowIndex = 0;
    SQL_Excel.forEach((e, index) => {
    // row 1 is the header.
    rowIndex =  index + rowpos;
    // worksheet1 collum
    worksheet.columns = [
          {key: 'STT'},
          {key: 'date_time'},
          {key: 'data_Billet'},
          {key: 'data_Hole'},
        ]
    worksheet.addRow({
          STT: {
            formula: index + 1
          },
          ...e
        })
    })

     // Lấy tổng số hàng
     const totalNumberOfRows = worksheet.rowCount; 
     // Tính tổng
     worksheet.addRow([
         'Tổng cộng:',
         '',
       {formula: `=sum(C${rowpos + 1}:C${totalNumberOfRows})`},
       {formula: `=sum(D${rowpos + 1}:D${totalNumberOfRows})`},
     ])
     // Style cho hàng total (Tổng cộng)
     worksheet.getCell(`A${totalNumberOfRows+1}`).style = { font:{bold: true,size: 12},alignment: {horizontal:'center',}} ;
     // Tô màu cho hàng total (Tổng cộng)
     const total_row = ['A','B', 'C', 'D', 'E']
     total_row.forEach((v) => {
         worksheet.getCell(`${v}${totalNumberOfRows+1}`).fill = {type: 'pattern',pattern:'solid',fgColor:{ argb:'f2ff00' }}
 })
   
    
    // Style các cột
    const HeaderStyle = ['A','B', 'C', 'D', 'E']
    HeaderStyle.forEach((v) => {
        worksheet.getCell(`${v}${rowpos}`).style = { font:{bold: true},alignment: {horizontal:'center',vertical: 'middle',wrapText: true}} ;
        worksheet.getCell(`${v}${rowpos}`).border = {
          top: {style:'thin'},
          left: {style:'thin'},
          bottom: {style:'thin'},
          right: {style:'thin'}
        }
    })
    // Cài đặt độ rộng cột
    worksheet.columns.forEach((column, index) => {
        column.width = 15;
    })
    // Set width header
    worksheet.getColumn(2).width = 20;
    worksheet.getColumn(3).width = 12;
    worksheet.getColumn(4).width = 12;
    worksheet.getColumn(5).width = 20;

     // ++++++++++++Style cho các hàng dữ liệu++++++++++++
     worksheet.eachRow({ includeEmpty: true }, function (row, rowNumber) {
        var datastartrow = rowpos;
        var rowindex = rowNumber + datastartrow;
        const rowlength = datastartrow + SQL_Excel.length
        if(rowindex >= rowlength+1){rowindex = rowlength+1}
        const insideColumns = ['A','B', 'C', 'D', 'E']
      // Tạo border
        insideColumns.forEach((v) => {
            // Border
          worksheet.getCell(`${v}${rowindex}`).border = {
            top: {style: 'thin'},
            bottom: {style: 'thin'},
            left: {style: 'thin'},
            right: {style: 'thin'}
          },
          // Alignment
          worksheet.getCell(`${v}${rowindex}`).alignment = {horizontal:'center',vertical: 'middle',wrapText: true}
        })
      })

      // =====================THẾT KẾ FOOTER=====================
    worksheet.getCell(`F${totalNumberOfRows+2}`).value = 'Ngày …………tháng ……………năm 20………';
    worksheet.getCell(`F${totalNumberOfRows+2}`).style = { font:{bold: true, italic: false},alignment: {horizontal:'right',vertical: 'middle',wrapText: false}} ;
     
    worksheet.getCell(`B${totalNumberOfRows+3}`).value = 'Giám đốc';
    worksheet.getCell(`B${totalNumberOfRows+4}`).value = '(Ký, ghi rõ họ tên)';
    worksheet.getCell(`B${totalNumberOfRows+3}`).style = { font:{bold: true, italic: false},alignment: {horizontal:'center',vertical: 'bottom',wrapText: false}} ;
    worksheet.getCell(`B${totalNumberOfRows+4}`).style = { font:{bold: false, italic: true},alignment: {horizontal:'center',vertical: 'top',wrapText: false}} ;
     
    worksheet.getCell(`D${totalNumberOfRows+3}`).value = 'Trưởng ca';
    worksheet.getCell(`D${totalNumberOfRows+4}`).value = '(Ký, ghi rõ họ tên)';
    worksheet.getCell(`D${totalNumberOfRows+3}`).style = { font:{bold: true, italic: false},alignment: {horizontal:'center',vertical: 'bottom',wrapText: false}} ;
    worksheet.getCell(`D${totalNumberOfRows+4}`).style = { font:{bold: false, italic: true},alignment: {horizontal:'center',vertical: 'top',wrapText: false}} ;
     
    worksheet.getCell(`F${totalNumberOfRows+3}`).value = 'Người in biểu';
    worksheet.getCell(`F${totalNumberOfRows+4}`).value = '(Ký, ghi rõ họ tên)';
    worksheet.getCell(`F${totalNumberOfRows+3}`).style = { font:{bold: true, italic: false},alignment: {horizontal:'center',vertical: 'bottom',wrapText: false}} ;
    worksheet.getCell(`F${totalNumberOfRows+4}`).style = { font:{bold: false, italic: true},alignment: {horizontal:'center',vertical: 'top',wrapText: false}} ;
  
     
    ///// =====================THỰC HIỆN XUẤT DỮ LIỆU EXCEL=====================///
    // Export Link
    var currentTime = year + "_" + month + "_" + date + "_" + hours + "h" + minutes + "m" + seconds + "s";
    var saveasDirect = "Report/Report_" + currentTime + ".xlsx";
    SaveAslink = saveasDirect; // Send to client
    var booknameLink = "public/" + saveasDirect;
     
    var Bookname = "Report_" + currentTime + ".xlsx";
    // Write book name
    workbook.xlsx.writeFile(booknameLink)
     
    // Return
    return [SaveAslink, Bookname]
} // Đóng fn_excelExport

// =====================TRUYỀN NHẬN DỮ LIỆU VỚI TRÌNH DUYỆT=====================
// Truyền nhận dữ liệu với trình duyệt để xuất excel
io.on("connection", function(socket){
    socket.on("msg_Excel_Report", function(data)
    {
        const [SaveAslink1, Bookname] = fn_excelExport();
        var data = [SaveAslink1, Bookname];
        socket.emit('send_Excel_Report', data);
    });
});

// /////////////////////////////// CẢNH BÁO ///////////////////////////////
// Hàm thêm cảnh báo mới
function fn_sql_alarm_insert(ID, AlarmName){
    var sqltable_Name = "alarm";
    // Lấy thời gian hiện tại
    var tzoffset = (new Date()).getTimezoneOffset() * 60000; // Vùng Việt Nam (GMT7+)
    var temp_datenow = new Date();
 var timeNow = (new Date(temp_datenow - tzoffset)).toISOString().slice(0, -1).replace("T"," ");
    var timeNow_toSQL = "'" + timeNow + "',";
 
    // Dữ liệu trạng thái báo cáo
    var data_1 = "'" + ID + "',";
    var data_2 = "'" + AlarmName + "'";
    // Thêm cảnh báo vào SQL
    var str1 = "INSERT INTO " + sqltable_Name + " (date_time, ID, AlarmName) VALUES (";
    var str2 = timeNow_toSQL 
                + data_1 
                + data_2
                ;
    var str = str1 + str2 + ");";
    // Ghi dữ liệu cảnh báo vào SQL
    sqlcon.query(str, function (err, result) {
        if (err) {console.log(err);} else {}
    });
}

// Tạo biến báo đã ghi xong cảnh báo vào SQL
var Alarm_ID1_aldone = false;       
   
// Hàm chức năng insert Alarm // sử dụng cho 3 cảnh báo
function fn_Alarm_Manage(){
    var Alarm_ID1 = tagArr[50];      // Quét trigger alarm ID1
    var Alarm_Code = tagArr[49]
   
    if(Alarm_ID1 == true & Alarm_Code == 500 & Alarm_ID1 != Alarm_ID1_aldone){
        fn_sql_alarm_insert("500", "Xi lanh 1 không đẩy ra")
        console.log('cảnh báo đã được ghi')
    }
    if(Alarm_ID1 == true & Alarm_Code == 501 & Alarm_ID1 != Alarm_ID1_aldone){
        fn_sql_alarm_insert("501", "Xi lanh 1 không lui về")
    }
    if(Alarm_ID1 == true & Alarm_Code == 502 & Alarm_ID1 != Alarm_ID1_aldone){
        fn_sql_alarm_insert("502", "Xi lanh 2 không đẩy ra")
        console.log('cảnh báo đã được ghi')
    }
    if(Alarm_ID1 == true & Alarm_Code == 503 & Alarm_ID1 != Alarm_ID1_aldone){
        fn_sql_alarm_insert("503", "Xi lanh 2 không lui về")
    }
    if(Alarm_ID1 == true & Alarm_Code == 504 & Alarm_ID1 != Alarm_ID1_aldone){
        fn_sql_alarm_insert("504", "Xi lanh 3 không đẩy ra")
        console.log('cảnh báo đã được ghi')
    }
    if(Alarm_ID1 == true & Alarm_Code == 505 & Alarm_ID1 != Alarm_ID1_aldone){
        fn_sql_alarm_insert("505", "Xi lanh 3 không lui về")
    }
    if(Alarm_ID1 == true & Alarm_Code == 506 & Alarm_ID1 != Alarm_ID1_aldone){
        fn_sql_alarm_insert("506", "Xi lanh 4 không đẩy ra")
        console.log('cảnh báo đã được ghi')
    }
    if(Alarm_ID1 == true & Alarm_Code == 507 & Alarm_ID1 != Alarm_ID1_aldone){
        fn_sql_alarm_insert("507", "Xi lanh 4 không lui về")
    }
    if(Alarm_ID1 == true & Alarm_Code == 508 & Alarm_ID1 != Alarm_ID1_aldone){
        fn_sql_alarm_insert("508", "Cảm biến an toàn phát hiện vật")
    }
    Alarm_ID1_aldone = Alarm_ID1; 
}

// Đọc thị dữ liệu Cảnh báo
io.on("connection", function(socket){
    socket.on("msg_Alarm_Show", function()
    {
        var sqltable_Name = "alarm";
        var query = "SELECT * FROM " + sqltable_Name ; 
        sqlcon.query(query, function(err, results) {
            if (err) {
                console.log(err);
            } else {
                const objectifyRawPacket = row => ({...row});
                const convertedResponse = results.map(objectifyRawPacket);
                socket.emit('Alarm_Show', convertedResponse);
            } 
        });
    });
});

// Tìm kiếm báo cáo theo khoảng thời gian
io.on("connection", function(socket){
    socket.on("msg_Alarm_ByTime", function(data)
    {
        var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset time Việt Nam (GMT7+)
        // Lấy thời gian tìm kiếm từ date time piker
        var timeS = new Date(data[0]); // Thời gian bắt đầu
        var timeE = new Date(data[1]); // Thời gian kết thúc
        // Quy đổi thời gian ra định dạng cua MySQL
        var timeS1 = "'" + (new Date(timeS - tzoffset)).toISOString().slice(0, -1).replace("T"," ") + "'";
        var timeE1 = "'" + (new Date(timeE - tzoffset)).toISOString().slice(0, -1).replace("T"," ") + "'";
        var timeR = timeS1 + "AND" + timeE1; // Khoảng thời gian tìm kiếm (Time Range)
 
        var sqltable_Name = "alarm"; // Tên bảng
        var dt_col_Name = "date_time";  // Tên cột thời gian
 
        var Query1 = "SELECT * FROM " + sqltable_Name + " WHERE "+ dt_col_Name + " BETWEEN ";
        var Query = Query1 + timeR + ";";
        
        sqlcon.query(Query, function(err, results, fields) {
            if (err) {
                console.log(err);
            } else {
                const objectifyRawPacket = row => ({...row});
                const convertedResponse = results.map(objectifyRawPacket);
                socket.emit('Alarm_ByTime', convertedResponse);
            } 
        });
    });
});
