var last; //Variable that keeps track of last opened council member
function toggler(id) {
	var e = document.getElementById(id); //clicked element
	if (e.style.display == 'block') //if item is displayed, then hide it
        e.style.display = 'none';
    else
        e.style.display = 'block'; //Else, item is hidden, then show it.
    if(last == e){ //checks if trying to click on same person
    	return; //exit
    }
    if(typeof last != 'undefined'){ //This checks if last is defined or not.
    	last.style.display = 'none'; //if last is defined, then we hide last element
    }

    last = e; //resetting last
}