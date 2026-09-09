import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmarPassword, setConfirmarPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmarPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    localStorage.removeItem('aiden-role');
    navigate('/dashboard');
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-100 p-4">
      <article className="w-full max-w-5xl bg-slate-900 rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 border border-slate-800">
        
        <section className="p-8 sm:p-12 flex flex-col justify-between">
          <header className="mb-6">
            <h1 className="text-3xl font-extrabold tracking-tight text-white mb-2">Crear cuenta</h1>
            <p className="text-slate-400 text-sm">Completa el formulario para unirte a AiDEN.</p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-4">
            <fieldset className="space-y-3 border-0 p-0 m-0">
              <legend className="sr-only">Datos de registro</legend>
              
              <section>
                <label htmlFor="nombre" className="block text-sm font-medium text-slate-300 mb-1">
                  Nombre Completo
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="María González Torres"
                  required
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition text-sm"
                />
              </section>

              <section>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                  Correo Electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  placeholder="maria@vivero.com"
                  required
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition text-sm"
                />
              </section>

              <section>
                <label htmlFor="pass" className="block text-sm font-medium text-slate-300 mb-1">
                  Contraseña
                </label>
                <input
                  id="pass"
                  name="pass"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mínimo 8 caracteres"
                  required
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition text-sm"
                />
              </section>

              <section>
                <label htmlFor="pass2" className="block text-sm font-medium text-slate-300 mb-1">
                  Confirmar Contraseña
                </label>
                <input
                  id="pass2"
                  name="pass2"
                  type="password"
                  value={confirmarPassword}
                  onChange={(e) => setConfirmarPassword(e.target.value)}
                  placeholder="Repite tu contraseña"
                  required
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition text-sm"
                />
              </section>
            </fieldset>

            <section className="flex items-start space-x-2 pt-1">
              <input 
                type="checkbox" 
                id="check-term" 
                required 
                className="mt-1 w-4 h-4 rounded bg-slate-800 border-slate-700 text-emerald-600 focus:ring-emerald-500" 
              />
              <label htmlFor="check-term" className="text-xs text-slate-300">
                Acepto los <a href="#" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">Términos de Uso</a> y la <a href="#" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">Política de Privacidad</a> de AiDEN.
              </label>
            </section>

            <button 
              type="submit" 
              className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-emerald-500/20 transition duration-200 text-sm"
            >
              Crear Cuenta
            </button>
          </form>

          <footer className="mt-6 text-center text-sm text-slate-400 space-y-2">
            <p>
              ¿Ya tienes cuenta?{' '}
              <Link to="/login" className="text-emerald-400 hover:text-emerald-300 font-medium">
                Iniciar Sesión
              </Link>
            </p>
            <p>
              <Link to="/" className="text-slate-500 hover:text-slate-300 transition inline-flex items-center gap-1 text-xs">
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
              Empieza a gestionar tu vivero hoy
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Crea tu cuenta y accede a todas las herramientas operativas de AiDEN.
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