//Wrapping jQuery in a self-executing function  ensures safe usage of $
// We also ensure that the undefined variable hasn't been overloaded
// and is in fact undefined
(function($,undefined){
	$('#image_url_input').on('keypress', function(e){
		// check if spacebar was pressed
		if (e.which == 13){
			url=$(this).val();
			if (url.match(/\.(jpeg|jpg|gif|png)$/) != null)
				$('#uploaded_image').attr('src', url);
		}
	})
	$('#image_file_input').on('change',function(e){
		url=$(this).val();
		if (url.match(/\.(jpeg|jpg|gif|png|JPEG|JPG|GIF|PNG)$/) != null)
			$('#uploaded_image').attr('src', URL.createObjectURL(event.target.files[0]));
	})
})(jQuery);