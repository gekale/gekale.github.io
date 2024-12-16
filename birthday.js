var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1;
if (day == 2 && month == 8) {
    document.getElementById('header').innerText = "It is Gekara's Birthday!";
}
