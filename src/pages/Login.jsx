import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem('aiden-role');
    navigate('/dashboard');
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-100 p-4">
      <article className="w-full max-w-5xl bg-slate-900 rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 border border-slate-800">

        <section className="p-8 sm:p-12 flex flex-col justify-between">
          <header className="mb-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-white mb-2">Bienvenido</h1>
            <p className="text-slate-400 text-sm">Ingresa tus credenciales para acceder a tu panel.</p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">
            <fieldset className="space-y-4 border-0 p-0 m-0">
              <legend className="sr-only">Credenciales de acceso</legend>
              
              <section>
                <label htmlFor="correo" className="block text-sm font-medium text-slate-300 mb-1">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="correo"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  placeholder="carlos@vivero.com"
                  required
                  className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                />
              </section>

              <section>
                <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-1">
                  Contraseña
                </label>

                <section className="relative">
                  <input
                    type={mostrarPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setMostrarPassword(!mostrarPassword)}
                    aria-label={mostrarPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white transition"
                  >
                    {mostrarPassword ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path><line x1="2" x2="22" y1="2" y2="22"></line></svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    )}
                  </button>
                </section>
              </section>
            </fieldset>

            <nav className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded bg-slate-800 border-slate-700 text-emerald-600 focus:ring-emerald-500" />
                <span className="text-slate-300">Recordarme</span>
              </label>
              <Link to="/recuperacion" className="text-emerald-400 hover:text-emerald-300 transition">
                Olvidé mi contraseña
              </Link>
            </nav>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-emerald-500/20 transition duration-200"
            >
              Iniciar Sesión
            </button>
          </form>

          <footer className="mt-8 text-center text-sm text-slate-400 space-y-3">
            <p>
              ¿No tienes cuenta?{' '}
              <Link to="/signup" className="text-emerald-400 hover:text-emerald-300 font-medium">
                Crear cuenta
              </Link>
            </p>
            <p>
              <Link to="/" className="text-slate-500 hover:text-slate-300 transition inline-flex items-center gap-1">
                &larr; Volver al inicio
              </Link>
            </p>
          </footer>
        </section>

        <aside className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-emerald-900/40 via-slate-900 to-slate-900 p-12 relative border-l border-slate-800">
          <header>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium border border-emerald-500/20">
              <span>🍃</span> AiDEN
            </span>
          </header>
          <section className="space-y-4 my-auto">
            <h2 className="text-2xl font-bold text-white leading-snug">
              Inteligencia artificial para la gestión de viveros
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Accede para administrar lotes, monitorear sensores, registrar insumos y consultar reportes operativos en tiempo real.
            </p>
          </section>
          <footer>
            <small className="text-xs text-slate-500">
              © 2026 Sistema Inteligente AiDEN
            </small>
          </footer>
        </aside>

      </article>
    </main>
  );
}