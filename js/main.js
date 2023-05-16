
 
 
  function logOut (event){
	event.preventDefault();
	localStorage.removeItem("isLogin");
	window.location.replace("login.html");
	localStorage.clear()
} 

 