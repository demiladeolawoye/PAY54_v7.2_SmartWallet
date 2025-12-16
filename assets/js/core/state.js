// state.js — PAY54 v7.2 single source of truth

export const KEYS = {
  USER: "pay54_user",
  SESSION: "pay54_session",
  VERIFIED: "pay54_verified",
  WALLET: "pay54_wallet"
};

export function getUser() {
  const raw = localStorage.getItem(KEYS.USER);
  return raw ? JSON.parse(raw) : null;
}

export function setUser(user) {
  localStorage.setItem(KEYS.USER, JSON.stringify(user));
}

export function setSession() {
  localStorage.setItem(KEYS.SESSION, "1");
}

export function clearSession() {
  localStorage.removeItem(KEYS.SESSION);
}

export function isSessionActive() {
  return localStorage.getItem(KEYS.SESSION) === "1";
}

export function setVerified() {
  localStorage.setItem(KEYS.VERIFIED, "1");
}

export function isVerified() {
  return localStorage.getItem(KEYS.VERIFIED) === "1";
}

export function resetAll() {
  Object.values(KEYS).forEach(k => localStorage.removeItem(k));
}

