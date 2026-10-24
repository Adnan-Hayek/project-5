import { useState } from 'react';
import Logo from './Logo';
import './Header.css';

export default function Header({ page, onNavigate }) {
  const [open, setOpen] = useState(false);
  const links = [
    { id: 'home',     label: 'الرئيسية' },
    { id: 'portfolio',label: 'معرض الأعمال' },
    { id: 'escrow',   label: 'حماية المدفوعات' },
    { id: 'privacy',  label: 'سياسة الخصوصية' },
  ];
  return (
    <header className="header">
      <div className="container header__inner">
        <Logo />
        <nav className={`header__nav ${open ? 'is-open' : ''}`}>
          {links.map(l => (
            <button
              key={l.id}
              className={`header__link ${page === l.id ? 'is-active' : ''}`}
              onClick={() => { onNavigate(l.id); setOpen(false); }}
            >
              {l.label}
            </button>
          ))}
          <button className="header__link header__link--mobile" onClick={() => onNavigate('login')}>تسجيل الدخول</button>
        </nav>
        <div className="header__actions">
          <button className="btn btn-ghost header__login" onClick={() => onNavigate('login')}>تسجيل الدخول</button>
          <button className="btn btn-primary" onClick={() => onNavigate('portfolio')}>ابدأ مشروعك</button>
        </div>
        <button className="header__burger" onClick={() => setOpen(!open)} aria-label="القائمة">
          <span/><span/><span/>
        </button>
      </div>
    </header>
  );
}
