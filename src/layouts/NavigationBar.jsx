import React, { useState } from "react";
import { Container, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  const [isAuthenticated, setIsAuthenticated] = useState(window.sessionStorage.getItem("userid") != null);
  const history = useHistory();

  function handleSignOut() {
    window.sessionStorage.clear();
    setIsAuthenticated(false);
    window.location.replace("/login");
  }
  function handleSignIn() {
    setIsAuthenticated(true);
  }
  return (
    <div>
      <Menu inverted fixed="top" size="small">
        <Container>
          <Menu.Item style={{display : window.sessionStorage.getItem("userid") != null ? "inherit":"none"}}>
            <Link to="/">Accueil</Link>
          </Menu.Item>
          <Menu.Item  style={{display : window.sessionStorage.getItem("userid") != null ? "inherit":"none"}}>
            <Link to="/my-history">Historique</Link>
          </Menu.Item>

          <Menu.Menu position="right">
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
          </Menu.Menu>
          
          <Menu.Item style={{display : window.sessionStorage.getItem("userid") != null ? "inherit":"none"}}>
            <Link to="/about">À propos</Link>
          </Menu.Item>
          
        </Container>
      </Menu>
    </div>
  );
}
