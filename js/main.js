//bai 1
let a = prompt('nhap mot chuoi (bai 1)');

function uppcase(c) {
    var b = c.toLowerCase().split(" ");
    for (var i = 0; i < b.length; i++) {
        b[i] = b[i][0].toUpperCase() + b[i].slice(1);
    }

    return b.join(" ");
}
document.write(uppcase("bai 1"))
document.write(uppcase(a))

//bai 2 

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


//bai3 

let e = prompt('nhap mot chuoi (bai 3)');

function uppcase(e) {
    if (e.length > 2) {
        if (e.slice(e.length - 3) === 'ing') {
            e = e + 'ly'
        } else {
            e = e + 'ing'
        }
    }
    return e;
}

document.write(uppcase(e))





