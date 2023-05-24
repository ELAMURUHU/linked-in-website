
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
/* // Get the form elements
const firstNameInput = document.getElementById('fname');
const lastNameInput = document.getElementById('lname');
const additionalNameInput = document.getElementById('ffname');
const roleInput = document.getElementById('role');
const cityInput = document.getElementById('city');
const stateInput = document.getElementById('state');
const countryInput = document.getElementById('cntry');

// Get the form and overlay elements
const form = document.querySelector('.edit-intro-section');
const overlay = document.querySelector('.overlay');

// Function to update the form values
function updateFormValues() {
  // Get the updated values from the input fields
  const updatedFirstName = firstNameInput.value;
  const updatedLastName = lastNameInput.value;
  const updatedAdditionalName = additionalNameInput.value;
  const updatedRole = roleInput.value;
  const updatedCity = cityInput.value;
  const updatedState = stateInput.value;
  const updatedCountry = countryInput.value;

  // Perform any necessary processing or validation with the updated values

  // Update the form values with the updated values
  firstNameInput.value = updatedFirstName;
  lastNameInput.value = updatedLastName;
  additionalNameInput.value = updatedAdditionalName;
  roleInput.value = updatedRole;
  cityInput.value = updatedCity;
  stateInput.value = updatedState;
  countryInput.value = updatedCountry;

  
  form.style.display = 'none';
  overlay.style.display = 'none';
}


const saveBtn = document.getElementById('saved-btn');
saveBtn.addEventListener('click', updateFormValues);
 */

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
 
 
 
 /*********************************************************************************************/
// Create an object to hold the form data

const saveButton = document.getElementById("saved-btn");


saveButton.addEventListener("click", function() {
	
	const firstName = document.getElementById('fname').value;
	const lastName = document.getElementById('lname').value;
	const additionalName = document.getElementById('ffname').value;
	const role = document.getElementById('role').value;
	const city = document.getElementById('city').value;
	const state = document.getElementById('state').value;
	const country = document.getElementById('cntry').value;
	
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
	
	updateDisplayedValues(formData);
	
	let imagineEditIntro = document.getElementsByClassName('edit-intro-section');
	imagineEditIntro[0].style.display="none";
	
	let imagineOverlayIntro = document.getElementsByClassName('overlay');
	imagineOverlayIntro[0].style.display="none";
});


const myObject = JSON.parse(localStorage.getItem('formData'));
if (myObject) {
	updateDisplayedValues(myObject);
}


function updateDisplayedValues(formData) {
	document.getElementById("ela-name").innerText = formData.firstName;
	document.getElementById("last-name").innerText = formData.lastName;
	document.getElementById("ela-role").innerText = formData.role;
	document.getElementById("my-city").innerText = formData.city;
	document.getElementById("my-state").innerText = formData.state;
	document.getElementById("my-country").innerText = formData.country;
}



	

}
/************************************************************************************************************/



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
 
 if(getUrl.includes("index.html")){
 let fileInput = document.getElementById('myFileInput');
let postDescriptionTextarea = document.getElementById('nw-pst-des');

// Get selected file
fileInput.addEventListener('change', function(event) {
  let file = event.target.files[0]; 

  // FileReader object to read the file
  let reader = new FileReader();

  // FileReader onload event
  reader.onload = function(e) {
    let imageSrc = e.target.result; // Get the image source data

    // Create an image element to display the selected image
    let imageElement = document.createElement('img');
    imageElement.src = imageSrc;
    imageElement.classList.add('uploaded-image'); 

    
    let postContainer = document.getElementById('img-shw');
    postContainer.innerHTML = ''; // Clear any existing content
    postContainer.appendChild(imageElement); // Append the image to the container
  };

  // read file as a data URL
  reader.readAsDataURL(file);
});


}


// Show the content of the textarea and the selected image
/* if(getUrl.includes("index.html")){
	
	// Call the showContent function when the "Post" button is clicked
let postButton = document.getElementById('snd-pst-btn');
postButton.addEventListener('click', function () {
  showContent();

  
  
});
function showContent() {
	event.preventDefault();
  let postContent = postDescriptionTextarea.value;
  let selectedImage = document.querySelector('.image-show img');
   console.log(selectedImage);
  let wholeContentShowDiv = document.getElementById('whol-con-shw');
  wholeContentShowDiv.innerHTML = '';

  if (postContent.trim() !== '') {
    let contentParagraph = document.createElement('p');
    contentParagraph.textContent = postContent;
    wholeContentShowDiv.appendChild(contentParagraph);
  }

  if (selectedImage) {
    let clonedImage = selectedImage.cloneNode(true);
    wholeContentShowDiv.appendChild(clonedImage);
  }

  
  let postSectionDiv = document.getElementById('post-box');
  postSectionDiv.style.display = 'none';

  
  let overlay = document.getElementById('ovrlay');
  overlay.style.display = 'none';

  // Store the post content and selected image source in sessionStorage
  sessionStorage.setItem('postContent', postContent);
  if (selectedImage) {
    sessionStorage.setItem('selectedImageSrc', selectedImage.src);
  }
}  */

