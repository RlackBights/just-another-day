const dvd = document.getElementById("DVD")
let moveDir = { x: 3, y: 3};
console.log(dvd)

function move() {
    console.log(dvd.clientWidth);
    dvd.style.top = `${Number.parseInt(dvd.style.top) + moveDir.y}px`;
    dvd.style.left = `${Number.parseInt(dvd.style.left) + moveDir.x}px`
    if (Number.parseInt(dvd.style.top) < 0) {
        moveDir.y *= -1;
        dvd.style.top = "0px";
    } else if (Number.parseInt(dvd.style.top) > innerHeight - dvd.clientHeight) {
        moveDir.y *= -1;
        dvd.style.top = `${innerHeight - dvd.clientHeight}px`;
    }

    if (Number.parseInt(dvd.style.left) < 0) {
        moveDir.x *= -1;
        dvd.style.left = "0px";
    } else if (Number.parseInt(dvd.style.left) > innerWidth - dvd.clientWidth) {
        moveDir.x *= -1;
        dvd.style.left = `${innerWidth - dvd.clientWidth}px`;
    }
    requestAnimationFrame(move);
}

move();