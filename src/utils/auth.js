// Auth
export const auth = JSON.parse(localStorage.getItem("todoApp"));

// Logout function
export function handleLogOut() {
  localStorage.removeItem("todoApp");
  window.location.replace("/login");
}