// Retrieve stored content on page load
/* document.addEventListener('DOMContentLoaded', function () {
  let storedPostContent = sessionStorage.getItem('postContent');
  let storedSelectedImageSrc = sessionStorage.getItem('selectedImageSrc');
  let wholeContentShowDiv = document.getElementById('who
  l-con-shw');

  if (storedPostContent) {
    let contentParagraph = document.createElement('p');
    contentParagraph.textContent = storedPostContent;
    wholeContentShowDiv.appendChild(contentParagraph);
  }

  if (storedSelectedImageSrc) {
    let storedImageElement = document.createElement('img');
    storedImageElement.src = storedSelectedImageSrc;
    storedImageElement.classList.add('uploaded-image');
    wholeContentShowDiv.appendChild(storedImageElement);
  }
}); */



/* } */



/*new post section starts */

  let userData = [
		
		{
			id:"12345677",
			userName: "Elamuruhu",
			position:"Front End Trainee",
		},
		{
			id:"12345678",
			userName: "Vinoth K",
			position:"Front End Developer",
		},
		{
			id:"234566778",
			userName: "LinkedIn",
			position:"Promoted",
		}
	]
	let postArr = [
		{
			id: "46584789sadasdaf47",
			postText:"Here are some cool web development tricks you must try in your next project 🔥",
			postImg:"https://media.licdn.com/dms/image/D4E22AQEdSHNzbkhvFw/feedshare-shrink_800/0/1684179604471?e=1687392000&v=beta&t=dOA7oGNq9GPJpJ62BS2k3g0HlKfxcq1_8VkWVvUlMpQ",
			postUserId:"12345678"
		},
		{
			id: "dlfkh58ghj7dd44gdfhy",
			postText:"Update your job preferences to let recruiters know what roles you're interested in.",
			postImg:"https://media.licdn.com/dms/image/sync/C4E18AQHvszE4UGBF2A/companyUpdate-article-image-shrink_627_1200/0/1659691176056?e=1687392000&v=beta&t=pRIst_gNpY9tp8LRpBEA5rYeR2SGRXGX2WVhiAp5Mfs",
			postUserId:"234566778"
		}
	] 


	



// Get references to the necessary elements
if(getUrl.includes("index.html")){
 let postContainer = document.getElementById("post-container");
let imageInput = document.getElementById("myFileInput");
let textarea = document.getElementById("nw-pst-des");
let postButton = document.getElementById("snd-pst-btn");


postButton.addEventListener("click", function() {
  
  
  let selectedImage = imageInput.files[0];
  let textareaContent = textarea.value;
  
  let postUser = userData.find(function(user) {
return user.id === postArr[0].postUserId;
});

  // Create HTML markup for the post
  let postMarkup = `
    <div class="posts">
      <div class="post-info">
	   <div class="post-details">
          <p>${postUser.id}</p>
          <p>${postUser.userName}</p>
          <p>${postUser.position}</p>
        </div>
        <div class="post-txt">
          <p>${textareaContent}</p>
        </div>
        <div class="post-img">
          <img src="${URL.createObjectURL(selectedImage)}" alt="">
        </div>
        <div class="post-actions">
          <div class="reviews">
		     <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
			 <button type="button" class="review-btn">Like</button>
		   </div>
		   
		   <div class="reviews">
		     <i class="fa fa-commenting-o" aria-hidden="true"></i>
			 <button type="button" class="review-btn">Comment</button>
		   </div>
		   
		   <div class="reviews">
		     <i class="fa fa-retweet" aria-hidden="true"></i>
			 <button type="button" class="review-btn">Repost</button>
		   </div>
		   
		   <div class="reviews">
		     <i class="fa fa-paper-plane" aria-hidden="true"></i>
			 <button type="button" class="review-btn">Send</button>
		   </div>
        </div>
      </div>
    </div>
  `;

  // Append the post markup to the post-container
  postContainer.innerHTML += postMarkup;


let postSectionDiv = document.getElementById('post-box');
  postSectionDiv.style.display = 'none';

  
  let overlay = document.getElementById('ovrlay');
  overlay.style.display = 'none';
  // Reset the image input and textarea
  imageInput.value = "";
  textarea.value = "";
}); 
}






























 //to show the typing password
if(getUrl.includes("login.html")){
		const showPassword = document.getElementById("show-password");
		const passwordInput = document.getElementById("passwrd");
		
			showPassword.addEventListener("click", function () {
			if (passwordInput.type === "password") {
			passwordInput.type = "text";
			showPassword.textContent = "hide";
			} else {
			passwordInput.type = "password";
			showPassword.textContent = "show";
		    }
		
		});
    }
	
	
	
// Get the Save button element


