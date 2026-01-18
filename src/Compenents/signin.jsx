
import { useState } from "react";
import "./signin.css"; 
import { useLanguage } from "../element/LanguageContext";

function SignIn() {
  const { language } = useLanguage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return alert(
      language === "ar" ? "الرجاء ملء جميع الحقول" : "Please fill all fields"
    );
    alert(
      language === "ar" ? "تم تسجيل الدخول بنجاح" : "Logged in successfully"
    );
  };

  return (<div className="creative-login-wrapper">
      <form className={`creative-card ${language === "ar" ? "rtl" : "ltr"}`} onSubmit={handleSubmit}>
        <div className="creative-logo">HallaMaghreb</div>

        <p className="creative-quote">
          {language === "ar"
            ? "استكشف، تواصل، اكتشف المغرب"
            : "Explore, Connect, Discover Morocco"}
        </p>

        <div className="input-group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder=" "
          />
          <label>{language === "ar" ? "البريد الإلكتروني" : "Email"}</label>
          <span className="icon">📧</span>
        </div>

        <div className="input-group">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder=" "
          />
          <label>{language === "ar" ? "كلمة المرور" : "Password"}</label>
          <span className="icon">🔒</span>
        </div>

        <button type="submit" className="submit-btn">
          {language === "ar" ? "تسجيل الدخول" : "Login"}
        </button>
      </form>
    </div>
  );
}


export default SignIn;
