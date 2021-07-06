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
