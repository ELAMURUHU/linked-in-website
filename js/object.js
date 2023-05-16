
let usr_input = document.getElementById("mail");
let usr_password = document.getElementById("passwrd");
let inputs = document.getElementsByClassName("form_control");
let view = document.getElementsByClassName("error");


let getUrl = window.location.href;
if(getUrl.includes("index.html")){
	let isLogin = localStorage.getItem("isLogin");
	if(!isLogin){
		window.location.replace("login.html");
	}
 }
 
 
let users = [
  {
    user_id : 12345,
    email_id: "elamuruhu.mano@gmail.com",
    passWord: "ela@muruhu1997",
  },
  {
    user_id: 15467,
    email_id: "ragupathi@gmail.com",
    passWord: "regu1997fend"
  },
  {
	user_id: 19087,
    email_id: "devkarthik@gmail.com",
    passWord: "dev98karthik"
  },
  {
	user_id: 12546,
    email_id: "yogesh@gmail.com",
    passWord: "yogesgyogi20" 
  }
];


function onSignIn(){
	let isValid;
	  
	 for(let x=0;x < inputs.length;x++ )
	 {
		isValid=0;
		if(inputs[x].value.trim() === "")
		{
			inputs[x].parentNode.getElementsByTagName("p")[0].classList.add("invalid-input");
			isValid++;
		}
		else{
		  inputs[x].parentNode.getElementsByTagName("p")[0].classList.remove("invalid-input");
		}
	}

if(isValid===0){
	let user = users.find(function(u) {
		localStorage.setItem("user2",u.user_id);
		return u.email_id === usr_input.value;
	});
	
	if (user && user.passWord === usr_password.value) {
		return logIn(event);
		/* console.log("Login successful"); */
	} else {
		console.log("Login failed");
	} 
}
	 
	if(usr_input.value === users.email_id ){
		view[0].classList.remove("error2");	
	}
	else{
		view[0].classList.add("error2");
	}
	if(usr_password.value === users.passWord){
		view[0].classList.remove("error2");	
	}
	else{
		view[0].classList.add("error2");
	}
}


 

//login function
function logIn (event){
	event.preventDefault();
	localStorage.setItem("isLogin",true);
	window.location.replace("index.html");
	
	
}
 
 //logout function
  function logOut (event){
	event.preventDefault();
	localStorage.removeItem("isLogin");
	window.location.replace("login.html");
	localStorage.clear()
} 

 
 //profile login and logout
 
 /* profile page change name and image */
 
 let profile = [

    {
		id:12345,
		firstname:"Elamuruhu",
		lastname:"Manoharan",
		mobile:"8668764991",
		email:"elamuruhu.mano@gmail.com",
		passwrd:"ela@muruhu1997",
		gender:"male",
		profileimage:"images/elavj.jpg",
		profilebanner:"url('images/elamuruhu-banner-pic.jpg')"
	
    },
	
	{
		id:15467,
		firstname:"Ragu",
		lastname:"Pathi",
		mobile:"8668712345",
		email:"ragupathi@gmail.com",
		passwrd:"regu1997fend",
		gender:"male",
		profileimage:"images/ragu.jpg",
		
		profilebanner:"url('images/ragu-profile-banner.jpg')"
	
    },
	
	{
		id:19087,
		firstname:"Karthik",
		lastname:"Dev",
		mobile:"9876564991",
		email:"devkarthik@gmail.com",
		passwrd:"dev98karthik",
		gender:"male",
		profileimage:"images/karthik.jpeg",
		profilebanner:"url('images/karthi-banner-pic.jpg')"
	
    },
	
	{
		id:12546,
		firstname:"Yogsh",
		lastname:"Waran",
		mobile:"8664568991",
		email:"yogesh@gmail.com",
		passwrd:"yogesgyogi20",
		gender:"male",
		profileimage:"images/yogesh.jpg",
		profilebanner:"url('images/yogesh-banner-pic.jpg')"
	
    }


]; 
  
  let userObj = JSON.stringify(profile);
	localStorage.setItem("localvalue",userObj);
//console.log(userObj);

let getObj = localStorage.getItem("localvalue");

let getuser = JSON.parse(getObj);
 console.log(getuser);

let localstr = parseInt(localStorage.getItem("user2"));

let finduser = getuser.find(function(event){
	return event.id === localstr;
})
console.log(finduser);



