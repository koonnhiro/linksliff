function changeDisplay() {
    // 車の場合
    if ( document.Form1["vehicle"][2].checked ) {
        document.getElementById('display-text1').style.display = "none";
        document.getElementById('display-text2').style.display = "inline";
    // 電車・バスの場合
    } else {
        document.getElementById('display-text1').style.display = "inline";
        document.getElementById('display-text2').style.display = "none";
    }
}
window.onload = changeDisplay;

$(function () {

    // 送信
    $('form').submit(function () {
        var vehicle = $('input[name="vehicle"]:checked').val();
        var type = $('input[name="type"]:checked').val();
        var from = $('input[name="from"]').val();
        var to = $('input[name="to"]').val();
        var price = $('input[name="price"]').val();

        var msg = `【お気に入り】\n乗り物：${vehicle}\n種類：${type}\n出発：${from}\n到着：${to}\n片道金額・距離：${price}`;
        sendText(msg);

        return false;
    });
});
