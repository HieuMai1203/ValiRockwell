
const { Socket } = require("socket.io");

function fn_SaveDataTrafficLights()
{  var confirmTag = true;
    sendData(confirmTag);

    confirmTag = false;
    setTimeout(function() {  
        sendData(confirmTag);
    }, 100);

}

// Gửi dữ liệu lên Socket  
function sendData(Tag){
    var Traffic_lights_data = [document.getElementById('Time_Red_Setting').value,
    document.getElementById('Time_Yellow_Setting').value,
    document.getElementById('Time_Green_Setting').value,
    Tag  ];

    
    
    if (Tag == true) 
    {
        for (let i = 0; i < 3; i++) {
          if (Traffic_lights_data[i] == 0 || Traffic_lights_data[i] == "" || isNaN(parseInt(Traffic_lights_data[i]))) {
            alert('Dữ liệu nhập vào không hợp lệ');
            return;
          }
          
        }
        // Gửi dữ liệu đến socket và in ra thông báo nếu thành công
            socket.emit('cmd_Traffic_Lights_data', Traffic_lights_data);
            alert('Dữ liệu đã được lưu');
    } 
    else 
    {
        for (let i = 0; i < 3; i++) {
          if (Traffic_lights_data[i] == 0 || Traffic_lights_data[i] == "" || isNaN(parseInt(Traffic_lights_data[i]))) {
            return;
          }
        }
        // Gửi dữ liệu đến socket nếu không có lỗi
        socket.emit('cmd_Traffic_Lights_data', Traffic_lights_data);
      
    }
}

