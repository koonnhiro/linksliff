$(function () {

    // 送信
    $('form').submit(function () {
        var client = $('input[name="client"]').val();
        var anken = $('input[name="anken"]').val();

        var msg = `【案件登録】\nクライアント名：${client}\n案件名：${anken}`;
        sendText(msg);

        return false;
    });
});
