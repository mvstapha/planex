
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Stethoscope,
  Building2,
  Phone,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";
import NavGlobal from "../components/navbar/NavGlobal";
import FooterGlobal from "../components/footer/FooterGlobal";

const COLORS = {
  primary: "#1658f4",
  secondary: "#14bbae",
  text: "#000000",
};

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    specialty: "",
    clinicName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptPolicy: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Le nom complet est obligatoire.";
    }
    if (!formData.specialty.trim()) {
      newErrors.specialty = "La spécialité médicale est obligatoire.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Le numéro de téléphone est obligatoire.";
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      newErrors.email = "Veuillez saisir une adresse e-mail valide.";
    }
    if (formData.password.length < 6) {
      newErrors.password =
        "Le mot de passe doit contenir au moins 6 caractères.";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas.";
    }
    if (!formData.acceptPolicy) {
      newErrors.acceptPolicy =
        "Vous devez accepter la politique de confidentialité.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    setTimeout(() => {
      localStorage.setItem(
        "planex_user",
        JSON.stringify({
          fullName: formData.fullName,
          specialty: formData.specialty,
          clinicName: formData.clinicName,
          phone: formData.phone,
          email: formData.email,
        })
      );
      setLoading(false);
      navigate("/login");
    }, 600);
  };

  const inputStyle = {
    width: "100%",
    padding: "10.5px 14px 10.5px 40px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    fontSize: "14px",
    color: COLORS.text,
    backgroundColor: "#fafafa",
    boxSizing: "border-box",
    outline: "none",
  };

  const labelStyle = {
    display: "block",
    fontSize: "13px",
    fontWeight: "600",
    color: COLORS.text,
    marginBottom: "6px",
  };

  const iconStyle = {
    position: "absolute",
    left: "13px",
    top: "50%",
    transform: "translateY(-50%)",
    pointerEvents: "none",
  };

  const errorStyle = {
    color: "#b91c1c",
    fontSize: "12px",
    fontWeight: "500",
    marginTop: "5px",
  };

  return (
    <>
    <NavGlobal />
    <div
      style={{
        minHeight: "100vh",
        background: `radial-gradient(circle at top right, ${COLORS.secondary}18, transparent 45%), radial-gradient(circle at bottom left, ${COLORS.primary}16, transparent 45%), #f8fafc`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "28px 20px",
        color: COLORS.text,
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          backgroundColor: "#ffffff",
          borderRadius: "20px",
          padding: "36px 32px",
          boxShadow: "0 20px 45px rgba(15, 23, 42, 0.08)",
          border: "1px solid #e5e7eb",
        }}
      >
        <div style={{ marginBottom: "24px" }}>
          <h1
            style={{
              margin: "0 0 8px",
              fontSize: "26px",
              fontWeight: "800",
              color: COLORS.text,
              letterSpacing: "-0.4px",
            }}
          >
            Créer un compte
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: "14px",
              lineHeight: "1.5",
              color: "#4b5563",
            }}
          >
            Configurez votre compte médecin ou clinique pour gérer vos
            rendez-vous médicaux.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div style={{ marginBottom: "14px" }}>
            <label htmlFor="fullName" style={labelStyle}>
              Nom complet
            </label>
            <div style={{ position: "relative" }}>
              <User size={17} color="#6b7280" style={iconStyle} />
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Dr. Salma Bennani"
                value={formData.fullName}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
            {errors.fullName && <p style={errorStyle}>{errors.fullName}</p>}
          </div>

          <div style={{ marginBottom: "14px" }}>
            <label htmlFor="specialty" style={labelStyle}>
              Spécialité médicale
            </label>
            <div style={{ position: "relative" }}>
              <Stethoscope size={17} color="#6b7280" style={iconStyle} />
              <input
                id="specialty"
                name="specialty"
                type="text"
                placeholder="Médecine générale, Cardiologie, Pédiatrie..."
                value={formData.specialty}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
            {errors.specialty && <p style={errorStyle}>{errors.specialty}</p>}
          </div>

          <div style={{ marginBottom: "14px" }}>
            <label htmlFor="clinicName" style={labelStyle}>
              Nom du cabinet ou de la clinique (optionnel)
            </label>
            <div style={{ position: "relative" }}>
              <Building2 size={17} color="#6b7280" style={iconStyle} />
              <input
                id="clinicName"
                name="clinicName"
                type="text"
                placeholder="Clinique Al Amal"
                value={formData.clinicName}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
          </div>

          <div style={{ marginBottom: "14px" }}>
            <label htmlFor="phone" style={labelStyle}>
              Téléphone
            </label>
            <div style={{ position: "relative" }}>
              <Phone size={17} color="#6b7280" style={iconStyle} />
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+212 6 00 00 00 00"
                value={formData.phone}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
            {errors.phone && <p style={errorStyle}>{errors.phone}</p>}
          </div>

          <div style={{ marginBottom: "14px" }}>
            <label htmlFor="email" style={labelStyle}>
              Adresse e-mail
            </label>
            <div style={{ position: "relative" }}>
              <Mail size={17} color="#6b7280" style={iconStyle} />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="contact@clinique.ma"
                value={formData.email}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
            {errors.email && <p style={errorStyle}>{errors.email}</p>}
          </div>

          <div style={{ marginBottom: "14px" }}>
            <label htmlFor="password" style={labelStyle}>
              Mot de passe
            </label>
            <div style={{ position: "relative" }}>
              <Lock size={17} color="#6b7280" style={iconStyle} />
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                style={{ ...inputStyle, paddingRight: "42px" }}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Masquer" : "Afficher"}
                style={{
                  position: "absolute",
                  right: "11px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  padding: "4px",
                  cursor: "pointer",
                  color: "#6b7280",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            </div>
            {errors.password && <p style={errorStyle}>{errors.password}</p>}
          </div>

          <div style={{ marginBottom: "18px" }}>
            <label htmlFor="confirmPassword" style={labelStyle}>
              Confirmer le mot de passe
            </label>
            <div style={{ position: "relative" }}>
              <Lock size={17} color="#6b7280" style={iconStyle} />
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                style={{ ...inputStyle, paddingRight: "42px" }}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                aria-label={showConfirmPassword ? "Masquer" : "Afficher"}
                style={{
                  position: "absolute",
                  right: "11px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  padding: "4px",
                  cursor: "pointer",
                  color: "#6b7280",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                {showConfirmPassword ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p style={errorStyle}>{errors.confirmPassword}</p>
            )}
          </div>

          <div style={{ marginBottom: "22px" }}>
            <label
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                fontSize: "13px",
                lineHeight: "1.45",
                color: COLORS.text,
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                name="acceptPolicy"
                checked={formData.acceptPolicy}
                onChange={handleChange}
                style={{
                  width: "15px",
                  height: "15px",
                  marginTop: "2px",
                  accentColor: COLORS.primary,
                  cursor: "pointer",
                }}
              />
              <span>
                J&apos;accepte la{" "}
                <Link
                  to="/politique-confidentialite"
                  style={{
                    color: COLORS.primary,
                    fontWeight: "700",
                    textDecoration: "none",
                  }}
                >
                  politique de confidentialité
                </Link>{" "}
                relative aux données du cabinet et des patients.
              </span>
            </label>
            {errors.acceptPolicy && (
              <p style={errorStyle}>{errors.acceptPolicy}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "12px 16px",
              borderRadius: "10px",
              border: "none",
              background: loading
                ? COLORS.secondary
                : `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
              color: "#ffffff",
              fontSize: "15px",
              fontWeight: "700",
              cursor: loading ? "not-allowed" : "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              boxShadow: `0 8px 20px ${COLORS.primary}28`,
            }}
          >
            <span>{loading ? "Création du compte..." : "S'inscrire"}</span>
            {!loading && <ArrowRight size={17} />}
          </button>
        </form>

        <div
          style={{
            marginTop: "24px",
            paddingTop: "20px",
            borderTop: "1px solid #f1f5f9",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "14px",
              color: COLORS.text,
            }}
          >
            Vous avez déjà un compte ?{" "}
            <Link
              to="/login"
              style={{
                color: COLORS.secondary,
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </div>
    <FooterGlobal />
    </>
  );
}