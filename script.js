document.getElementById("popup-close-id").addEventListener("click", function(event) {
    document.getElementById("popup-id").style.display = "none";
});

document.querySelector("[name='popup-out']").addEventListener("click", function(event) {
    document.getElementById("popup-id").style.display = "none";
});

document.querySelector("[name='popup-in']").addEventListener("click", function(event) {
    document.getElementById("popup-id").style.display = "block";
});