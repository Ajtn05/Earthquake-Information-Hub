//handles sidebar expansion
const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});


// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})

//TOGGLE MAIN PAGE DISPLAY
//SET NAMES FOR BUTTONS
const logoButton = document.getElementById('logo')
const dashboardButton = document.getElementById('dashboard');
const newsButton = document.getElementById('news');
const hotlinesButton = document.getElementById('hotlines');
const notificationsButton = document.getElementById('notifications');
const mapsButton = document.getElementById('maps')
const notificationsButton2 = document.getElementById('notifications2')


//I FEEL LIKE THERES A MORE EFFICIENT WAY TO IMPLEMENT THIS BUT IDK, CURRENTLY
//WHAT IT DOES IS LOAD EVERYTHING INITIALLY AND EACH BUTTON PRESS HIDES AND UNHIDES
//THE RESPECTIVE ELEMENTS BUT YKNOW, I LOVE THE 4'11 SHORT HAIRED CHINITA CAR GIRL
//LOADS DEFAULT PAGE (DASHBOARD)
function showDefaultContent() {
	function showDashboardContent() {
		document.getElementById('main-dashboard').style.display ='block';
		document.getElementById('main-news').style.display = 'none';
		document.getElementById('main-hotlines').style.display = 'none';
		document.getElementById('main-maps').style.display = 'none';
		document.getElementById('headerText').innerText = "Dashboard";
		document.getElementsByClassName('form-input').style.display = 'none';
	}
showDashboardContent();
}

//HANDLES DASHBOARD BUTTON PRESS
dashboardButton.addEventListener('click', function() {
showDefaultContent();
})

logoButton.addEventListener('click', function() {
	showDefaultContent();
	})

//HANDLES NEWS BUTTON PRESS
newsButton.addEventListener('click', function() {
	function showNewsContent() {
		document.getElementById('main-dashboard').style.display ='none';
		document.getElementById('main-news').style.display = 'block';
		document.getElementById('main-hotlines').style.display  = 'none';
		document.getElementById('main-maps').style.display = 'none';
		document.getElementById('headerText').innerText = "News";
	}
showNewsContent();
})

//HANDLES HOTLINE BUTTON PRESS
hotlinesButton.addEventListener('click', function() {
	function showHotlinesContent() {
		document.getElementById('main-dashboard').style.display ='none';
		document.getElementById('main-news').style.display = 'none';
		document.getElementById('main-hotlines').style.display  = 'block';
		document.getElementById('main-maps').style.display = 'none';
		document.getElementById('headerText').innerText = "Hotlines";
	}
showHotlinesContent();
})

//HANDLES MAP BUTTON PRESS
mapsButton.addEventListener('click', function() {
	function showMapsContent() {
		document.getElementById('main-dashboard').style.display ='none';
		document.getElementById('main-news').style.display = 'none';
		document.getElementById('main-hotlines').style.display  = 'none';
		document.getElementById('main-maps').style.display = 'block';
		document.getElementById('headerText').innerText = "Maps";
	}
showMapsContent();
})

//window resize
if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}

//
window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})

//handles map image change
document.getElementById("image-select").addEventListener("change", function(){
	var selectedImage = this.value;
	document.getElementById("display-image").src = selectedImage;
	document.getElementById("display-image").alt = "Selected Image: " + selectedImage;
});



const switchMode = document.getElementById('switch-mode');

//I am tweaking bro its been 2 years ive talked to like 13 different people and theyre not her
//This switches the colors for dark mode
switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
		document.getElementById("headerText").style.color = "white";
		const h5Elements = document.querySelectorAll('h5');
		h5Elements.forEach(h5 => {
		  h5.style.color = 'white';
		});
		const h4Elements = document.querySelectorAll('h4');
		h4Elements.forEach(h4 => {
		  h4.style.color = 'white';
		});
		const h3Elements = document.querySelectorAll('h3');
		h3Elements.forEach(h3 => {
		  h3.style.color = 'white';
		});
		const h2Elements = document.querySelectorAll('h2');
		h2Elements.forEach(h2 => {
		  h2.style.color = 'white';
		});
		document.getElementById('title').style.color = "white";
	} else {
		document.body.classList.remove('dark');
		document.getElementById("headerText").style.color = "black";
		const h5Elements = document.querySelectorAll('h5');
		h5Elements.forEach(h5 => {
			h5.style.color = 'black';
		  });
		const h4Elements = document.querySelectorAll('h4');
		h4Elements.forEach(h4 => {
			h4.style.color = 'black';
		  });
		const h3Elements = document.querySelectorAll('h3');
		h3Elements.forEach(h3 => {
			h3.style.color = 'black';
		  });
		const h2Elements = document.querySelectorAll('h2');
		h2Elements.forEach(h2 => {
			h2.style.color = 'black';
		  });
		document.getElementById('title').style.color = "black";
	}
})

showDefaultContent();