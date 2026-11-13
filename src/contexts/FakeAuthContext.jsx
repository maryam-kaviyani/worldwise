import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

function getInitialState() {
  const storedUser = localStorage.getItem("user");

  return {
    user: storedUser ? JSON.parse(storedUser) : null,
    isAuthenticated: Boolean(storedUser),
    error: "",
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    case "error":
      return { ...state, error: action.payload };
    default:
      throw new Error("Unknown action type");
  }
}

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwertys",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    undefined,
    getInitialState,
  );

  function login(email, password) {
    if (FAKE_USER.email === email && FAKE_USER.password === password) {
      const user = {
        name: FAKE_USER.name,
        email: FAKE_USER.email,
        avatar: FAKE_USER.avatar,
      };

      localStorage.setItem("user", JSON.stringify(user));

      dispatch({ type: "login", payload: user });
    }
  }

  function logout() {
    localStorage.removeItem("user");
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside of AuthProvider");
  return context;
}
export { AuthProvider, useAuth };
