import React from 'react';
import './TopHeader.css';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

export default function TopHeader({ userName = "عبدالله محمد", userRole = "حساب عميل", onNewProject }) {
  return (
    <header className="dash-top-header" dir="rtl">
      {/* القسم الأيمن: الترحيب والوصف */}
      <div className="dash-user-welcome">
        <h1>مرحباً، {userName} 👋</h1>
        <span>كل ما تحتاجه لانجاز مشروعك، في مكان واحد</span>
      </div>

      {/* القسم الأيسر: الإشعارات وبروفايل المستخدم */}
      <div className="dash-top-actions-group">
        {/* زر الإشعارات */}
        <div className="dash-notification-bell" title="الإشعارات">
          <NotificationsNoneRoundedIcon sx={{ fontSize: 21, color: '#475467' }} />
          <span className="notif-dot"></span>
        </div>

        {/* بروفايل المستخدم */}
        <div className="dash-header-profile">
          <div className="header-avatar-circle">ع ع</div>
          <div className="header-user-meta">
            <strong>{userName}</strong>
            <small>{userRole}</small>
          </div>
          <span className="header-arrow">
            <KeyboardArrowDownRoundedIcon sx={{ fontSize: 18, color: '#667085' }} />
          </span>
        </div>
      </div>
    </header>
  );
}