var phone = document.querySelector("#phone");
var email = document.querySelector("#email");

phone.addEventListener("click", function(){
	copy(this);
});

email.addEventListener("click", function(){
	copy(this);
});

function copy(v)
{
	navigator.clipboard.writeText(v.textContent);
	confirm(v.textContent + " was copied to clipboard");
}
