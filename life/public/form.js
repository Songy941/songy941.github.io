function submitform(){
	var data= {};
	data.name = $('#nameInput').val()
	data.number = $('#numberInput').val()
	console.log(data)
	// data.choice = nameofchoice
	$.post("/receive", data);
}