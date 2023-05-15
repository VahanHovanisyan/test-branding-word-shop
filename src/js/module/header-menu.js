import {
	scrollController
} from './scrollController.js';

var isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

const main = document.querySelector(".main");

if (isMobile.any()) {
	document.body.classList.add('mobile');
	main.classList.add('mobile');
} else {
	main.classList.add('pc');
	document.body.classList.add('pc');
}


document.addEventListener("click", (event) => {
	const menuNavHeader = document.querySelector(".header");
	const burger = document.querySelector(".burger")
	if (event.target.closest(".burger")) {
		menuNavHeader.classList.toggle("active")
		burger.classList.toggle("active")
		main.classList.toggle("lock-scroll-snap")
		scrollController.lockScroll()
		if (!menuNavHeader.classList.contains("active")) {
			scrollController.unLockScroll()
		}
	}
})


