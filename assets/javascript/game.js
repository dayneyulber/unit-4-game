$(document).ready(function () {
    var wins = 0;
    var losses = 0;
    var total = 0;

    var rock1 = Math.floor(Math.random() * 12) + 1;

    var rock2 = Math.floor(Math.random() * 12) + 1;

    var rock3 = Math.floor(Math.random() * 12) + 1;

    var rock4 = Math.floor(Math.random() * 12) + 1;

    var randomNumber = Math.floor(Math.random() * 102) + 19;
    console.log(randomNumber);
    $("#randomNumber").text(randomNumber);

    function reset() {
        randomNumber = Math.floor(Math.random() * 102) + 19;
        console.log(randomNumber);
        $("#randomNumber").text(randomNumber);
        total = 0;
        $("#finalTotal").text(total);
        rock1 = Math.floor(Math.random() * 12) + 1;
        console.log(rock1);
        rock2 = Math.floor(Math.random() * 12) + 1;
        console.log(rock2);
        rock3 = Math.floor(Math.random() * 12) + 1;
        console.log(rock3);
        rock4 = Math.floor(Math.random() * 12) + 1;
        console.log(rock4);
    };
    $(".one").on("click", function () {
        total = total + rock1;
        $('#finalTotal').text(total);
        if (total == randomNumber) {
            wins++;
            $("#wins").text(wins);
            alert("You're a winner!!!!!!!!");
            reset();
        } else if (total > randomNumber) {
            losses++;
            $("#losses").text(losses);
            alert("You're a loser........");
            reset();
        };
    });

    $(".two").on("click", function () {
        total = total + rock2;
        $('#finalTotal').text(total);
        if (total == randomNumber) {
            wins++;
            $("#wins").text(wins);
            alert("You're a winner!!!!!!!!");
            reset();
        } else if (total > randomNumber) {
            losses++;
            $("#losses").text(losses);
            alert("You're a loser........");
            reset();
        };
    });

    $(".three").on("click", function () {
        total = total + rock3;
        $('#finalTotal').text(total);
        if (total == randomNumber) {
            wins++;
            $("#wins").text(wins);
            alert("You're a winner!!!!!!!!");
            reset();
        } else if (total > randomNumber) {
            losses++;
            $("#losses").text(losses)
            alert("You're a loser........");
            reset();
        };
    });
    $(".four").on("click", function () {
        total = total + rock4;
        $('#finalTotal').text(total);
        if (total == randomNumber) {
            wins++;
            $("#wins").text(wins);
            alert("You're a winner!!!!!!!!");
            reset();
        } else if (total > randomNumber) {
            losses++;
            $("#losses").text(losses);
            alert("You're a loser........");
            reset();
        };
    });
});
