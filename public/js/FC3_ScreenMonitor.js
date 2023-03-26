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