// scroll: lock / unlock

const body = document.body;
export const scrollController = {
	scrollPosition: 0,
	lockScroll() {
		scrollController.scrollPosition = window.scrollY;
		let lockPadding = window.innerWidth - body.offsetWidth;
		body.classList.add('lock-scroll');
		body.style.cssText = `
			top: -${scrollController.scrollPosition}px;
			padding-right: ${lockPadding}px;
		`;
		document.documentElement.style.scrollBehavior = 'unset';
	},

	unLockScroll() {
		body.classList.remove('lock-scroll');
		body.style.cssText = '';
		window.scroll({ top: scrollController.scrollPosition });
		document.documentElement.style.scrollBehavior = '';
	}
};

// scroll onclick
var menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click', onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		var menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			var gotoBlock = document.querySelector(menuLink.dataset.goto);
			var gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('.header').offsetHeight;
		
			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}

const yo = console.log('youi');
