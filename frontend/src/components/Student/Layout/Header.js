import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Style/hocvien.css";
import { FiSearch } from "react-icons/fi";

const Header = ({ title, isSearch = false, userName, handleSearch }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [search, setSearch] = useState("");

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  // Function to add notifications
  const addNotification = (message) => {
    setNotifications((prevNotifications) => [...prevNotifications, message]);
  };

  // Simulating notification events for demonstration
  useEffect(() => {
    addNotification("Bài học mới đã được đăng tải!");
    addNotification("Nhắc nhở: Lịch thi vào ngày mai!");
    addNotification("Điểm bài tập mới đã có!");
    addNotification("Hạn chót nộp bài tập đến gần!");
    addNotification("Tin tức: Workshop mới sắp diễn ra!");
    addNotification("Có người bình luận trong lớp học nhóm!");
    addNotification("Nhắc nhở: Đăng nhập hàng ngày!");
    addNotification("Cảnh báo: Sự cố kỹ thuật xảy ra!");
  }, []);

  return (
    <div className="header">
      {isSearch ? (
        <div style={{ position: "relative", width: "800px" }}>
          <input
            type="text"
            placeholder="Tên khóa học"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch(e.target.value);
              }
            }}
            style={{
              width: "100%",
              padding: "10px 40px 10px 15px",
              border: "1px solid #ddd",
              borderRadius: "20px",
              fontSize: "16px",
            }}
          />
          <FiSearch
            onClick={() => handleSearch(search)}
            style={{
              position: "absolute",
              right: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#888",
            }}
          />
        </div>
      ) : (
        <h1>{title}</h1>
      )}
      <div className="user-info">
        <i className="fas fa-bell" onClick={toggleNotifications}></i>
        {showNotifications && (
          <div className="notifications-dropdown">
            {notifications.length === 0 ? (
              <p>Không có thông báo mới</p>
            ) : (
              notifications.map((notification, index) => (
                <p key={index}>{notification}</p>
              ))
            )}
          </div>
        )}
        <img
          alt="User profile"
          src="https://placehold.co/40x40"
          onClick={toggleDropdown}
        />
        <span>{userName}</span>
        {showDropdown && (
          <div className="dropdown-menu">
            <button>Trang cá nhân</button>
            <button>Hỗ trợ</button>
            <button>Cài đặt</button>
            <Link to="/login">
              <button>Đăng xuất</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
