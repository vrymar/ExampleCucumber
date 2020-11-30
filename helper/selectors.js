const selectors = {
	'AllCookiesAccepteren': { css: '#all-cookies-button > .text' },
	'codeGenerator': { css: '#login-numbers' },
	'LoginField': { css: '#content-login-button > .content-button-text' },
	'KlantenDerviceBtn': { css: '#customer-service-button > .content-button-text' },
	'backBtnKlantenService': { css: '#button--back' },
	'emailInput': { css: '#emailInput' },
	'passwordInput': { css: '#passwordInput' },
	'firstProfi': { css: '#profile-element--0' },
	'VLLogo': { css: '.videoland-logo' },
	'GeoBlock': { css: '.subtext' },
	'ExitFromAppBtn': { css: '.button-stop-application' },
	'LogOutButton': { css: '#log-out-button > .content-button-text' },
	'ContinueWatchngTitle': { css: ':nth-child(1) > .rail-title' },
	//'ContinueWatchingSeconElement': { css: '#home-carousel\3A 0\/carousel-item\3A 81021\/0' },
	'ContinueWatchingSeconElement': { css: 'continue-watching-poster-image' },
	'FunctionalCookiesBtn': { css: '#functional-cookies-button > .text' },
	'ScrollBarCookie': { css: '#track' },
	'ProfileBtn': { css: '#side-menu--profile-button > .icon' }

};

// Return either pre-defined selector or the key itself - maybe it's defined in element repo
module.exports = selector => {
	return selectors[selector] || selector;
};
