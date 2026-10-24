import React, { useState } from 'react';
import TopHeader from '../components/TopHeader'; // استيراد الهيدر العلوي الموحد
import './​ReviewDeliverables.css';

export default function ReviewDeliverables({ onNavigate }) {
  const [comments, setComments] = useState([
    { page: 3, title: 'توازن الشعار', text: 'أقترح زيادة المسافة بين الرمز واسم نواة قليلاً، ليظهر الشعار بوضوح أكبر.', author: 'أحمد العبدالله • أنت', time: '10:52 ص' },
    { page: 3, title: 'درجة اللون الثانوي', text: 'هل يمكن تجربة درجة أدفأ من الأخضر الفاتح في لوحة الألوان؟', author: 'أحمد العبدالله • أنت', time: '10:56 ص' }
  ]);
  const [newComment, setNewComment] = useState('');
  const [targetPage, setTargetPage] = useState('3');

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    setComments([...comments, { page: targetPage, title: 'ملاحظة جديدة', text: newComment, author: 'أحمد العبدالله • أنت', time: 'الآن' }]);
    setNewComment('');
  };

  return (
    <div className="review-deliverables-page" dir="rtl">
      {/* 1. الهيدر العلوي الموحد */}
      <TopHeader 
        userName="أحمد العبدالله" 
        userRole="حساب عميل" 
        onNewProject={() => onNavigate && onNavigate('new-project')} 
      />

      {/* 2. رأس الصفحة ومسار التنقل */}
      <div className="review-top-header-row">
        <div className="breadcrumb-and-title">
          <div className="breadcrumb">مشاريعي / هوية نواة / مراجعة المخرجات</div>
          <h1>مراجعة مخرجات: دليل هوية نواة</h1>
          <p>راجع الملف، وأضف ملاحظاتك على المواضع التي تهمك.</p>
        </div>
        <div className="review-top-meta-left">
          <span className="project-code-badge">AC-023</span>
          <span className="badge-round-pending">↺ جولة التعديل 1 من 2 متبقية</span>
        </div>
      </div>

      {/* 3. المحتوى المقسم لجزأين: عارض الـ PDF (يسار) ولوحة الملاحظات (يمين) */}
      <div className="review-split-container">
        
        {/* الجزء الأيسر: عارض الـ PDF */}
        <div className="pdf-viewer-section">
          <div className="pdf-viewer-top-bar">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="pdf-file-type-icon">PDF</span>
              <span className="pdf-name">Nawa_Brand_Guidelines_v1.pdf</span>
              <span className="pdf-meta">12 صفحة • 8.4 MB • رفعته سارة القحطاني</span>
            </div>
            <div className="pdf-tools">
              <button title="تحميل">📥</button>
              <button title="خيارات">⋯</button>
            </div>
          </div>

          <div className="pdf-mockup-canvas">
            <div className="mockup-page-inner">
              <div className="mockup-header-row">
                <span className="brand-tag">NAWA / BRAND GUIDELINES</span>
                <span className="sub-tag">دليل الهوية البصرية</span>
              </div>
              <div className="mockup-body-content">
                <h2>01 — THE IDENTITY</h2>
                <h1>من فكرة صغيرة،<br />ينمو أثر كبير.</h1>
                <p>هوية مستوحاة من البذرة: تعكس النمو والتوازن، وتمنح نواة حضوراً بسيطاً وواثقاً.</p>
                
                <div className="mockup-card-box">
                  <div className="logo-box-demo">نواة <span className="pin-num">1</span></div>
                  <small>الشعار الأساسي / النسخة المعكوسة</small>
                </div>

                <div className="mockup-colors-section">
                  <span className="color-title">ألوان تنبض بالطبيعة</span>
                  <div className="color-swatches-row">
                    <div className="swatch"></div>
                    <div className="swatch"></div>
                    <div className="swatch highlighted">2</div>
                  </div>
                  <h3>أبجد... بداية كل حكاية</h3>
                  <small>TAJAWAL / BOLD - REGULAR</small>
                </div>
              </div>
              <div className="page-number-indicator">03 / 12</div>
            </div>
          </div>

          {/* شريط الأدوات السفلي للـ PDF */}
          <div className="pdf-footer-toolbar">
            <div className="left-tools">
              <button>⤢</button>
              <button>🔍-</button>
              <span>100%</span>
              <button>🔍+</button>
            </div>
            <div className="center-pagination">
              <button>⟨</button>
              <span>3</span>
              <span>/ 12</span>
              <button>⟩</button>
            </div>
            <div className="right-action-tool">
              <button className="btn-add-note-inline">💬 إضافة ملاحظة</button>
            </div>
          </div>
        </div>

        {/* الجزء الأيمن: لوحة الملاحظات والاعتماد */}
        <div className="notes-sidebar-section">
          <div className="notes-header-tabs">
            <h3>الملاحظات والاعتماد</h3>
            <div className="free-edits-pill">
              <span>💡 لديك جولتا تعديل مجانيتان وفق بنود العقد</span>
            </div>
          </div>

          <div className="notes-tabs-filter">
            <button className="active">الملاحظات ({comments.length})</button>
            <button>تمت المعالجة (0)</button>
          </div>

          {/* قائمة الملاحظات */}
          <div className="comments-list-box">
            {comments.map((c, idx) => (
              <div className="comment-item-card" key={idx}>
                <div className="ci-top">
                  <span className="page-badge-num">صفحة {c.page}</span>
                  <span className="ci-time">{c.time}</span>
                </div>
                <h4>{c.title}</h4>
                <p>{c.text}</p>
                <small>{c.author}</small>
              </div>
            ))}
          </div>

          {/* صندوق إضافة ملاحظة جديدة */}
          <form className="add-comment-box" onSubmit={handleAddComment}>
            <h4>أضف ملاحظتك</h4>
            <textarea 
              rows="3" 
              placeholder="اكتب ملاحظتك، أو حدد موضعاً على الملف..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            ></textarea>
            <div className="comment-form-footer">
              <span className="select-pos">📎 تحديد موضع على الملف</span>
              <button type="submit" className="btn-send-comment">إرسال الملاحظات وطلب التعديل</button>
            </div>
          </form>

          {/* زر الاعتماد النهائي للمرحلة */}
          <div className="approval-section-card">
            <p>كل شيء يبدو كما توقعت؟</p>
            <button 
              className="btn-approve-stage"
              onClick={() => onNavigate('final-delivery')}
            >
              ✓ اعتماد مخرجات المرحلة
            </button>
            <small>بالاعتماد، ينتقل الفريق إلى مرحلة التسليم النهائي.</small>
          </div>

        </div>

      </div>
    </div>
  );
}