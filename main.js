$("#save").click(function() {
	var bookname=$("#book-name").val();
	var auther=$("#auther-name").val();
	var bookcover=$("#book-cover").val();
	var quote=$("#quote").val();
	var rate =$("#rate").val();
	var ownerwindow = window.open()
	// $("<UL id = "list"></UL>").appendTo(ownerwindow)
	$("<li>"+ownerwindow.document.write(bookname)+"</li>")

	 $("<li>"+ownerwindow.document.write(rate)+"</li>")

});
