var last;
function toggler(id) {
    var e = document.getElementById(id);
    if(typeof last != 'undefined'){
    	last.style.display = 'none';
    }
    last = e;
    if (e.style.display == 'block')
        e.style.display = 'none';
    else
        e.style.display = 'block';
}