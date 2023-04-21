// Danh sách người dùng
var admin = ["Hieu","169"]
var user1 = ["Khoa","257"]
var user2 = ["Guest","333"]

// Chương trình con
function login()
{
    var a = document.getElementById("inputuser").value;
    var b = document.getElementById("inputpass").value;
    // Admin
    if (a == admin[0] && b == admin[1])
    {
        fn_ScreenChange('Screen_Introduction','Screen_History','Screen_Monitor','Screen_Setting','Screen_Alarm','btt_Introduction','btt_History','btt_Monitor','btt_Setting','btt_Alarm');
        document.getElementById('id01').style.display='none';
    }
    // User 1
    else if (a == user1[0] && b == user1[1])
    {
        fn_ScreenChange('Screen_Introduction','Screen_History','Screen_Monitor','Screen_Setting','Screen_Alarm','btt_Introduction','btt_History','btt_Monitor','btt_Setting','btt_Alarm');
        document.getElementById('id01').style.display='none';
        document.getElementById("btt_History").disabled = true;
        document.getElementById("btt_Alarm").disabled = true;
    }
    // User 2
    else if (a == user2[0] && b == user2[1])
    {
        fn_ScreenChange('Screen_Introduction','Screen_History','Screen_Monitor','Screen_Setting','Screen_Alarm','btt_Introduction','btt_History','btt_Monitor','btt_Setting','btt_Alarm');
        document.getElementById('id01').style.display='none';
        document.getElementById("btt_History").disabled = true;
        document.getElementById("btt_Setting").disabled = true;
        document.getElementById("btt_Alarm").disabled = true;
    } 
    else
    {
        window.location.href = '';
    }
}

function logout() // Ctrinh login
{
    alert("Đăng xuất thành công");
    window.location.href = 'YouHaveJustLogout-Contactme-0908571332';
}