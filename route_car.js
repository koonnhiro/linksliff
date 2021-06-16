$(function () {
    // カレンダー
    $(function () {
        $('input[name="date"]').datepicker({
            dateFormat: 'yy/mm/dd',
        });
    });

    // 送信
    $('form').submit(function () {
        var date = $('input[name="date"]').val();
        var type = $('input[name="type"]:checked').val();
        var from = $('input[name="from"]').val();
        var to = $('input[name="to"]').val();
        var price = $('input[name="distance"]').val();
        var sum;

        // 往復の場合
        if (type === "往復") {
            sum = distance * 2;
        } else {
            sum = distance;
        }

        var msg = `【車】\n日付：${date}\n区分：${type}\n出発：${from}\n到着：${to}\n金額：${price}円\n合計：${sum}km`;
        sendText(msg);
        //console.log(msg);

        return false;
    });
});