if(getUrl.includes("index.html")){
 if(finduser){
	
	let navBarpic = document.getElementsByClassName("navbar-pic");
	console.log(navBarpic);
	for(let s=0;s<navBarpic.length;s++){
		navBarpic[s].src = finduser.profileimage;
	}
	
	let indFirstName  = document.getElementById("my-first-name");
	indFirstName.innerHTML = finduser.firstname;
	
	let indDropName = document.getElementById("drop-name");
	indDropName.innerHTML = finduser.firstname;
	
	let postMainName = document.getElementById("post-name");
	postMainName.innerHTML = finduser.firstname;
	
	
} }


  
	 if(getUrl.includes("profile.html")){
		if(finduser){
			
			let navBarpics = document.getElementsByClassName("navbar-pic");
				console.log(navBarpics);
				for(let q=0;q<navBarpics.length;q++){
					navBarpics[q].src = finduser.profileimage;
	        }
			
			
			let profileBanPic = document.getElementById("profile-banner-pic");
			profileBanPic.style.backgroundImage = finduser.profilebanner;
			
			}
		       
			  
			   
			   let theProfilesnap = document.getElementsByClassName("pro-snap-pic");
			   console.log(theProfilesnap);
			    for(let v=0;v<theProfilesnap.length;v++){
				   theProfilesnap[v].textContent = finduser.firstname;
			   } 
			   
			  let profileLastName = document.getElementById("last-name");
			 console.log(profileLastName);
			   profileLastName.innerHTML = finduser.lastname; 
	}	 


  /* profile page change name and image  ends ---*/


//edit intro show function
if(getUrl.includes("profile.html")){
let btn = document.getElementsByClassName("editable");
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function (event) {
	  event.preventDefault();
	  let xEle = document.getElementsByClassName("overlay")[0];
	  xEle.style.display = "block";
	  
    let getparent = this.parentNode.parentNode;
    let pElements = getparent.getElementsByClassName("edit-intro-section");
    pElements[0].style.display="block";
	
  });
}
}
//edit intro remove function
 let editBtn = document.getElementsByClassName("edit-icon");
 for(let k=0; k  <editBtn.length; k++){
editBtn[k].addEventListener("click",function(event){
	event.preventDefault();
	let xEle = document.getElementsByClassName("overlay")[0];
	  xEle.style.display = "none";
	let getparent = this.parentNode.parentNode;
	
	 getparent.style.display="none";
}) 
 }

//education show function
let icon = document.getElementsByClassName("edu-pencil-icon");
for (let i = 0; i < icon.length; i++) {
  icon[i].addEventListener("click", function (event) {
	  event.preventDefault();
	  let yEle = document.getElementsByClassName("overlay")[0];
	  yEle.style.display = "block";
	  
    let getparent = this.parentNode.parentNode;
    let qElements = getparent.getElementsByClassName("edit-studies");
    qElements[0].style.display="block";
	
  });
}
//education remove function
if(getUrl.includes("profile.html")){
 let editIcon = document.getElementsByClassName("edit-study-icon");
 for(let l=0; l < editBtn.length; l++){
editIcon[l].addEventListener("click",function(event){
	event.preventDefault();
	let yEle = document.getElementsByClassName("overlay")[0];
	  yEle.style.display = "none";
	let getparent = this.parentNode.parentNode;
	
	 getparent.style.display="none";
}) 
 }
}
//experience show function
let edit_icon = document.getElementsByClassName("exp-edit-pencil-icon");
for (let i = 0; i < edit_icon.length; i++) {
  edit_icon[i].addEventListener("click", function (event) {
	  event.preventDefault();
	  let rEle = document.getElementsByClassName("overlay")[0];
	  rEle.style.display = "block";
	  
    let getparent = this.parentNode.parentNode;
    let sElements = getparent.getElementsByClassName("experience-ela-form");
    sElements[0].style.display="block";
	
  });
}

