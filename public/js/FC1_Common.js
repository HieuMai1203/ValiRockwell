// Chương trình con chuyển trang
function fn_ScreenChange(scr_1, scr_2,scr_3,scr_4,scr_5,scr_6,btn_1,btn_2,btn_3,btn_4,btn_5,btn_6)
{
    document.getElementById(scr_1).style.display = 'inline';   // Hiển thị trang được chọn
    document.getElementById(scr_2).style.display = 'none';    // Ẩn trang 2
    document.getElementById(scr_3).style.display = 'none';    // Ẩn trang 3
    document.getElementById(scr_4).style.display = 'none';    // Ẩn trang 4
    document.getElementById(scr_5).style.display = 'none';    // Ẩn trang 5
    document.getElementById(scr_6).style.display = 'none';    // Ẩn trang 5
   
    document.getElementById(btn_1).style.backgroundColor=" #ecf0f1";
    document.getElementById(btn_1).style.color="rgb(40, 58, 107)";
    document.getElementById(btn_2).style.backgroundColor="rgb(40, 58, 107)";
    document.getElementById(btn_2).style.color=" #ecf0f1";
    document.getElementById(btn_3).style.backgroundColor="rgb(40, 58, 107)";
    document.getElementById(btn_3).style.color=" #ecf0f1";
    document.getElementById(btn_4).style.backgroundColor="rgb(40, 58, 107)";
    document.getElementById(btn_4).style.color=" #ecf0f1";
    document.getElementById(btn_5).style.backgroundColor="rgb(40, 58, 107)";
    document.getElementById(btn_5).style.color=" #ecf0f1";
    document.getElementById(btn_6).style.backgroundColor="rgb(40, 58, 107)";
    document.getElementById(btn_6).style.color=" #ecf0f1";
}
function fn_ScreenChange_Sub(scr_1, scr_2,scr_3,btn_1,btn_2,btn_3)
{
    document.getElementById(scr_1).style.display = 'inline';   // Hiển thị trang được chọn
    document.getElementById(scr_2).style.display = 'none';    // Ẩn trang 2
    document.getElementById(scr_3).style.display = 'none';    // Ẩn trang 2
   
    document.getElementById(btn_1).style.backgroundColor=" #ecf0f1";
    document.getElementById(btn_1).style.color="rgb(40, 58, 107)";

    document.getElementById(btn_2).style.backgroundColor="rgb(40, 58, 107)";
    document.getElementById(btn_2).style.color=" #ecf0f1";

    document.getElementById(btn_3).style.backgroundColor="rgb(40, 58, 107)";
    document.getElementById(btn_3).style.color=" #ecf0f1";
    
}

////////////// YÊU CẦU DỮ LIỆU TỪ SERVER- REQUEST DATA //////////////
var myVar = setInterval(myTimer, 100);
function myTimer() {
    socket.emit("Client-send-data", "Request data client"); ///Title: Client-send-data ; content: Request data client
}
 
//Hàm hiển thị dữ liệu lên IO Field
function fn_IOFieldDataShow(tag, IOField, tofix){
    socket.on(tag,function(data){
        if(tofix == 0){
        document.getElementById(IOField).value = data; 
        } else{
        document.getElementById(IOField).value = data.toFixed(tofix);
        }
    });
}

// Hàm chức năng hiển thị trạng thái symbol
function fn_SymbolStatus(ObjectID, SymName, Tag)
{

    var imglink_0 = "images/traffic_lights/" + SymName + "_0.png" ; // Trạng thái tag = 0
    var imglink_1 = "images/traffic_lights/" + SymName + "_1.png" ; // Trạng thái tag = 1
    
    socket.on(Tag, function(data){
        if (data == 1)
        {
            document.getElementById(ObjectID).src = imglink_1;
        }
        else
        {
            document.getElementById(ObjectID).src = imglink_0;
        }
    });
}

function fn_7segmentDisplay(ObjectID,SymName,Tag,index){ 
    var imglink_0 = "images/traffic_lights/" + SymName + "_Off.png" ; // Trạng thái tag = 0
    var imglink_1 = "images/traffic_lights/" + SymName + "_On.png" ; // Trạng thái tag = 0

    socket.on(Tag,function(data){
        var binaryString = data.toString(2).padStart(7,'0');
        if(binaryString[index] === "1"){
            document.getElementById(ObjectID).src=imglink_1;
        }
        else {
            document.getElementById(ObjectID).src=imglink_0;
        }
       
    }
);}

   

