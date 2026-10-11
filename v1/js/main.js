// 헤더 스크롤 상태
const header = document.getElementById('header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// 모바일 메뉴 토글
const toggle = document.getElementById('navToggle');
const gnb = document.getElementById('gnb');

toggle.addEventListener('click', () => {
	const open = gnb.classList.toggle('open');
	toggle.setAttribute('aria-expanded', open);
});

gnb.addEventListener('click', (e) => {
	if (e.target.tagName === 'A') gnb.classList.remove('open');
});

// 스크롤 리빌
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('on');
			observer.unobserve(entry.target);
		}
	});
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
