import './Logo.css';

export default function Logo({ light = false }) {
  return (
    <a href="#/" className={`logo ${light ? 'logo--light' : ''}`} aria-label="ACCESS">
      <svg className="logo__mark" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path
          d="M20 4C11.7 4 5 10.7 5 19v2c0 8.3 6.7 15 15 15 5.2 0 9.8-2.6 12.5-6.6"
          stroke="currentColor" strokeWidth="4" strokeLinecap="round"
        />
        <path
          d="M13 31 20 9l7 22"
          stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
        />
        <path
          d="M15.5 24h9"
          stroke="currentColor" strokeWidth="4" strokeLinecap="round"
        />
      </svg>
      <span className="logo__word">
        <span className="logo__first">A</span>CCESS
      </span>
    </a>
  );
}
