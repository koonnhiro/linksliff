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

        var msg = `日付：${date}\n区分：${type}\n出発：${from}\n到着：${to}`;
        sendText(msg);

        return false;
    });
});
