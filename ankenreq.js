$(function () {

    // 送信
    $('form').submit(function () {
        var from = $('input[name="from"]').val();
        var to = $('input[name="to"]').val();

        var msg = `【案件登録】\nクライアント名：${from}\n案件名：${to}`;
        sendText(msg);

        return false;
    });
});
