$(function () {
    // カレンダー
    $(function () {
        $('input[name="date"]').datepicker({
            dateFormat: 'yy/m/d',
        });
    });

    // 送信
    $('form').submit(function () {
        var date = $('input[name="date"]').val();
        var type = $('input[name="type"]:checked').val();
        var from = $('input[name="from"]').val();
        var to = $('input[name="to"]').val();
        var distance = $('input[name="distance"]').val();
        var price = Math.floor(distance * 14;
        var sum;

        // 往復の場合
        if (type === "往復") {
            sum = price * 2;
            distance = distance * 2;
        } else {
            sum = price;
        }

        var msg = `【車】\n日付：${date}\n区分：${type}\n出発：${from}\n到着：${to}\n距離：${distance}\n金額：${price}円\n合計：${sum}円`;
        sendText(msg);
        //console.log(msg);

        return false;
    });
});
