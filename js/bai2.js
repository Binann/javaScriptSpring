let d = prompt('nhap mot chuoi (bai 2)');

function uppcase(c) {
    var b = c.toLowerCase().split(" ");
    for (var i = 0; i < b.length; i++) {
        b[i] = b[i].replace(/a/g, '4')
        b[i] = b[i].replace(/e/g, '3')
        b[i] = b[i].replace(/i/g, '1')
        b[i] = b[i].replace(/o/g, '0')
        b[i] = b[i].replace(/s/g, '5')
    }

    return b.join(" ");
}

document.write(uppcase(d))