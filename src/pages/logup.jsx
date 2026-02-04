import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './logup.css';
import { translations } from '../element/translations';
import { useLanguage } from '../element/LanguageContext';

const images = ["/images/chta.png"];


export default function AuthPage() {
const { language } = useLanguage();
const t = translations[language];
    const [isSignUp, setIsSignUp] = useState(true);

    // 2. States dyal Sign Up (kima sifthom)
    const [formData, setFormData] = useState({
        nom: '', prenom: '', age: '', paye: '', sexe: '', email: '', tel: ''
    });
    const [photo, setPhoto] = useState(null);
    const [preview, setPreview] = useState(null);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    // 3. States dyal Sign In
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    // --- LOGIC SIGN UP ---
    useEffect(() => {
        if (!photo) { setPreview(null); return; }
        const objectUrl = URL.createObjectURL(photo);
        setPreview(objectUrl);
        return () => URL.revokeObjectURL(objectUrl);
    }, [photo]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
        
    };

    const validate = () => {
        let newErrors = {};
        Object.keys(formData).forEach((field) => {
            if (!formData[field]) newErrors[field] = 'Ce champ est obligatoire';
        });
        if (!photo) newErrors.photo = 'Photo obligatoire';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        setLoading(true);
        const data = new FormData();
        Object.keys(formData).forEach((key) => data.append(key, formData[key]));
        data.append('photo', photo);
        try {
            await axios.post('http://127.0.0.1:8000/api/profiles', data);
            alert('Compte créé avec succès');
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    

    // --- LOGIC SIGN IN ---
    const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Hna ghadi t-dir API call dyal login f l-mustaqbal
    console.log("Credentials submitted:", credentials);

    // Simulation dyal loading
    setTimeout(() => {
        setLoading(false);
        // alert("Logged in successfully!");
    }, 1500);
};

// 2. T-akked hta mn had l-fonction bach l-inputs dyal Login ikhdmo
const handleChangeSignIn = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
};

    return (
        <div className="app-layout">
            {/* --- LEFT SIDE: LED Slider --- */}
            <div className="slider-side">
                <div className="led-border"></div>
                <div className="slider-content">
                    {images.map((img, i) => (
                        <img key={i} src={img} className="bg-img active" alt="slide" />
                    ))}
                    <div className="dark-overlay"></div>
                    <div className="hero-text">
                        
                        <h1>{isSignUp ? `${t.loginlisr1}` : `${t.loginlisr2}`}</h1>
                        <p>{isSignUp ? `${t.loginlisr3}` : `${t.loginlisr4}`}</p>
                    </div>
                </div>
            </div>

            {/* --- RIGHT SIDE: DYNAMIC FORM --- */}
            <div className="form-side">
                {isSignUp ? (
                    /* --- EXACT SIGNUP FORM DYALK --- */
                    <form className="form-container" onSubmit={handleSubmit} noValidate>
                        <div className="form-header">
                            <h2 className={`${language === "ar" ? "text-right" : "text-left"}`}>
                            {t.loguplimn1}</h2>
                            <p className={`${language === "ar" ? "text-right" : "text-left"}`}>
                                {t.loguplimn2}</p>
                        </div>

                        <div className="row">
                            <div className="input-group">
                                <input type="text" name="nom" placeholder="Nom" className={errors.nom ? 'input-error' : ''} onChange={handleChange} />
                                {errors.nom && <span className="error-msg">{errors.nom}</span>}
                            </div>
                            <div className="input-group">
                                <input type="text" name="prenom" placeholder="Prénom" className={errors.prenom ? 'input-error' : ''} onChange={handleChange} />
                                {errors.prenom && <span className="error-msg">{errors.prenom}</span>}
                            </div>
                        </div>

                        <div className="input-row">
                            <input type="number" name="age" placeholder="Age" className={errors.age ? 'input-error' : ''} onChange={handleChange} />
                            <input type="text" name="paye" placeholder="Pays" className={errors.paye ? 'input-error' : ''} onChange={handleChange} />
                        </div>

                        <div className="radio-container">
                            <span className="label-text">Sexe:</span>
                            <div className="radio-group">
                                <label><input type="radio" name="sexe" value="Homme" onChange={handleChange} /> Homme</label>
                                <label><input type="radio" name="sexe" value="Femme" onChange={handleChange} /> Femme</label>
                            </div>
                            {errors.sexe && <span className="error-msg">{errors.sexe}</span>}
                        </div>

                        <input type="email" name="email" placeholder="Email Address" className={errors.email ? 'input-error' : ''} onChange={handleChange} />
                        {errors.email && <span className="error-msg">{errors.email}</span>}

                        <input type="tel" name="tel" placeholder="Phone Number" className={errors.tel ? 'input-error' : ''} onChange={handleChange} />
                        {errors.tel && <span className="error-msg">{errors.tel}</span>}

                        <div className="file-upload-wrapper">
                            {preview && <div className="img-preview"><img src={preview} alt="preview" /></div>}
                            <label htmlFor="photo" className={`file-label-modern ${errors.photo ? 'label-error' : ''}`}>
                                <span>{photo ? "Photo Selected ✓" : "Upload Profile Photo +"}</span>
                            </label>
                            <input id="photo" type="file" hidden onChange={(e) => setPhoto(e.target.files[0])} />
                            {errors.photo && <span className="error-msg">{errors.photo}</span>}
                        </div>

                        <div className="terms-row">
                            <label className="checkbox-container">
                                <input type="checkbox" required />
                                <span className="checkmark"></span>
                                I agree with <Link to="/terms">Terms & Conditions</Link>
                            </label>
                        </div>

                        <Link to="/password" ><button className="submit-botona" type="submit" disabled={loading}>
                            {loading ? <div className="spinner"></div> : 'Create Account'}
                        </button></Link>
                        <div className="toggle-auth">
                                <span>Already have an account? </span>
                                <button type="button" className="link-btn" onClick={() => setIsSignUp(false)}>Sign In</button>
                            </div>
                    </form>
                ) : (
        /* --- SIGNIN FORM (MODERN STYLE) --- */
        <div className="form-container signin-mode">
            <div className="form-header">
                <h2>Welcome Back!</h2>
                <p>Glad to see you again. Please log in to your account.</p>
            </div>

            <form onSubmit={handleLogin} className="modern-form">
                {/* Email Input */}
                <div className="input-group-modern">
                    <label>Email Address</label>
                    <div className="input-wrapper">
                        
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="name@company.com" 
                            onChange={handleChangeSignIn} 
                            required 
                            />
                    </div>
                </div>

            {/* Password Input */}
            <div className="input-group-modern">
                <div className="label-row">
                    <label>Password</label>
                    <Link to="/forgot" className="forgot-link">Forgot password?</Link>
                </div>
                <div className="input-wrapper">
                    
                    <input 
                        type={showPassword ? "text" : "password"} 
                        name="password" 
                        placeholder="••••••••" 
                        onChange={handleChangeSignIn} 
                        required 
                    />
                    <button 
                        type="button" 
                        className="eye-btn" 
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? "👁️" : "🙈"}
                    </button>
                </div>
            </div>

            {/* Remember Me */}
            <div className="form-options">
                <label className="checkbox-container">
                    <input 
                        type="checkbox" 
                        checked={rememberMe} 
                        onChange={() => setRememberMe(!rememberMe)} 
                    />
                    <span className="checkmark"></span>
                    Keep me logged in
                </label>
            </div>

            <button type="submit" className="submit-botona" disabled={loading}>
                {loading ? <div className="spinner"></div> : "Sign In to Dashboard"}
            </button>

            {/* Social Auth Section */}
            <div className="social-separator">
                <span>Or continue with</span>
            </div>

            <div className="social-btns-row">
                <button type="button" className="social-btn google">
                    <img src="/icons/google.svg" alt="" /> Google
                </button>
                <button type="button" className="social-btn linkedin">
                    <img src="/icons/linkedin.svg" alt="" /> LinkedIn
                </button>
            </div>

            <div className="toggle-auth">
                <span>Don't have an account? </span>
                <button type="button" className="link-btn" onClick={() => setIsSignUp(true)}>
                    Create free account
                </button>
            </div>
        </form>
    </div>
                )}
            </div>
        </div>
    );
}