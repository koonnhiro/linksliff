$(function () {

    // 送信
    $('form').submit(function () {
        var client = $('input[name="client"]').val();
        var anken = $('input[name="anken"]').val();

        var msg = `【位置情報】\nクライアント名：${client}\n案件名：${anken}`;
        sendText(msg);

        return false;
    });
});