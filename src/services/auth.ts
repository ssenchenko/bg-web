const auth = {
  isAuthenticated: false,
  authenticate(callback: (...credentials: string[]) => void) {
    auth.isAuthenticated = true;
    setTimeout(callback, 100); // fake async
  },
  signOut(callback: (...credentials: string[]) => void) {
    auth.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

export default auth;
