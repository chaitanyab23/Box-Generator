let button = document.getElementById('theBoxes');
button.addEventListener("click", myFunction);

var oldvalue = 0;
var i = 1;

function myFunction() {
    let n = document.getElementById('number').value;
    n = parseInt(oldvalue) + parseInt(n);

    let color = document.getElementById('colorNo').value;

    for ( ; i <= n; i++) {
        var box = document.createElement('div');
        box.classList.add('myDiv');
        box.style.backgroundColor = color;
        document.getElementById('box').appendChild(box);
        box.innerHTML = i;

        oldvalue = document.getElementById('box').lastElementChild.innerHTML;
        console.log(oldvalue);
    }
}