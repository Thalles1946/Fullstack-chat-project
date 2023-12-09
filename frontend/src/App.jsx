import { useState } from "react";

import "./App.css";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  function onAuth(user) {
    localStorage.setItem("user", JSON.stringify(user));

    setUser(user);
  }

  if (!user) {
    return <AuthPage onAuth={(user) => onAuth(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;
