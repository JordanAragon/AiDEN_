import { Leaf, Mail, ArrowLeft, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
            <form onSubmit={handleSubmit}>
              <span className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 mx-auto text-emerald-700 inline-flex">
                <Mail size={22} />
              </span>

              <h1 className="text-2xl font-bold text-slate-900 mb-2 text-center">
                Recuperar Contraseña
              </h1>
              <p className="text-sm text-slate-500 text-center mb-8 leading-relaxed">
                Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
              </p>

              <section className="space-y-4">
                <section className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-700">Correo Electrónico</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 text-sm"
                    placeholder="tu@vivero.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </section>

                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-lg text-sm transition-colors flex justify-center"
                >
                  Enviar Enlace de Recuperación
                </button>
              </section>
            </form>
          ) : (
            <section className="text-center">
              <span className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 mx-auto text-emerald-700 inline-flex">
                <CheckCircle2 size={22} />
              </span>
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                Enlace enviado
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                Hemos enviado un correo a <strong>{email || "tu@vivero.com"}</strong> con las instrucciones para restablecer tu contraseña.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="w-full py-2.5 px-4 border border-slate-300 hover:bg-slate-50 rounded-lg text-sm font-semibold text-slate-700 transition-colors"
              >
                Enviar de nuevo
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