document.addEventListener("DOMContentLoaded", () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;

    if (day === 2 && month === 8) {
        document.getElementById("header").innerText = "It is Gekara's Birthday!";
    }
});
