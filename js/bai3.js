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