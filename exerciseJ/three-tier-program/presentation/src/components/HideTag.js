export function hideTag() {
    let x = document.getElementById("studentHide");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}