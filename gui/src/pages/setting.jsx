import React, { useState } from "react";
import {
  FaUserShield,
  FaAt,
  FaBook,
  FaPalette,
  FaGlobe,
  FaLock,
  FaShieldAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // 引入跳转函数
import "../styles/setting.css";

const Setting = () => {
  const [publicProfile, setPublicProfile] = useState(true);
  const [theme, setTheme] = useState("system"); // 默认系统模式
  const [showThemeOptions, setShowThemeOptions] = useState(false);
  const [language, setLanguage] = useState("English"); // 默认语言
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  const navigate = useNavigate(); // 获取跳转函数

  return (
    <div className="settings-container">
      <h2 className="settings-title">Configuration</h2>
      <div className="settings-list">
        <div className="setting-item">
          <div className="setting-label">
            <FaUserShield className="setting-icon" />
            <span>Public profile</span>
          </div>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={publicProfile}
              onChange={() => setPublicProfile(!publicProfile)}
            />
            <span className="slider"></span>
          </label>
        </div>

        <SettingItem icon={<FaAt />} text="Contact details" />

        <SettingItem icon={<FaBook />} text="All My Stories" />

        <div
          style={{ cursor: "pointer" }}
          onClick={() => setShowThemeOptions(!showThemeOptions)}
        >
          <SettingItem
            icon={<FaPalette />}
            text="Themes"
            className="setting-label"
          ></SettingItem>
        </div>
        {showThemeOptions && (
          <div className="theme-dropdown">
            <label>
              <input
                type="radio"
                value="dark"
                checked={theme === "dark"}
                onChange={() => setTheme("dark")}
              />
              Dark: Dark mode
            </label>
            <label>
              <input
                type="radio"
                value="light"
                checked={theme === "light"}
                onChange={() => setTheme("light")}
              />
              Light: Light mode
            </label>
            <label>
              <input
                type="radio"
                value="system"
                checked={theme === "system"}
                onChange={() => setTheme("system")}
              />
              System: Default to system mode
            </label>
          </div>
        )}

        <div
          style={{ cursor: "pointer" }}
          onClick={() => setShowLanguageOptions(!showLanguageOptions)}
        >
          <SettingItem
            icon={<FaGlobe />}
            text="Language"
            className="setting-label"
          />
        </div>

        {showLanguageOptions && (
          <div className="language-dropdown">
            <label>
              <input
                type="radio"
                value="English"
                checked={language === "English"}
                onChange={() => setLanguage("English")}
              />
              English
            </label>
            <label>
              <input
                type="radio"
                value="Chinese"
                checked={language === "Chinese"}
                onChange={() => setLanguage("Chinese")}
              />
              Chinese
            </label>
            <label>
              <input
                type="radio"
                value="Spanish"
                checked={language === "Spanish"}
                onChange={() => setLanguage("Spanish")}
              />
              Spanish
            </label>
          </div>
        )}

        <SettingItem icon={<FaLock />} text="Data Control & Privacy" />
        <div
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/membership")}
        >
          <SettingItem icon={<FaShieldAlt />} text="Membership" />
        </div>
      </div>
    </div>
  );
};

const SettingItem = ({ icon, text }) => (
  <div className="setting-item">
    <div className="setting-label">
      <span className="setting-icon">{icon}</span>
      <span>{text}</span>
    </div>
  </div>
);

export default Setting;
