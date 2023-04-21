
const { Socket } = require("socket.io");

// Gửi dữ liệu bt đèn giao thông lên Socket  
function fn_SaveDataTrafficLights()
{  var confirmTag = true;
    sendDataTraffic(confirmTag);

    confirmTag = false;
    setTimeout(function() {  
        sendDataTraffic(confirmTag);
    }, 1000);

}

// Gửi dữ liệu bt đèn giao thông lên Socket  
function sendDataTraffic(Tag){
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


// Gửi dữ liệu bt biến tần lên Socket  
function fn_SaveDataInverter()
{  var confirmTag = true;
    sendDataInverter(confirmTag);

    confirmTag = false;
    setTimeout(function() {  
        sendDataInverter(confirmTag);
    }, 100);

}

// Gửi dữ liệu bt biến tần lên Socket  
function sendDataInverter(Tag){
    var Inverter_data = [document.getElementById('Speed_Setting').value,
    Tag  ];

    
    if (Tag == true) 
    {
      
          if (Inverter_data[0] == 0 || Inverter_data[0] == "" || isNaN(parseInt(Inverter_data[0]))) {
            alert('Dữ liệu nhập vào không hợp lệ');
            return;
          }
          // Gửi dữ liệu đến socket và in ra thông báo nếu thành công
          socket.emit('cmd_Inverter_data', Inverter_data);
          alert('Dữ liệu đã được lưu');
    } 
    else 
    {
          if (Inverter_data[0] == 0 || Inverter_data[0] == "" || isNaN(parseInt(Inverter_data[0]))) {
            return;
          }
        // Gửi dữ liệu đến socket nếu không có lỗi
        socket.emit('cmd_Inverter_data', Inverter_data);
      
    }
}


// Gửi dữ liệu bt khoan phôi lên Socket  
function fn_SaveDataBillet()
{  var confirmTag = true;
    sendDataBillet(confirmTag);

    confirmTag = false;
    setTimeout(function() {  
        sendDataBillet(confirmTag);
    }, 100);

}

// Gửi dữ liệu bt khoan phôi lên Socket  
function sendDataBillet(Tag){
    var Billet_data = [document.getElementById('Billet_Setting').value,
    document.getElementById('Hole_Setting').value,
    Tag  ];

    
    
    if (Tag == true) 
    {
        for (let i = 0; i < 2; i++) {
          if (Billet_data[i] == 0 || Billet_data[i] == "" || isNaN(parseInt(Billet_data[i]))) {
            alert('Dữ liệu nhập vào không hợp lệ');
            return;
          }
          
        }
        // Gửi dữ liệu đến socket và in ra thông báo nếu thành công
            socket.emit('cmd_Billet_data', Billet_data);
            alert('Dữ liệu đã được lưu');
    } 
    else 
    {
        for (let i = 0; i < 2; i++) {
          if (Billet_data[i] == 0 || Billet_data[i] == "" || isNaN(parseInt(Billet_data[i]))) {
            return;
          }
        }
        // Gửi dữ liệu đến socket nếu không có lỗi
        socket.emit('cmd_Billet_data', Traffic_lights_data);
      
    }
}




