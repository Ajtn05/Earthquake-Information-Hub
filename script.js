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
		document.getElementById('main-notifications').style.display = 'none';
		document.getElementById('main-maps').style.display = 'none';
		document.getElementById('headerText').innerText = "Dashboard";
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
		document.getElementById('main-notifications').style.display  = 'none';
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
		document.getElementById('main-notifications').style.display  = 'none';
		document.getElementById('main-maps').style.display = 'none';
		document.getElementById('headerText').innerText = "Hotlines";
	}
showHotlinesContent();
})

//HANDLES NOTIFICATION BUTTON PRESS
notificationsButton.addEventListener('click', function() {
	function showNotificationsContent() {
		document.getElementById('main-dashboard').style.display ='none';
		document.getElementById('main-news').style.display = 'none';
		document.getElementById('main-hotlines').style.display  = 'none';
		document.getElementById('main-notifications').style.display  = 'block';
		document.getElementById('main-maps').style.display = 'none';
		document.getElementById('headerText').innerText = "Notifications";
	}
showNotificationsContent();
})

//HANDLES NOTIFICATION BUTTON 2 PRESS
notificationsButton2.addEventListener('click', function() {
showNotificationsContent();
})

//HANDLES MAP BUTTON PRESS
mapsButton.addEventListener('click', function() {
	function showMapsContent() {
		document.getElementById('main-dashboard').style.display ='none';
		document.getElementById('main-news').style.display = 'none';
		document.getElementById('main-hotlines').style.display  = 'none';
		document.getElementById('main-notifications').style.display  = 'none';
		document.getElementById('main-maps').style.display = 'block';
		document.getElementById('headerText').innerText = "Maps";
	}
showMapsContent();
})


const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})

showDefaultContent();