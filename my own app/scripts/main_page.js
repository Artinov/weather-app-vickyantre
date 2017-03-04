var select = document.querySelector("#city");
select.onchange = function(){
	localStorage.setItem("city", select.value);
}