import React, { useState } from 'react';
import TopHeader from '../components/TopHeader';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicNoneRoundedIcon from '@mui/icons-material/MicNoneRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import './SmartConsultation.css';

export default function SmartConsultation({ onNavigate }) {
  // 'expert' (الاستشارة مع خبير) أو 'ai' (الاستشارة الذكية)
  const [consultationType, setConsultationType] = useState('expert');
  const [inputValue, setInputValue] = useState('');

  // دالة إرسال النص والانتقال لصفحة المحادثة
  const handleSendMessage = () => {
    const typeLabel = consultationType === 'expert' ? 'الاستشارة مع خبير' : 'الاستشارة الذكية';
    const messageToSend = inputValue.trim() || `أريد استشارة بخصوص: ${typeLabel}`;
    if (onNavigate) {
      onNavigate('smartConversation', {
        idea: typeLabel,
        message: messageToSend
      });
    }
  };

  // دعم الإرسال بالضغط على زر Enter
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="consultation-page-wrapper" dir="rtl">
      {/* الكارت الأبيض الرئيسي الموحد المطابق للصورة تماماً */}
      <div className="consultation-card-main">
        {/* 1. الهيدر العلوي المدمج بالداخل مع بيانات المستخدم */}
        <TopHeader 
          userName="عبدالله العتيبي" 
          greetingName="عبدالله"
          userRole="حساب عميل" 
          embedded={true}
          onNewProject={() => onNavigate && onNavigate('new-project')} 
        />

        {/* 2. الأيقونة والعناوين الرئيسية */}
        <div className="consultation-hero-section">
          <div className="ai-header-icon">
            <AutoAwesomeRoundedIcon sx={{ color: '#14A800', fontSize: 26 }} />
          </div>
          <h1 className="consultation-title">الاستشارة الذكية _ إنشاء جلسة جديدة</h1>
          <p className="consultation-subtitle">
            ابدأ بتحويل فكرتك إلى مشروع متكامل ومخطط تنفيذي مع مساعد الذكاء الاصطناعي
          </p>
        </div>

        {/* 3. الزران الكبيران الرئيسيان المطابقان للصورة تماماً */}
        <div className="consultation-buttons-grid">
          {/* الزر الأول على اليمين: الاستشارة مع خبير (محدد بإطار أخضر كما بالصورة) */}
          <button 
            type="button"
            className={`consultation-type-btn ${consultationType === 'expert' ? 'active' : ''}`}
            onClick={() => setConsultationType('expert')}
          >
            <span>الاستشارة مع خبير</span>
          </button>

          {/* الزر الثاني على اليسار: الاستشارة الذكية */}
          <button 
            type="button"
            className={`consultation-type-btn ${consultationType === 'ai' ? 'active' : ''}`}
            onClick={() => setConsultationType('ai')}
          >
            <span>الاستشارة الذكية</span>
          </button>
        </div>

        {/* 4. صندوق إدخال النص والإرسال */}
        <div className="input-box-container">
          <textarea 
            placeholder="أدخل فكرة مشروعك هنا أو اختر من الاقتراحات أعلاه..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={2}
          />
          <div className="input-actions-bar">
            {/* في اليمين: إرفاق ملف */}
            <div className="input-actions-right">
              <button type="button" className="attach-btn" title="إرفاق ملف">
                <span>إرفاق ملف</span>
                <AttachFileIcon sx={{ fontSize: 18, transform: 'rotate(45deg)' }} />
              </button>
            </div>

            {/* في اليسار: المايك وزر الإرسال الأخضر */}
            <div className="input-actions-left">
              <button type="button" className="mic-btn" title="تسجيل صوتي">
                <MicNoneRoundedIcon sx={{ fontSize: 20 }} />
              </button>
              <button 
                type="button" 
                className="send-btn" 
                title="إرسال والانتقال للمحادثة" 
                onClick={handleSendMessage}
              >
                <SendRoundedIcon sx={{ fontSize: 18, transform: 'scaleX(-1)' }} />
              </button>
            </div>
          </div>
        </div>

        {/* 5. ملاحظة الأمان أسفل الصندوق */}
        <div className="security-note">
          <span>أفكارك بأمان، نستخدم تفاصيل مشروعك لتقديم استشارة مخصصة لك فقط.</span>
          <ShieldOutlinedIcon sx={{ fontSize: 15, color: '#9CA3AF' }} />
        </div>
      </div>
    </div>
  );
}
