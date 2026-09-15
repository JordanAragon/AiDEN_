import { Leaf, Mail, ArrowLeft, CheckCircle2, Lock } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../utilidades/autenticacion";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    const result = resetPassword(email, password);
    if (!result.ok) {
      setError(result.message);
      return;
    }

    setSent(true);
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 font-sans text-slate-800">
      <section className="w-full max-w-sm">
        <header className="flex justify-center mb-8">
          <section className="flex flex-col items-center gap-3">
            <span className="w-12 h-12 bg-emerald-700 rounded-2xl flex items-center justify-center shadow-lg text-white">
              <Leaf size={22} />
            </span>
            <span className="font-bold text-emerald-800 text-xl tracking-tight">
              AiDEN
            </span>
          </section>
        </header>

        <article className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
          {!sent ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <span className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 mx-auto text-emerald-700 inline-flex">
                <Mail size={22} />
              </span>
              <h1 className="text-2xl font-bold text-slate-900 mb-2 text-center">
                Restablecer contraseña
              </h1>
              <p className="text-sm text-slate-500 text-center mb-8 leading-relaxed">
                Ingresa tu correo y define una nueva contraseña para recuperar
                el acceso.
              </p>

              {error && (
                <p
                  role="alert"
                  className="rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-700"
                >
                  {error}
                </p>
              )}

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
                  placeholder="tu@vivero.com"
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
                  Nueva Contraseña
                </label>
                <section className="relative">
                  <Lock
                    size={15}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    id="password"
                    type="password"
                    autoComplete="new-password"
                    className="w-full pl-9 pr-3 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 text-sm"
                    placeholder="Mínimo 8 caracteres"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    minLength={8}
                    required
                  />
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
                  <Lock
                    size={15}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    id="confirm-password"
                    type="password"
                    autoComplete="new-password"
                    className="w-full pl-9 pr-3 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 text-sm"
                    placeholder="Repite la contraseña"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    minLength={8}
                    required
                  />
                </section>
              </section>

              <button
                type="submit"
                className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-lg text-sm transition-colors"
              >
                Actualizar contraseña
              </button>
            </form>
          ) : (
            <section className="text-center">
              <span className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 mx-auto text-emerald-700 inline-flex">
                <CheckCircle2 size={22} />
              </span>
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                Contraseña actualizada
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                Tu contraseña fue actualizada correctamente. Ya puedes iniciar
                sesión con tus nuevas credenciales.
              </p>
              <button
                type="button"
                onClick={() => navigate("/login", { replace: true })}
                className="w-full py-2.5 px-4 bg-emerald-700 hover:bg-emerald-800 rounded-lg text-sm font-semibold text-white transition-colors"
              >
                Ir a iniciar sesión
              </button>
            </section>
          )}
        </article>

        <button
          type="button"
          onClick={() => navigate("/login")}
          className="flex items-center justify-center gap-2 mx-auto mt-6 text-sm text-slate-500 hover:text-emerald-700 transition-colors"
        >
          <ArrowLeft size={15} />
          Volver al inicio de sesión
        </button>
      </section>
    </main>
  );
}
