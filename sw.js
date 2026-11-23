// 솔로운영 근태관리 — 캐시 없는 서비스 워커 (홈 화면 설치 조건용)
// HTML·JS를 캐시에 담지 않습니다. 배포하면 항상 최신 파일이 열립니다.
self.addEventListener('install', () => { self.skipWaiting(); });
self.addEventListener('activate', (event) => { event.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', (event) => {
  if (event.request.mode !== 'navigate') return;   // 페이지 이동만 네트워크로 그대로 전달, 나머지는 손대지 않음
  event.respondWith(fetch(event.request));
});
