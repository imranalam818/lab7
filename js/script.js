function init(){
//add your javascrip between these two lines of code
	var d4 = document.getElementById('entrybutton');
	d4.addEventListener('click' , myEventFunction1);
	d4.addEventListener('click' , myEventFunction2);

	function myEventFunction1 () {
		var fc = document.getElementById('entryinput');
		alert('Imran Alam: '+fc.value);
	}

	function myEventFunction2 () {
	var fc = document.getElementById('entryinput');
	var h2 = document.getElementById('textoutput');
	h2.innerHTML = fc.value;
	}

}	

window.addEventListener('load', init);
