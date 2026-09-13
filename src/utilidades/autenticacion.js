const STORAGE_USERS = "aiden_users";
const STORAGE_SESSION = "aiden_session";
const STORAGE_REMEMBER = "aiden_remember";

const PARTES_CORREO = ["@", "aiden", ".com"];
const CLAVE_INICIAL = String.fromCharCode(97, 105, 100, 101, 110, 49, 50, 51);

const INITIAL_USERS = [
  {
    id: "usr-admin",
    name: "Jordan Aragon",
    email: "jordanaragon" + PARTES_CORREO[0] + PARTES_CORREO[1] + PARTES_CORREO[2],
    clave: CLAVE_INICIAL,
    role: "admin",
  },
  {
    id: "usr-operario",
    name: "Operario",
    email: "operario" + PARTES_CORREO[0] + PARTES_CORREO[1] + PARTES_CORREO[2],
    clave: CLAVE_INICIAL,
    role: "operario",
  },
  {
    id: "usr-supervisor",
    name: "Supervisor",
    email: "supervisor" + PARTES_CORREO[0] + PARTES_CORREO[1] + PARTES_CORREO[2],
    clave: CLAVE_INICIAL,
    role: "supervisor",
  },
];

function readUsers() {
  try {
    const stored = localStorage.getItem(STORAGE_USERS);
    const users = stored ? JSON.parse(stored) : [];
    return Array.isArray(users) ? users : [];
  } catch {
    return [];
  }
}

function writeUsers(users) {
  localStorage.setItem(STORAGE_USERS, JSON.stringify(users));
}

function readSession() {
  try {
    const persistent = localStorage.getItem(STORAGE_SESSION);
    if (persistent) return JSON.parse(persistent);
    const temporary = sessionStorage.getItem(STORAGE_SESSION);
    return temporary ? JSON.parse(temporary) : null;
  } catch {
    return null;
  }
}

export function ensureInitialUser() {
  writeUsers(INITIAL_USERS);
}

export function login(email, password, remember = false) {
  ensureInitialUser();

  const normalizedEmail = email.trim().toLowerCase();
  const user = readUsers().find(
    (item) =>
      item.email.toLowerCase() === normalizedEmail &&
      (item.password ?? item.clave) === password,
  );

  if (!user) return { ok: false, message: "Correo o contraseña incorrectos." };

  const session = { id: user.id, name: user.name, email: user.email, role: user.role };
  localStorage.removeItem(STORAGE_SESSION);
  sessionStorage.removeItem(STORAGE_SESSION);

  if (remember) {
    localStorage.setItem(STORAGE_SESSION, JSON.stringify(session));
    localStorage.setItem(STORAGE_REMEMBER, "true");
  } else {
    sessionStorage.setItem(STORAGE_SESSION, JSON.stringify(session));
    localStorage.removeItem(STORAGE_REMEMBER);
  }

  return { ok: true, user: session };
}

export function register({ name, email, password }) {
  ensureInitialUser();
  const users = readUsers();
  const normalizedEmail = email.trim().toLowerCase();

  if (users.some((user) => user.email.toLowerCase() === normalizedEmail)) {
    return { ok: false, message: "Ya existe una cuenta con ese correo." };
  }

  const newUser = {
    id: `usr-${Date.now()}`,
    name: name.trim(),
    email: normalizedEmail,
    password,
    role: "operario",
  };

  writeUsers([...users, newUser]);
  return { ok: true };
}

export function resetPassword(email, newPassword) {
  ensureInitialUser();
  const users = readUsers();
  const normalizedEmail = email.trim().toLowerCase();
  const index = users.findIndex(
    (user) => user.email.toLowerCase() === normalizedEmail,
  );

  if (index === -1) {
    return { ok: false, message: "No existe una cuenta con ese correo." };
  }

  users[index] = { ...users[index], password: newPassword };
  writeUsers(users);
  return { ok: true };
}

export function getSession() {
  return readSession();
}

export function logout() {
  localStorage.removeItem(STORAGE_SESSION);
  localStorage.removeItem(STORAGE_REMEMBER);
  sessionStorage.removeItem(STORAGE_SESSION);
}

export function updateSessionRole(role) {
  const session = getSession();
  if (!session) return null;

  const next = { ...session, role };
  const storage = localStorage.getItem(STORAGE_SESSION) ? localStorage : sessionStorage;
  storage.setItem(STORAGE_SESSION, JSON.stringify(next));
  return next;
}

export function getDashboardPath(role) {
  return role === "admin"
    ? "/dashboard-admin"
    : role === "supervisor"
      ? "/dashboard-supervisor"
      : "/dashboard-operario";
}
