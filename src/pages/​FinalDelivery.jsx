import React, { useState, useEffect } from 'react';
import TopHeader from '../components/TopHeader';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import './​FinalDelivery.css';

export default function FinalDelivery({ onNavigate, projectData }) {
  // تبدأ الصفحة أولاً بصفحة التسليم النهائي (false تعني عرض التسليم النهائي أولاً)
  const [showContractScreen, setShowContractScreen] = useState(projectData?.screen === 'contract');

  useEffect(() => {
    if (projectData?.screen === 'contract') {
      setShowContractScreen(true);
    }
  }, [projectData]); 
  
  const [signatureInput, setSignatureInput] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [rating, setRating] = useState(5);
  const [feedbackText, setFeedbackText] = useState('');

  const filesToDownload = [
    { title: 'الشعار بصيغة مفتوحة (AI, SVG, PNG)', size: '24.8 MB', type: 'AI • SVG • PNG', desc: 'الملفات المصدرية للشعار' },
    { title: 'دليل الهوية الكامل (PDF)', size: '12.4 MB', type: 'PDF', desc: 'دليل استخدام الهوية' },
    { title: 'حزمة الخطوط والألوان', size: '8.2 MB', type: 'ZIP', desc: 'ملفات الخطوط ولوحة الألوان' }
  ];

  return (
    <div className="final-delivery-page" dir="rtl" style={{ background: '#FAFAFA', minHeight: '100vh', paddingBottom: '40px' }}>
      {/* 1. الهيدر العلوي الموحد */}
      <TopHeader 
        userName="عبدالله العتيبي" 
        userRole="حساب عميل" 
        onNewProject={() => onNavigate && onNavigate('new-project')} 
      />

      {showContractScreen ? (
        /* ====================================================
           الصفحة الثانية: اعتماد ملخص المشروع وتوليد العقد المبدئي
           ==================================================== */
        <div style={{ maxWidth: '1100px', margin: '20px auto', padding: '0 16px' }}>
          
          {/* زر للرجوع لصفحة التسليم النهائي */}
          <div style={{ marginBottom: '16px', textAlign: 'right' }}>
            <button 
              type="button" 
              onClick={() => setShowContractScreen(false)}
              style={{ background: '#fff', border: '1px solid #D0D5DD', padding: '6px 14px', borderRadius: '8px', fontSize: '11.5px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit', color: '#344054' }}
            >
              ← العودة لملفات التسليم النهائي
            </button>
          </div>

          <div style={{ background: '#fff', borderRadius: '16px', padding: '24px', border: '1px solid #EAEAEA' }}>
            
            {/* هيدر الشاشة */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
              <div>
                <h2 style={{ fontSize: '20px', fontWeight: '900', margin: '0 0 4px 0', color: '#181818' }}>اعتماد ملخص المشروع وتوليد العقد المبدئي</h2>
                <p style={{ fontSize: '12.5px', color: '#667085', margin: 0 }}>راجع نطاق متجر رواق ومراحله، ثم وقّع للانتقال إلى إيداع الدفعة الأولى.</p>
              </div>
            </div>

            {/* شريط الخطوات (Steps Bar) */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '16px 24px', marginBottom: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#14A800', fontWeight: '700', fontSize: '13px' }}>
                <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#EAF7E6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>✓</span>
                <span>الاستشارة</span>
              </div>
              <div style={{ flex: 1, height: '2px', background: '#14A800', margin: '0 16px' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#14A800', fontWeight: '800', fontSize: '13px' }}>
                <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#14A800', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>2</span>
                <span>مراجعة العقد والنطاق</span>
              </div>
              <div style={{ flex: 1, height: '2px', background: '#CBD5E1', margin: '0 16px' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontWeight: '700', fontSize: '13px' }}>
                <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: '#64748B' }}>3</span>
                <span>حجز الدفعة الأولى</span>
              </div>
            </div>

            {/* وثيقة نطاق العمل وعقد التنفيذ المبدئي */}
            <div style={{ border: '1px solid #E2E8F0', borderRadius: '12px', padding: '24px', background: '#FAFAFA' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div>
                  <span style={{ fontSize: '11px', color: '#D97706', background: '#FEF3C7', padding: '3px 8px', borderRadius: '6px', fontWeight: '700' }}>بانتظار توقيعك</span>
                  <h3 style={{ fontSize: '18px', fontWeight: '900', margin: '8px 0 4px 0', color: '#181818' }}>وثيقة نطاق العمل وعقد التنفيذ المبدئي - متجر رواق</h3>
                  <p style={{ fontSize: '12.5px', color: '#667085', margin: 0 }}>إنشاء متجر إلكتروني للمنتجات الحرفية بتجربة تسوق واضحة ووسائل دفع آمنة.</p>
                </div>
                <div style={{ textAlign: 'left' }}>
                  <small style={{ fontSize: '11px', color: '#94A3B8' }}>17 أكتوبر 2026 - الإصدار 1.0</small>
                </div>
              </div>

              {/* تفاصيل المشروع الرئيسية */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', background: '#fff', padding: '16px', borderRadius: '10px', border: '1px solid #E2E8F0', marginBottom: '20px' }}>
                <div>
                  <span style={{ display: 'block', fontSize: '11px', color: '#667085' }}>المشروع</span>
                  <strong style={{ fontSize: '14px', color: '#1E293B' }}>متجر رواق</strong>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '11px', color: '#667085' }}>قيمة المشروع الإجمالية</span>
                  <strong style={{ fontSize: '14px', color: '#14A800' }}>14,500 ر.س</strong>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '11px', color: '#667085' }}>مدة التنفيذ المتوقعة</span>
                  <strong style={{ fontSize: '14px', color: '#1E293B' }}>5 أسابيع</strong>
                </div>
              </div>

              {/* مراحل التنفيذ والتكلفة */}
              <h4 style={{ fontSize: '13.5px', fontWeight: '800', marginBottom: '10px', color: '#181818' }}>مراحل التنفيذ والتكلفة</h4>
              <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '10px', overflow: 'hidden', marginBottom: '24px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '10px 16px', background: '#F1F5F9', fontSize: '11.5px', fontWeight: '800', color: '#475569' }}>
                  <span>المرحلة</span>
                  <span>المدة</span>
                  <span>التكلفة</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 16px', borderBottom: '1px solid #F1F5F9', fontSize: '12px', alignItems: 'center' }}>
                  <span>تصميم واجهات وتجربة المستخدم (UI/UX)</span>
                  <span style={{ color: '#667085' }}>1.5 أسبوع</span>
                  <strong style={{ color: '#181818' }}>4,000 ر.س</strong>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 16px', borderBottom: '1px solid #F1F5F9', fontSize: '12px', alignItems: 'center' }}>
                  <span>تطوير المتجر وربط بوابات الدفع</span>
                  <span style={{ color: '#667085' }}>2.5 أسبوع</span>
                  <strong style={{ color: '#181818' }}>8,000 ر.س</strong>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 16px', borderBottom: '1px solid #F1F5F9', fontSize: '12px', alignItems: 'center' }}>
                  <span>الفحص والاختبار والنشر النهائي</span>
                  <span style={{ color: '#667085' }}>1 أسبوع</span>
                  <strong style={{ color: '#181818' }}>2,500 ر.س</strong>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 16px', background: '#F8FAFC', fontSize: '12.5px', fontWeight: '900', alignItems: 'center' }}>
                  <span>الإجمالي</span>
                  <span>5 أسابيع</span>
                  <span style={{ color: '#14A800' }}>14,500 ر.س</span>
                </div>
              </div>

              {/* بنود تحمي اتفاقك */}
              <h4 style={{ fontSize: '13.5px', fontWeight: '800', marginBottom: '10px', color: '#181818' }}>بنود تحمي اتفاقك</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '24px' }}>
                <div style={{ background: '#fff', border: '1px solid #E2E8F0', padding: '14px', borderRadius: '10px' }}>
                  <VerifiedUserOutlinedIcon sx={{ color: '#14A800', fontSize: 20, marginBottom: '6px' }} />
                  <h5 style={{ fontSize: '12px', fontWeight: '900', margin: '0 0 4px 0' }}>ضمان التسليم على مرحلتين</h5>
                  <p style={{ fontSize: '11px', color: '#667085', margin: 0, lineHeight: 1.4 }}>يتم تسليم الأعمال على مرحلتين، تسليم أول ثم مراجعة نهائية بعد موافقة المخصصات.</p>
                </div>
                <div style={{ background: '#fff', border: '1px solid #E2E8F0', padding: '14px', borderRadius: '10px' }}>
                  <AccessTimeOutlinedIcon sx={{ color: '#14A800', fontSize: 20, marginBottom: '6px' }} />
                  <h5 style={{ fontSize: '12px', fontWeight: '900', margin: '0 0 4px 0' }}>اعتماد تلقائي خلال 72 ساعة</h5>
                  <p style={{ fontSize: '11px', color: '#667085', margin: 0, lineHeight: 1.4 }}>يُعتمد التسليم تلقائياً بمرور 72 ساعة دون طلب تعديل أو تسجيل اعتراض رسمي.</p>
                </div>
                <div style={{ background: '#fff', border: '1px solid #E2E8F0', padding: '14px', borderRadius: '10px' }}>
                  <SecurityOutlinedIcon sx={{ color: '#14A800', fontSize: 20, marginBottom: '6px' }} />
                  <h5 style={{ fontSize: '12px', fontWeight: '900', margin: '0 0 4px 0' }}>حماية المبلغ بالضمان</h5>
                  <p style={{ fontSize: '11px', color: '#667085', margin: 0, lineHeight: 1.4 }}>يُحفظ المبلغ في حساب الضمان (Escrow)، ولا يُفرج عنه للمستقل إلا بعد اعتماد التسليم المرتبط.</p>
                </div>
              </div>

              {/* التوقيع الإلكتروني */}
              <div style={{ background: '#fff', border: '1px solid #CBD5E1', borderRadius: '10px', padding: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <strong style={{ fontSize: '12.5px', color: '#181818' }}>التوقيع الإلكتروني للموافقة على نطاق العمل</strong>
                  <span style={{ fontSize: '11px', color: '#667085' }}>خطوة واحدة أقرب لبدء مشروعك</span>
                </div>
                <input 
                  type="text" 
                  placeholder="اكتب اسمك الكامل للتوقيع..." 
                  value={signatureInput}
                  onChange={(e) => setSignatureInput(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '13px', outline: 'none', fontFamily: 'inherit' }}
                />
              </div>

            </div>

            {/* زر توقيع العقد */}
            <div style={{ marginTop: '24px' }}>
              <button 
                type="button" 
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('wallet', { modal: 'escrow' });
                  }
                }}
                style={{ background: '#14A800', color: '#fff', border: 'none', borderRadius: '10px', padding: '14px 28px', fontSize: '13.5px', fontWeight: '800', cursor: 'pointer', width: '100%', fontFamily: 'inherit', textAlign: 'center', boxShadow: '0 4px 15px #14a80033' }}
              >
                توقيع العقد والمتابعة لإيداع مرحلة البداية (Escrow) ←
              </button>
            </div>

            <div style={{ textAlign: 'center', marginTop: '14px' }}>
              <small style={{ fontSize: '11px', color: '#98A2B3' }}><CheckCircleIcon sx={{ fontSize: 13, color: '#14A800', verticalAlign: 'middle' }} /> اتفاقية وعقود منصة محمية وموثقة من ACCESS</small>
            </div>

          </div>
        </div>
      ) : (
        /* ====================================================
           الصفحة الأولى: تسليم ملفات المشروع النهائية (الافتتاحية)
           ==================================================== */
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 16px' }}>
          
          {/* رأس الصفحة ومسار التنقل */}
          <header className="final-top-bar" style={{ textAlign: 'right', marginTop: '20px' }}>
            <div className="breadcrumb" style={{ textAlign: 'right' }}>
              <span onClick={() => onNavigate && onNavigate('projects')} style={{ cursor: 'pointer' }}>مشاريعي</span> / 
              <span className="current-path"> تسليم ملفات المشروع النهائية</span>
            </div>
            <div className="final-title-row">
              <div>
                <h1>تسليم ملفات المشروع النهائية — هوية نواة</h1>
                <p>راجع المخرجات النهائية، ثم اعتمد التسليم لتحرير دفعة المرحلة المحجوزة بأمان.</p>
              </div>
              <span className="badge-waiting-approval">بانتظار اعتمادك</span>
            </div>
          </header>

          {/* تنبيه عداد الاعتماد التلقائي */}
          <div className="auto-approval-timer-bar">
            <div className="timer-icon">⏱️</div>
            <div className="timer-text">
              <strong>متبقي 48:12:00 على الاعتماد التلقائي للنظام وتحرير المستحقات</strong>
              <p>يرجى فحص جميع الملفات قبل انتهاء المهلة. عند وجود مشكلة، افتح تذكرة اعتراض قبل الاعتماد التلقائي.</p>
            </div>
          </div>

          {/* قسم ملفات المشروع النهائية */}
          <section className="final-files-section">
            <div className="sec-header-row">
              <div>
                <h2>ملفات المشروع النهائية</h2>
                <p>3 حزم جاهزة للتحميل، جميع الملفات المصدرية في مكان واحد.</p>
              </div>
              <button className="btn-download-all">⬇ تحميل الكل كملف مضغوط (ZIP)</button>
            </div>

            <div className="final-files-grid">
              {filesToDownload.map((f, idx) => (
                <div className="final-file-card" key={idx}>
                  <div className="ff-top">
                    <span className="ff-type-pill">{f.type}</span>
                    <span className="ff-icon">📦</span>
                  </div>
                  <div className="ff-body">
                    <h3>{f.title}</h3>
                    <p>{f.desc} • {f.size}</p>
                  </div>
                  <button className="btn-single-download">⬇ تنزيل</button>
                </div>
              ))}
            </div>
          </section>

          {/* قسم ملخص الاعتماد المالي والدفع */}
          <section className="financial-approval-section">
            <div className="fin-info-box">
              <div className="fin-icon">🛡️</div>
              <div>
                <h3>ملخص الاعتماد المالي</h3>
                <p>الدفعة محجوزة بأمان ولم تُحرر بعد. باعتمادك التسليم النهائي، سيتم تحرير مبلغ المرحلة للمستقل.</p>
              </div>
            </div>

            <div className="fin-amount-box">
              <span className="lbl">قيمة المرحلة النهائية</span>
              <div className="val">4,500 <small>ر.س</small></div>
              <span className="sub-escrow">حالياً قيد الضمان في Escrow</span>
            </div>

            {/* صندوق التأكيد */}
            <div className="confirmation-checkbox-box" onClick={() => setAgreed(!agreed)}>
              <span className={`custom-checkbox ${agreed ? 'checked' : ''}`}>
                {agreed ? '✓' : ''}
              </span>
              <span>أقر بأنني قمت بتحميل وفحص جميع الملفات المصدرية والتسليمات كاملة</span>
            </div>

            {/* زر الاعتماد النهائي */}
            <button 
              className={`btn-final-approval ${!agreed ? 'disabled' : ''}`}
              disabled={!agreed}
              onClick={() => setShowSuccessModal(true)}
            >
              ✓ اعتماد التسليم النهائي وتحرير الدفعة المالية للمستقل
            </button>

            <div className="dispute-link-center">
              <button className="link-red-dispute">فتح تذكرة اعتراض / نزاع مالي (Dispute Ticket)</button>
            </div>
          </section>

          {/* نافذة نجاح الاعتماد وتقييم المستقل المنبثقة، والتي تنقلك لصفحة العقد عند الضغط */}
          {showSuccessModal && (
            <div className="modal-overlay-custom">
              <div className="modal-card-custom">
                <div className="modal-success-icon">✓</div>
                <h3 style={{ fontSize: '18px', fontWeight: '900', margin: '0 0 8px 0', color: '#181818' }}>تم اعتماد التسليم وتحرير الدفعة بنجاح!</h3>
                <p style={{ fontSize: '12px', color: '#667085', margin: '0 0 20px 0' }}>شكراً لك، تم تحويل مبلغ 4,500 ر.س من حساب الضمان (Escrow) إلى محفظة المستقل.</p>

                <div className="rating-box-wrapper">
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '800', marginBottom: '8px', color: '#181818' }}>قيم تجربتك مع المستقل في هذا المشروع:</label>
                  <div className="rating-stars-row">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} onClick={() => setRating(star)} style={{ color: star <= rating ? '#F59E0B' : '#CBD5E1' }}>
                        ★
                      </span>
                    ))}
                  </div>
                  <textarea 
                    rows={2}
                    placeholder="اكتب تعليقاً أو تقييماً موجزاً لأداء المستقل..."
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                  />
                </div>

                <button 
                  type="button"
                  onClick={() => {
                    setShowSuccessModal(false);
                    setShowContractScreen(true); // الانتقال الفوري لصفحة اعتماد العقد المبدئي الثانية
                  }}
                  className="btn-modal-submit"
                >
                  إرسال التقييم والانتقال لاعتماد العقد المبدئي ←
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* حقوق النشر السفلية */}
      <footer className="final-footer-copy">
        <span>© 2026 ACCESS</span>
        <p>حقوقك محفوظة مع ACCESS وفريق الدعم هنا لمساعدتك في كل خطوة.</p>
      </footer>
    </div>
  );
}