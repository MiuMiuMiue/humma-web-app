import React, { useState } from "react";
import { FaArrowLeft, FaShieldAlt, FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../styles/membership.css";

function Membership() {
  const [trainingMode, setTrainingMode] = useState(false);
  const navigate = useNavigate(); // 获取返回导航

  return (
    <div className="membership-container">
      {/* 返回按钮 + 标题 */}
      <div className="membership-header">
        <FaArrowLeft className="back-icon" onClick={() => navigate(-1)} />
        <h2>FREE Membership</h2>
      </div>

      {/* 训练模式开关 */}
      <div className="membership-toggle">
        <FaShieldAlt className="membership-icon" />
        <span>Turn on training mode to become a member</span>
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={trainingMode}
            onChange={() => setTrainingMode(!trainingMode)}
          />
          <span className="slider"></span>
        </label>
      </div>

      {/* 会员权益说明 */}
      <p className="membership-text">
        As a member you earn credits which can be redeemed in the market by
        simply:
      </p>
      <ul className="membership-benefits">
        <li>
          <FaCheckCircle className="check-icon" />
          Flagging content you think is not safe or could be harmful in some way
        </li>
        <li>
          <FaCheckCircle className="check-icon" />
          Offering input on the response you get from engaging with your Humma
        </li>
        <li>
          <FaCheckCircle className="check-icon" />
          Also, you can participate on a content moderation jury to earn extra
          credits
        </li>
        <li>
          <FaCheckCircle className="check-icon" />
          Or, simply keep your profile in trainer mode publicly or privately to
          passively earn credits
        </li>
      </ul>

      {/* 隐私政策链接 */}
      <a href="#" className="privacy-policy">
        Privacy policy <FaArrowLeft className="link-icon" />
      </a>
    </div>
  );
}

export default Membership;
