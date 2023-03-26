// Danh sách người dùng
var admin = ["Hieu","1"]
var user1 = ["Khoa","2"]
var user2 = ["ThayHuy","3"]

// Chương trình con
function login()
{
    var a = document.getElementById("inputuser").value;
    var b = document.getElementById("inputpass").value;
    // Admin
    if (a == admin[0] && b == admin[1])
    {
        fn_ScreenChange('Screen_Monitor','Screen_Setting','Screen_Report','Screen_Alarm','Screen_History','btt_Monitor','btt_Setting','btt_Report','btt_Alarm','btt_History');
        document.getElementById('id01').style.display='none';
    }
    // User 1
    else if (a == user1[0] && b == user1[1])
    {
        fn_ScreenChange('Screen_Monitor','Screen_Setting','Screen_Report','Screen_Alarm','Screen_History','btt_Monitor','btt_Setting','btt_Report','btt_Alarm','btt_History');
        document.getElementById('id01').style.display='none';
        document.getElementById("btt_Setting").disabled = true;
    }
    // User 2
    else if (a == user2[0] && b == user2[1])
    {
        fn_ScreenChange('Screen_Monitor','Screen_Setting','Screen_Report','Screen_Alarm','Screen_History','btt_Monitor','btt_Setting','btt_Report','btt_Alarm','btt_History');
        document.getElementById('id01').style.display='none';
        document.getElementById("btt_Setting").disabled = true;
        document.getElementById("btt_Report").disabled = true;
    } 
    else
    {
        window.location.href = '';
    }
}
function logout() // Ctrinh login
{
    alert("Đăng xuất thành công");
    window.location.href = 'Dev_by_Ngocautomation.com_hot_line_0946463905';
}