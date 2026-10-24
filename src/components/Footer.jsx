import Logo from './Logo';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col footer__brand">
          <Logo light />
          <p>منصة تجمع أصحاب المشاريع بالمستقلين والوكالات، لبناء فرق متكاملة وإنجاز أعمال تستحق الثقة.</p>
        </div>
        <div className="footer__col">
          <h4>اكتشف أكسس</h4>
          <ul>
            <li><a href="#/">عن أكسس</a></li>
            <li><a href="#/">الخدمات والتخصصات</a></li>
            <li><a href="#/">مركز المساعدة</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>الثقة والأمان</h4>
          <ul>
            <li><a href="#/">سياسة الخصوصية</a></li>
            <li><a href="#/">حماية المدفوعات والضمان</a></li>
            <li><a href="#/">الشروط والأحكام</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>تواصل معنا</h4>
          <ul>
            <li><a href="mailto:hello@access.sa" dir="ltr">hello@access.sa</a></li>
            <li>الرياض، المملكة العربية السعودية</li>
          </ul>
          <div className="footer__social">
            <a href="#/" aria-label="X">𝕏</a>
            <a href="#/" aria-label="Instagram">◎</a>
            <a href="#/" aria-label="Email">✉</a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© 2026 أكسس. جميع الحقوق محفوظة.</span>
          <span className="footer__made">صُنع بشغف في المملكة العربية السعودية</span>
        </div>
      </div>
    </footer>
  );
}
