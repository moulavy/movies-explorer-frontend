import React from 'react';
import './AuthTitle.css';

function AuthTitle({ title }) {
      return (
            <h1 className="auth-title__text">{title}</h1>
      );
}

export default AuthTitle;