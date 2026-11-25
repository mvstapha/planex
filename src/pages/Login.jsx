import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import NavGlobal from "../components/navbar/NavGlobal";
import FooterGlobal from "../components/footer/FooterGlobal";

const COLORS = {
  primary: "#1658f4",
  secondary: "#14bbae",
  text: "#000000",
};

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Veuillez renseigner votre adresse e-mail et votre mot de passe.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const savedUser = {
        email,
        rememberMe,
        loggedInAt: new Date().toISOString(),
      };
      localStorage.setItem("planex_auth", JSON.stringify(savedUser));
      setLoading(false);
      navigate("/dashboard");
    }, 600);
  };

  return (
    <>
    <NavGlobal />
    <div
      style={{
        minHeight: "100vh",
        background: `radial-gradient(circle at top left, ${COLORS.primary}16, transparent 45%), radial-gradient(circle at bottom right, ${COLORS.secondary}18, transparent 45%), #f8fafc`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        color: COLORS.text,
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "440px",
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
            Connexion
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: "14px",
              lineHeight: "1.5",
              color: "#4b5563",
            }}
          >
            Accédez à votre espace médecin ou cabinet pour suivre les appels et
            rendez-vous en temps réel.
          </p>
        </div>

        {error && (
          <div
            style={{
              backgroundColor: "#fef2f2",
              border: "1px solid #fecaca",
              color: "#991b1b",
              padding: "11px 14px",
              borderRadius: "10px",
              fontSize: "13px",
              fontWeight: "500",
              marginBottom: "18px",
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "16px" }}>
            <label
              htmlFor="login-email"
              style={{
                display: "block",
                fontSize: "13px",
                fontWeight: "600",
                color: COLORS.text,
                marginBottom: "7px",
              }}
            >
              Adresse e-mail
            </label>
            <div style={{ position: "relative" }}>
              <Mail
                size={17}
                color="#6b7280"
                style={{
                  position: "absolute",
                  left: "13px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                }}
              />
              <input
                id="login-email"
                type="email"
                placeholder="dr.amine@clinique.ma"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: "100%",
                  padding: "11px 14px 11px 40px",
                  borderRadius: "10px",
                  border: "1px solid #d1d5db",
                  fontSize: "14px",
                  color: COLORS.text,
                  backgroundColor: "#fafafa",
                  boxSizing: "border-box",
                  outline: "none",
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label
              htmlFor="login-password"
              style={{
                display: "block",
                fontSize: "13px",
                fontWeight: "600",
                color: COLORS.text,
                marginBottom: "7px",
              }}
            >
              Mot de passe
            </label>
            <div style={{ position: "relative" }}>
              <Lock
                size={17}
                color="#6b7280"
                style={{
                  position: "absolute",
                  left: "13px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                }}
              />
              <input
                id="login-password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: "100%",
                  padding: "11px 42px 11px 40px",
                  borderRadius: "10px",
                  border: "1px solid #d1d5db",
                  fontSize: "14px",
                  color: COLORS.text,
                  backgroundColor: "#fafafa",
                  boxSizing: "border-box",
                  outline: "none",
                }}
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
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "22px",
              fontSize: "13px",
            }}
          >
            <label
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                color: COLORS.text,
                fontWeight: "500",
              }}
            >
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{
                  width: "15px",
                  height: "15px",
                  accentColor: COLORS.primary,
                  cursor: "pointer",
                }}
              />
              <span>Se souvenir de moi</span>
            </label>
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
                : `linear-gradient(135deg, ${COLORS.primary}, #1248c7)`,
              color: "#ffffff",
              fontSize: "15px",
              fontWeight: "700",
              cursor: loading ? "not-allowed" : "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              boxShadow: `0 8px 20px ${COLORS.primary}30`,
            }}
          >
            <span>{loading ? "Connexion en cours..." : "Se connecter"}</span>
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
              margin: "0 0 10px",
              fontSize: "14px",
              color: COLORS.text,
            }}
          >
            Pas encore de compte ?{" "}
            <Link
              to="/register"
              style={{
                color: COLORS.primary,
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              Créer un compte
            </Link>
          </p>

          <Link
            to="/politique-confidentialite"
            style={{
              fontSize: "12px",
              fontWeight: "600",
              color: COLORS.secondary,
              textDecoration: "none",
            }}
          >
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </div>
    <FooterGlobal />
    </>
  );
}