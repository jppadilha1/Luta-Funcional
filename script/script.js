const p1 = youngerBrother();
const p2 = middleBrother();

stage.start(
    p1,
    p2,
    document.querySelector("#brother1"),
    document.querySelector("#brother2")
);

function reload() {
    window.location.reload();
}