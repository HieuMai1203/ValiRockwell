///////////////////////// Nút nhấn màn hình giám sát đèn giao thông/////////////////////////
function fn_ControlTrafficLightsStart(){
    {  
        socket.emit('cmd_Traffic_Lights_control_Start', true);
    
       
        setTimeout(function() {  
            socket.emit('cmd_Traffic_Lights_control_Start', false);
        }, 1000);
    
    }
}

function fn_ControlTrafficLightsStop(){
    {  
        socket.emit('cmd_Traffic_Lights_control_Stop', true);
    
        
        setTimeout(function() {  
            socket.emit('cmd_Traffic_Lights_control_Stop', false);
        }, 1000);
    
    }
}
///////////////////////// Nút nhấn màn hình giám sát biến tần/////////////////////////
function fn_ControlInverterStart(){
    {  
        socket.emit('cmd_Inverter_control_Start', true);
    
        
        setTimeout(function() {  
            socket.emit('cmd_Inverter_control_Start', false);
        }, 1000);
    
    }
}

function fn_ControlInverterStop(){
    {  
        socket.emit('cmd_Inverter_control_Stop', true);
    
        
        setTimeout(function() {  
            socket.emit('cmd_Inverter_control_Stop', false);
        }, 1000);
    
    }
}

function fn_ControlInverterFwd(){
    {  
        socket.emit('cmd_Inverter_control_Fwd', true);
    
        
        setTimeout(function() {  
            socket.emit('cmd_Inverter_control_Fwd', false);
        }, 1000);
    
    }
}

function fn_ControlInverterRev(){
    {  
        socket.emit('cmd_Inverter_control_Rev', true);
    
        
        setTimeout(function() {  
            socket.emit('cmd_Inverter_control_Rev', false);
        }, 1000);
    
    }
}

// Gửi dữ liệu bt biến tần có sẵn lên Socket  
function fn_SaveDataInverterPreset(SpeedValue)
{   var confirmTag = true;
    var Speed = parseInt(SpeedValue)
    var Inverter_data = [Speed,
  confirmTag ]; 
  
  
  socket.emit('cmd_Inverter_data', Inverter_data);

  confirmTag = false;
  setTimeout(function() {  
    socket.emit('cmd_Inverter_data', Inverter_data);
  }, 1000);

}

///////////////////////// Nút nhấn màn hình giám sát khoan phôi /////////////////////////
function fn_ControlBilletStart(){
    {  
        socket.emit('cmd_Billet_control_Start', true);

        
        setTimeout(function() {  
            socket.emit('cmd_Billet_control_Start', false);
        }, 1000);
    
    }
}

function fn_ControlBilletStop(){
    {  
        socket.emit('cmd_Billet_control_Stop', true);
    
        
        setTimeout(function() {  
            socket.emit('cmd_Billet_control_Stop', false);
        }, 1000);
    
    }
}

function fn_ControlBilletPause(){
    {  
        socket.emit('cmd_Billet_control_Pause', true);
    
        
        setTimeout(function() {  
            socket.emit('cmd_Billet_control_Pause', false);
        }, 1000);
    
    }
}

