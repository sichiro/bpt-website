// 헤더 스크롤 상태
const header = document.getElementById('header');
const solid = header.classList.contains('solid'); // 하위 페이지: 히어로 없음, 항상 흰 배경
const onScroll = () => header.classList.toggle('scrolled', solid || window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// 모바일 메뉴 토글
const toggle = document.getElementById('navToggle');
const gnb = document.getElementById('gnb');

toggle.addEventListener('click', () => {
	const open = gnb.classList.toggle('open');
	toggle.setAttribute('aria-expanded', open);
	toggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
});

gnb.addEventListener('click', (e) => {
	if (e.target.tagName === 'A') toggle.click();
});

// 현재 섹션 표시
const links = [...gnb.querySelectorAll('a[href^="#"]')];
const sections = links.map((a) => document.querySelector(a.hash)).filter(Boolean);
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		const link = links.find((a) => a.hash === '#' + entry.target.id);
		link.toggleAttribute('aria-current', entry.isIntersecting);
	});
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach((s) => observer.observe(s));
