import React from "react";

export default () => {
  return (
    <div className="text-center">
  <h6 className="display-5 text-muted">À propos de la gestion des ressources humaines</h6>
  <hr />
  <div className="logo-container">
    <img src="https://static.thenounproject.com/png/2019477-200.png"  className="logo" />
  </div>
  <h1 className="display-1 text-center text-primary">
    <i className="fas fa-address-book" />
    <br />
    <span className="text-dark display-2">GESTION DES RESSOURCES HUMAINES</span>
  </h1>
  <hr />
  <p className="lead">Une simple application pour la gestion des ressources humaines</p>
  <p className="text-secondary">Version 1.0.0</p>
</div>
  );
};