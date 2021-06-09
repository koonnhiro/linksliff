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
        var from = $('input[name="from"]:checked').val();
        var to = $('input[name="to"]:checked').val();

        var msg = `希望日：${date}\n区分：${type}\n出発：${from}\n到着：${to}`;
        sendText(msg);

        return false;
    });
});
