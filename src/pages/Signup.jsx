import { useState } from "react";
import { Leaf, Eye, EyeOff } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import loginImage from "../assets/imagenes/login.png";
import { register } from "../utilidades/autenticacion";

export default function Register() {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    if (password.length < 8)
      return setError("La contraseña debe tener al menos 8 caracteres.");
    if (password !== confirmPassword)
      return setError("Las contraseñas no coinciden.");
    if (!accepted)
      return setError(
        "Debes aceptar los términos de uso y la política de privacidad.",
      );

    const result = register({ name, email, password });
    if (!result.ok) return setError(result.message);
    navigate("/login", { replace: true, state: { registered: true } });
  };

  return (
    <main className="min-h-screen flex bg-white font-sans text-slate-800">
      <aside className="hidden lg:flex flex-col flex-1 relative overflow-hidden">
        <img
          src={loginImage}
          alt="Invernadero agrícola"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <section
          className="absolute inset-0 bg-gradient-to-br from-emerald-800/85 via-emerald-900/80 to-emerald-950/90"
          aria-hidden="true"
        />
        <section className="relative z-10 flex flex-col h-full p-12">
          <header className="flex items-center gap-2 mb-auto">
            <span className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur">
              <Leaf size={18} className="text-white" />
            </span>
            <span className="font-bold text-white text-2xl tracking-tight">
              AiDEN
            </span>
          </header>
          <article className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
              Empieza a gestionar tu vivero hoy
            </h2>
            <p className="text-white/75 text-lg leading-relaxed max-w-sm">
              Crea tu cuenta y accede a las herramientas operativas de AiDEN.
            </p>
          </article>
        </section>
      </aside>

      <section className="flex flex-col justify-center flex-1 max-w-md w-full mx-auto px-8 py-12">
        <header className="mb-8 lg:hidden flex items-center gap-2">
          <span className="w-8 h-8 bg-emerald-700 rounded-lg flex items-center justify-center">
            <Leaf size={15} className="text-white" />
          </span>
          <span className="font-bold text-emerald-700 text-lg tracking-tight">
            AiDEN
          </span>
        </header>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Crear cuenta</h1>
        <p className="text-slate-500 mb-8 text-sm">
          Completa el formulario para crear tu acceso a AiDEN.
        </p>
        {error && (
          <p
            role="alert"
            className="mb-5 rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-700"
          >
            {error}
          </p>
        )}

        <form className="space-y-4" onSubmit={handleRegister}>
          <section className="flex flex-col gap-1.5">
            <label
              htmlFor="name"
              className="text-sm font-medium text-slate-700"
            >
              Nombre Completo
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              className="w-full px-3 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 text-sm"
              placeholder="María González Torres"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </section>
          <section className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-700"
            >
              Correo Electrónico
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              className="w-full px-3 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 text-sm"
              placeholder="maria@vivero.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </section>
          <section className="flex flex-col gap-1.5">
            <label
              htmlFor="password"
              className="text-sm font-medium text-slate-700"
            >
              Contraseña
            </label>
            <section className="relative">
              <input
                id="password"
                type={showPass ? "text" : "password"}
                autoComplete="new-password"
                className="w-full px-3 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 text-sm pr-10"
                placeholder="Mínimo 8 caracteres"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-emerald-700 transition-colors"
                aria-label={
                  showPass ? "Ocultar contraseña" : "Mostrar contraseña"
                }
              >
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </section>
          </section>
          <section className="flex flex-col gap-1.5">
            <label
              htmlFor="confirm-password"
              className="text-sm font-medium text-slate-700"
            >
              Confirmar Contraseña
            </label>
            <section className="relative">
              <input
                id="confirm-password"
                type={showConfirm ? "text" : "password"}
                autoComplete="new-password"
                className="w-full px-3 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 text-sm pr-10"
                placeholder="Repite tu contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={8}
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-emerald-700 transition-colors"
                aria-label={
                  showConfirm ? "Ocultar contraseña" : "Mostrar contraseña"
                }
              >
                {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </section>
          </section>
          <section className="flex items-start gap-2 pt-1">
            <input
              id="legal"
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className="mt-0.5 w-4 h-4 accent-emerald-600 rounded"
              required
            />
            <label
              htmlFor="legal"
              className="text-xs text-slate-500 leading-relaxed"
            >
              Acepto los{" "}
              <Link to="/terminos" className="text-emerald-600 hover:underline">
                Términos de Uso
              </Link>{" "}
              y la{" "}
              <Link
                to="/privacidad"
                className="text-emerald-600 hover:underline"
              >
                Política de Privacidad
              </Link>{" "}
              de AiDEN.
            </label>
          </section>
          <button
            type="submit"
            className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-lg text-sm transition-colors flex justify-center"
          >
            Crear Cuenta
          </button>
        </form>
        <p className="text-center mt-6 text-sm text-slate-500">
          ¿Ya tienes cuenta?{" "}
          <Link
            to="/login"
            className="text-emerald-600 hover:text-emerald-800 font-medium transition-colors"
          >
            Iniciar Sesión
          </Link>
        </p>
        <Link
          to="/"
          className="text-center mt-4 text-xs text-slate-400 hover:text-emerald-700 transition-colors block"
        >
          ← Volver al inicio
        </Link>
      </section>
    </main>
  );
}
