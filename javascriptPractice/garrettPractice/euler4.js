console.log(largestPalindrome());


function largestPalindrome(){
	var n = 0;
	for(var i = 999; i > 100; i--){
		for(var j = 999; j > 100; j--){
			var foo = (i * j).toString(); //calc num and convert to string
			var bar = foo.split('').reverse().join('');
			if(foo === bar){ //compare num to reverse
				foo = parseInt(foo);
				if(foo > n)
					n = foo;
			}
		}
	}
	return n;
}