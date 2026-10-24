import React, { useState } from 'react';
import TopHeader from '../components/TopHeader';
import './ProjectsList.css';

// MUI Icons
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import SpaRoundedIcon from '@mui/icons-material/SpaRounded';
import SmartphoneRoundedIcon from '@mui/icons-material/SmartphoneRounded';

export default function ProjectsList({ onNavigate }) {
  const [filter, setFilter] = useState('الكل');
  const [search, setSearch] = useState('');

  const projects = [
    {
      id: 1,
      title: 'متجر سلة الخير',
      subtitle: 'تصميم واجهات وتجربة المستخدم UI/UX',
      leader: 'قائد المشروع: أحمد السالم',
      status: 'قيد التنفيذ',
      statusClass: 'in-progress',
      progress: 65,
      nextAction: 'المرحلة الحالية: تطوير واجهات المتجر',
      budget: 'الميزانية غير محدودة',
      date: '22 أكتوبر',
      icon: <ShoppingCartRoundedIcon sx={{ fontSize: 24, color: '#14A800' }} />
    },
    {
      id: 2,
      title: 'هوية نواة',
      subtitle: 'تصميم الهوية البصرية',
      leader: 'قائد المشروع: سارة القحطاني',
      status: 'بانتظار المراجعة',
      statusClass: 'pending',
      progress: 90,
      nextAction: 'المخرجات جاهزة لمراجعتك',
      budget: 'الميزانية غير محدودة',
      date: 'مراجعة المخرجات',
      icon: <SpaRoundedIcon sx={{ fontSize: 24, color: '#14A800' }} />
    },
    {
      id: 3,
      title: 'تطبيق موعد',
      subtitle: 'تصميم واجهات وتجربة المستخدم UI/UX',
      leader: 'قائد المشروع: خالد الحربي',
      status: 'قيد التنفيذ',
      statusClass: 'in-progress',
      progress: 35,
      nextAction: 'تفاصيل المرحلة غير محدودة',
      budget: 'الميزانية غير محدودة',
      date: 'الموعد غير محدد',
      icon: <SmartphoneRoundedIcon sx={{ fontSize: 24, color: '#14A800' }} />
    }
  ];

  const filteredProjects = projects.filter(p => {
    const matchesFilter = 
      filter === 'الكل' || 
      (filter === 'قيد التنفيذ' && p.status === 'قيد التنفيذ') ||
      (filter === 'بانتظار المراجعة' && p.status === 'بانتظار المراجعة') ||
      (filter === 'المكتملة' && p.status === 'مكتملة');
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="projects-list-page" dir="rtl">
      {/* 1. الهيدر العلوي الموحد */}
      <TopHeader 
        userName="عبدالله محمد" 
        userRole="حساب عميل" 
        onNewProject={() => onNavigate && onNavigate('new-project')} 
      />

      {/* 2. رأس الصفحة */}
      <div 
        className="proj-top-header-section" 
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', width: '100%' }}
      >
        <div className="proj-header-right">
          <h1>مشاريعي</h1>
          <p>تابع تقدم أعمالك، وتعاون مع فريقك من الفكرة إلى الإنجاز</p>
        </div>
        <button 
          className="btn-new-project-main" 
          onClick={() => onNavigate('new-project')}
          style={{
            background: '#14A800',
            color: '#ffffff',
            border: 'none',
            padding: '10px 22px',
            borderRadius: '12px',
            fontWeight: '800',
            fontSize: '13px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 12px rgba(20, 168, 0, 0.2)',
            whiteSpace: 'nowrap'
          }}
        >
          <AddRoundedIcon sx={{ fontSize: 18 }} /> مشروع جديد
        </button>
      </div>

      {/* 3. كارت الإحصائيات العلوي */}
      <div className="proj-summary-card">
        <div className="summary-info">
          <div className="summary-icon">
            <InsightsRoundedIcon sx={{ fontSize: 28, color: '#14A800' }} />
          </div>
          <div>
            <h3>كل خطوة تقربك من الإنجاز</h3>
            <p>نظرة سريعة على مسار مشاريعك في ACCESS</p>
          </div>
        </div>
        <div className="summary-stats-boxes">
          <div className="stat-box">
            <span className="num gray">2</span>
            <span className="lbl">مشاريع مكتملة</span>
          </div>
          <div className="stat-box">
            <span className="num orange">1</span>
            <span className="lbl">بانتظار المراجعة</span>
          </div>
          <div className="stat-box">
            <span className="num green">3</span>
            <span className="lbl">قيد التنفيذ</span>
          </div>
        </div>
      </div>

      {/* 4. شريط الفلترة والبحث */}
      <div className="proj-filter-bar">
        <div className="filter-tabs">
          <button className={filter === 'الكل' ? 'active' : ''} onClick={() => setFilter('الكل')}>الكل (5)</button>
          <button className={filter === 'قيد التنفيذ' ? 'active' : ''} onClick={() => setFilter('قيد التنفيذ')}>قيد التنفيذ (3)</button>
          <button className={filter === 'بانتظار المراجعة' ? 'active' : ''} onClick={() => setFilter('بانتظار المراجعة')}>بانتظار المراجعة (1)</button>
          <button className={filter === 'المكتملة' ? 'active' : ''} onClick={() => setFilter('المكتملة')}>المكتملة (2)</button>
        </div>
        <div className="search-input-box">
          <SearchRoundedIcon sx={{ color: '#667085', fontSize: 20 }} />
          <input 
            type="text" 
            placeholder="ابحث عن مشروع..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* 5. شبكة كروت المشاريع */}
      <div className="projects-cards-grid">
        {filteredProjects.map((project) => (
          <div className="proj-card" key={project.id}>
            <div className="proj-card-top">
              <span className={`proj-status-badge ${project.statusClass}`}>
                {project.status}
              </span>
              <div className="proj-icon-bg">{project.icon}</div>
              <button className="btn-options-dots">
                <MoreHorizRoundedIcon sx={{ fontSize: 18 }} />
              </button>
            </div>

            <div className="proj-card-main">
              <h2>{project.title}</h2>
              <p className="proj-sub">{project.subtitle}</p>
              <div className="proj-leader-info">
                <PersonOutlineRoundedIcon sx={{ fontSize: 16, color: '#667085', verticalAlign: 'text-bottom', ml: 0.5 }} /> 
                {project.leader}
              </div>

              <div className="proj-progress-section">
                <div className="prog-labels">
                  <span>إنجاز المشروع</span>
                  <span style={{ fontWeight: 800, color: '#14A800' }}>{project.progress}%</span>
                </div>
                <div className="prog-bar-track">
                  <div className="prog-bar-fill" style={{ width: `${project.progress}%` }}></div>
                </div>
                <div className="next-action-text">{project.nextAction}</div>
              </div>
            </div>

            <div className="proj-card-meta">
              <div className="meta-item">
                <MonetizationOnOutlinedIcon sx={{ fontSize: 16, color: '#667085', verticalAlign: 'text-bottom', ml: 0.5 }} /> 
                {project.budget}
              </div>
              <div className="meta-item">
                <CalendarMonthOutlinedIcon sx={{ fontSize: 16, color: '#667085', verticalAlign: 'text-bottom', ml: 0.5 }} /> 
                {project.date}
              </div>
            </div>

            <div className="proj-card-actions">
              {project.status === 'بانتظار المراجعة' ? (
                <button className="btn-review-outline" onClick={() => onNavigate('review-deliverables')}>
                  مراجعة المخرجات
                </button>
              ) : (
                <button className="btn-details-link" onClick={() => onNavigate('project-details')}>
                  {project.nextAction}
                </button>
              )}
              <button className="btn-details-link" onClick={() => onNavigate('project-details')}>
                عرض تفاصيل المشروع <ArrowOutwardRoundedIcon sx={{ fontSize: 16, verticalAlign: 'middle', mr: 0.5 }} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 6. البانرات السفلية */}
      <div className="proj-bottom-banners">
        <div className="banner-card green-bg">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span className="b-icon">
              <AutoAwesomeRoundedIcon sx={{ fontSize: 24, color: '#ffffff' }} />
            </span>
            <div className="b-text">
              <h3>لمستك الأخيرة تصنع الفرق</h3>
              <p>مخرجات «هوية نواة» بانتظار مراجعتك. شارك ملاحظاتك مع سارة القحطاني</p>
            </div>
          </div>
          <button className="btn-banner-white" onClick={() => onNavigate('review-deliverables')}>
            مراجعة المخرجات
          </button>
        </div>

        <div className="banner-card dark-bg">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span className="b-icon">
              <LightbulbOutlinedIcon sx={{ fontSize: 24, color: '#14A800' }} />
            </span>
            <div className="b-text">
              <h3>فكرتك القادمة تبدأ بمحادثة</h3>
              <p>حوّل فكرتك إلى ملخص واضح مع الاستشارة الذكية</p>
            </div>
          </div>
          <button className="btn-banner-green" onClick={() => onNavigate('dashboard')}>
            ابدأ الاستشارة الذكية <ArrowOutwardRoundedIcon sx={{ fontSize: 16, verticalAlign: 'middle', mr: 0.5 }} />
          </button>
        </div>
      </div>
    </div>
  );
}