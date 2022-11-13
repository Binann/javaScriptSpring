//bai 1
let a = prompt('nhap mot chuoi (bai 1)');

function uppcase(c) {
    var b = c.toLowerCase().split(" ");
    for (var i = 0; i < b.length; i++) {
        b[i] = b[i][0].toUpperCase() + b[i].slice(1);
    }

    return b.join(" ");
}
document.write(uppcase(a))








