// Function for 'Read More' in the Java Developer section
function toggleReadMore() {
    const extraText = document.getElementById("extra-java");
    const btnText = document.querySelector("#java-service .read-more");

    if (extraText.style.display === "none") {
        extraText.style.display = "block";
        btnText.innerHTML = "Read Less";
    } else {
        extraText.style.display = "none";
        btnText.innerHTML = "Read More";
    }
}
