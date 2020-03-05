document.querySelector('.burger__line').onclick = function() {
	let menu = document.querySelector('.header__menu-nav');

	this.classList.toggle('burger__line-active');
	menu.classList.toggle('header__menu-navActive');
	

}

$('.slides').slick({
	dots:true,
	arrows:false
});