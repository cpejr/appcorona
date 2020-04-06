import React, { useEffect, useState } from 'react';
import './styles.css';
import { useParams, Redirect } from 'react-router-dom';
import api from '../../services/api';

export default function Login() {

  const [token, setToken] = useState();

  let { senha } = useParams();


  useEffect(() => {

    async function login() {
      try {
        let response = await api.post(`session/${senha}`);

        setToken(response.data.accessToken);

      } catch (err) {
        alert('acesso negado');
      }
    }

    login();
  }, [senha]);

  return (
    <div>
      {token ? <Redirect to={{
        pathname: "/pendings",
        state: { token: token }
      }} /> : <h1>Acesso Negado</h1>}
    </div>
  );
}

