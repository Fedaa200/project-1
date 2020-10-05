$("#enter").click(function() {
	var visitor=$("#your-name").val()
	var url = "file:///C:/Users/F5/Desktop/project-1/two.html"
	alert("Welcome  "+  visitor  +" In Our Books World....."+"Today a reader, Tomorrow a leader")
	window.open(url)



});
$("#details1").click(function(){
	// var co =$("#input-text").val()
	// $("#commet").appendTo("<li>"+co+"</li>")
	var url = "file:///C:/Users/F5/Desktop/project-1/the-kite-runner.html"
	window.open(url)
	
})
// function counter(){
// 	var c =0;
// 	var input= document.createElement("input")

// }
$("#details2").click(function(){
	var url = "file:///C:/Users/F5/Desktop/project-1/b2.html"
	window.open(url)
})
$("#details3").click(function(){
	var url = "file:///C:/Users/F5/Desktop/project-1/b3.html"
	window.open(url)
})
$("#details4").click(function(){
	var url = "file:///C:/Users/F5/Desktop/project-1/b4.html"
	window.open(url)
})
$("#details5").click(function(){
	var url = "file:///C:/Users/F5/Desktop/project-1/b5.html"
	window.open(url)
})
$("#details6").click(function(){
	var url = "file:///C:/Users/F5/Desktop/project-1/b6.html"
	window.open(url)
})
$("#add").click(function(){
	var text = $("#input-text").val()
	if(text === ""){
		alert("You must write something!")
	}else{
	$("#addhere").append("<p>"+text+"</p>")	
}
console.log(localStorage)
$("#input-text").val("")
})