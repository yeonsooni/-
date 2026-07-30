/* ============================================================
   Shared footer for sub-pages (pages/ directory)
   ============================================================ */
(function () {
  const el = document.getElementById('footer-placeholder');
  if (!el) return;
  el.outerHTML = `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="logo">
            <img class="logo-mark" src="../images/logo-light.svg" alt="보광중앙교회 로고">
            <div class="logo-text"><b>보광중앙교회</b><span>질서있고 화평한 교회</span></div>
          </div>
          <p>말씀 위에 세워져 이웃과 세상을 섬기며,<br>예수 그리스도의 복음을 전하는 교회입니다.</p>
          <div class="socials">
            <a href="#" aria-label="유튜브"><i class="fa-brands fa-youtube"></i></a>
            <a href="#" aria-label="인스타그램"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" aria-label="페이스북"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" aria-label="카카오"><i class="fa-solid fa-comment"></i></a>
          </div>
        </div>
        <div class="footer-col">
          <h4>바로가기</h4>
          <ul>
            <li><a href="about.html">교회소개</a></li>
            <li><a href="worship.html">예배안내</a></li>
            <li><a href="sermons.html">설교말씀</a></li>
            <li><a href="news.html">교회소식</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>사역안내</h4>
          <ul>
            <li><a href="ministry.html#children">교회학교</a></li>
            <li><a href="ministry.html#youth">청년부</a></li>
            <li><a href="ministry.html#discipleship">제자훈련</a></li>
            <li><a href="ministry.html#mission">선교·전도</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>연락처</h4>
          <ul class="footer-contact">
            <li><i class="fa-solid fa-location-dot"></i> 서울특별시 용산구 보광로 00</li>
            <li><i class="fa-solid fa-phone"></i> 02-000-0000</li>
            <li><i class="fa-solid fa-envelope"></i> bogwang@church.org</li>
            <li><i class="fa-solid fa-clock"></i> 주일예배 09:00 / 11:00</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        © 2026 보광중앙교회 (Bogwang Central Church). All Rights Reserved.
      </div>
    </div>
  </footer>`;
})();