//experience remove function
 let exp_close = document.getElementsByClassName("edit-exp-icon");
 for (let m = 0; m < icon.length; m++) {
exp_close[m].addEventListener("click",function(event){
	event.preventDefault();
	let tEle = document.getElementsByClassName("overlay")[0];
	  tEle.style.display = "none";
	let getparent = this.parentNode.parentNode;
	
	 getparent.style.display="none";
}) 
 }


 
 //edit intro form
 if(getUrl.includes("profile.html")){
 let myName = document.getElementById("ela-name");
 let editName = myName.innerText;
 
 let myInputName = document.getElementById('fname');
 myInputName.value = editName;
 /* console.log(myInputName); */
 
  let myLastName = document.getElementById("last-name");
 let editLastName = myLastName.innerText;
 
 let myInputLastName = document.getElementById('lname');
 myInputLastName.value = editLastName;
 
 
 let myRole = document.getElementById("ela-role");	
 let editRole = myRole.innerText;

 let myInputRole = document.getElementById("role");
 myInputRole.value = editRole;
 /* console.log(myInputRole); */
 
 let myCity = document.getElementById("my-city");
 let editCity = myCity.innerText;
 
 //console.log(editCity);
let myInputCity = document.getElementById("city");
myInputCity.value = editCity;
//console.log(myInputCity); 

let myState = document.getElementById("my-state");
let editState = myState.innerText;

let myInputState = document.getElementById("state");
myInputState.value = editState;
//console.log(myInputState);
 let myCountry = document.getElementById("my-country");
let editCountry = myCountry.innerText;

let myInputCountry = document.getElementById("cntry");
myInputCountry.value = editCountry;
//console.log(myInputCountry);
 
 
 
 
// Create an object to hold the form data

const saveButton = document.getElementById("saved-btn");
saveButton.addEventListener("click", function() {
	const firstNames = document.getElementById('fname');
	const lastNames = document.getElementById('lname');
	const additionalNames = document.getElementById('ffname');
	const roles = document.getElementById('role');
	const citys = document.getElementById('city');
	const states = document.getElementById('state');
	const countrys = document.getElementById('cntry');
	
  const firstName = firstNames.value;
  const lastName = lastNames.value;
  const additionalName = additionalNames.value;
  const role = roles.value;
  const city = citys.value;
  const state = states.value;
  const country = countrys.value;
  
	const formData = {
	  firstName,
	  lastName,
	  additionalName,
	  role,
	  city,
	  state,
	  country
	};

// Save form data to local storage
localStorage.setItem('formData', JSON.stringify(formData));
});

const myObject = JSON.parse(localStorage.getItem('formData'));
//console.log(myObject);
if(myObject){
	  let myName = document.getElementById("ela-name");
	 myName.innerText = myObject.firstName; 
	 
	 let myLastName = document.getElementById("last-name");
	 myLastName.innerText = myObject.lastName;
	 
	 let myJob = document.getElementById("ela-role");
	 myJob.innerText = myObject.role;
	 
	  let myCity = document.getElementById("my-city");
	 myCity.innerText = myObject.city;
	 
	 let myState = document.getElementById("my-state");
	 myState.innerText = myObject.state;
	 
	 let myCountry = document.getElementById("my-country");
	 myCountry.innerText = myObject.country;
	 
}
	 

}


/*post section starts*/
if(getUrl.includes("index.html")){
let postBtn = document.getElementById("start-a-post");
//console.log(postBtn); 
 
 postBtn.addEventListener("click",function(event){
	 event.preventDefault();
	 let qEle = document.getElementsByClassName("overlay")[0];
	     qEle.style.display = "block";
	 
	 let psElements = document.getElementsByClassName("post-section");
	 psElements[0].style.display = "block";
 });
}
/*post section ends*/

/*image show starts*/
 
let fileInput = document.getElementById('myFileInput');

// Get selected file
fileInput.addEventListener('change', function(event) {
  let file = event.target.files[0]; 

  console.log(file);
  // FileReader object to read the file
  let reader = new FileReader();
   console.log(reader);
   
  //FileReader onload event
    reader.onload = function(e) {
    let imageSrc = e.target.result; // Get the image source data

    // Create an image element to display the selected image
    let imageElement = document.createElement('img');
    imageElement.src = imageSrc;
    imageElement.classList.add('uploaded-image'); // Add a class for styling if needed

    // Get the post-part container element to display the uploaded image
    let postContainer = document.querySelector('.image-show');
    postContainer.innerHTML = ''; // Clear any existing content
    postContainer.appendChild(imageElement); // Append the image to the container
  };

  // Read the selected file as a data URL
  reader.readAsDataURL(file);
});
/*image show ends*/
