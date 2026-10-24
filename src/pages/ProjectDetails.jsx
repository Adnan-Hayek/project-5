import React from 'react';
import TopHeader from '../components/TopHeader';
import './ProjectDetails.css';

export default function ProjectDetails({ onNavigate }) {
  return (
    <div className="project-details-page" dir="rtl">
      {/* 1. الهيدر العلوي الموحد */}
      <TopHeader 
        userName="أحمد العبدالله" 
        userRole="حساب عميل" 
        onNewProject={() => onNavigate && onNavigate('new-project')} 
      />

      {/* 2. مسار التنقل وعنوان الصفحة */}
      <div className="pd-breadcrumb-row">
        <span>مشاريعي / هوية نواة</span>
        <h1>تفاصيل المشروع</h1>
      </div>

      {/* 3. البطاقة العلوية الرئيسية للمشروع */}
      <div className="pd-main-card">
        <div className="pd-main-top">
          <div className="pd-title-group">
            <div className="pd-project-icon">ن</div>
            <div>
              <h2>هوية نواة - تصميم الهوية البصرية</h2>
              <p>تصميم وإبداع • بدأ في 01 أكتوبر 2026</p>
            </div>
          </div>
          <span className="pd-badge-pending">● بانتظار المراجعة</span>
        </div>

        <div className="pd-info-grid">
          <div className="pd-info-col">
            <span className="lbl">التقدم الإجمالي</span>
            <div className="val green">90%</div>
            <div className="mini-prog-track">
              <div className="mini-prog-fill" style={{ width: '90%' }}></div>
            </div>
          </div>

          <div className="pd-info-col">
            <span className="lbl">الميزانية في الضمان</span>
            <div className="val">4,500 <small>ر.س</small></div>
            <small className="sub">🛡 مدفوعات محمية</small>
          </div>

          <div className="pd-info-col">
            <span className="lbl">موعد التسليم</span>
            <div className="val date">18 أكتوبر</div>
            <small className="sub">📅 الموعد النهائي للمرحلة</small>
          </div>

          <div className="pd-info-col leader-col">
            <span className="lbl">قائد الفريق</span>
            <div className="leader-box">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" alt="سارة القحطاني" />
              <strong>سارة القحطاني</strong>
            </div>
          </div>
        </div>

        <div className="pd-actions-row">
          <button className="btn-chat-team" onClick={() => onNavigate('messages')}>
            💬 مراسلة قائد الفريق
          </button>
          <button className="btn-edit-contract" onClick={() => alert('طلب تعديل بنود العقد')}>
            📄 طلب تعديل في العقد
          </button>
        </div>
      </div>

      {/* 4. قسم خريطة إنجاز المشروع (الأربع مراحل) */}
      <div className="pd-section-box">
        <div className="pd-sec-header">
          <h3>خريطة إنجاز المشروع</h3>
          <span className="stages-count">اكتملت مرحلتان من أصل 4 مراحل</span>
        </div>

        <div className="milestones-grid">
          {/* المرحلة الأولى */}
          <div className="milestone-card completed">
            <div className="m-top">
              <span className="m-status-badge">مكتملة</span>
              <span className="m-check">✓</span>
            </div>
            <h4>جلسة الاستكشاف وبناء المود بورد</h4>
            <p className="m-sub">تم الاعتماد في 04 أكتوبر</p>
            <button className="m-link-text">عرض المخرجات ↖</button>
          </div>

          {/* المرحلة الثانية */}
          <div className="milestone-card completed">
            <div className="m-top">
              <span className="m-status-badge">مكتملة</span>
              <span className="m-check">✓</span>
            </div>
            <h4>تصميم مفاهيم الشعار المبدئية</h4>
            <p className="m-sub">تم الاعتماد في 11 أكتوبر</p>
            <button className="m-link-text">عرض المخرجات ↖</button>
          </div>

          {/* المرحلة الثالثة (الحالية - بانتظار المراجعة) */}
          <div className="milestone-card active-review" onClick={() => onNavigate('review-deliverables')} style={{ cursor: 'pointer' }}>
            <div className="m-top">
              <span className="m-status-badge pending">بانتظار مراجعة العميل</span>
              <span className="m-num-badge">3</span>
            </div>
            <h4>تطوير دليل الهوية البصرية</h4>
            <p className="m-sub">16 أكتوبر • 3 ملفات مرفقة</p>
            <button className="btn-m-action" onClick={(e) => { e.stopPropagation(); onNavigate('review-deliverables'); }}>
              مراجعة المخرجات ↖
            </button>
          </div>

          {/* المرحلة الرابعة (المغلقة) */}
          <div className="milestone-card locked">
            <div className="m-top">
              <span className="m-status-badge locked">بانتظار اعتماد المرحلة السابقة</span>
              <span className="m-lock">🔒</span>
            </div>
            <h4>التسليم النهائي وحزمة الملفات المصدرية</h4>
            <p className="m-sub">18 أكتوبر • الحزمة النهائية</p>
            <span className="locked-text">تفتح بعد الاعتماد</span>
          </div>
        </div>
      </div>

      {/* 5. قسم فريق المشروع وآخر النشاطات */}
      <div className="pd-bottom-grid">
        {/* فريق المشروع */}
        <div className="pd-sub-card">
          <div className="pd-sec-header">
            <h3>فريق المشروع</h3>
            <span>3 أعضاء</span>
          </div>
          <div className="team-members-list">
            <div className="team-member-item">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" alt="سارة" />
              <div>
                <strong>سارة القحطاني</strong>
                <small>قائد الفريق • مصممة هوية</small>
              </div>
            </div>
            <div className="team-member-item">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="نورة" />
              <div>
                <strong>نورة العتيبي</strong>
                <small>مصممة جرافيك</small>
              </div>
            </div>
            <div className="team-member-item">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100" alt="خالد" />
              <div>
                <strong>خالد الحربي</strong>
                <small>مطور واجهات</small>
              </div>
            </div>
          </div>
        </div>

        {/* آخر النشاطات */}
        <div className="pd-sub-card activities-card">
          <div className="pd-sec-header">
            <h3>آخر النشاطات</h3>
            <button className="link-all" onClick={() => alert('عرض كافة النشاطات')}>عرض الكل ←</button>
          </div>
          <div className="activities-list">
            <div className="activity-item">
              <span className="act-icon">📁</span>
              <div className="act-content">
                <p><strong>رفعت سارة دليل الهوية البصرية للمراجعة</strong></p>
                <small>Nawa_Brand_Guidelines_v1.pdf</small>
              </div>
              <span className="act-time">اليوم 10:45 ص</span>
            </div>

            <div className="activity-item">
              <span className="act-icon">📦</span>
              <div className="act-content">
                <p><strong>أضافت نورة تطبيقات الهوية إلى ملفات المشروع</strong></p>
                <small>3 ملفات • نماذج عرض ثري دي والتغليف</small>
              </div>
              <span className="act-time">أمس 02:30 م</span>
            </div>

            <div className="activity-item">
              <span className="act-icon">✓</span>
              <div className="act-content">
                <p><strong>اعتمدت مفاهيم الشعار المبدئية</strong></p>
                <small>اكتملت المرحلة الثانية بنجاح</small>
              </div>
              <span className="act-time">10 أكتوبر 11:20 ص</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}