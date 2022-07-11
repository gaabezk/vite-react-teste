import "./style.css";
import api from "../../services/api";
import { useState } from "react";

export default function App() {

  const [nome,setNome] = useState<string>();
  const [senha,setSenha] = useState<string>();

  function fazerLogin(e:any) {
    e.preventDefault();
    api.post('login', {
        username: `${nome}`,
        password: `${senha}`
    },
        {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        },
    )
        .then(response => {
            console.log(response.data)
            console.log("deu certo")
        })
        .catch(error => {
          console.log(error)
          console.log("deu merda")
        })
        
}

  return (
    <div className="body">
      <form  onSubmit={fazerLogin}>
        <input type="text" placeholder="Usuario" onChange={(e) => setNome(e.target.value)} />
        <br/>
        <input type="text" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
        <br/>
        <input type="submit"/>
      </form>
    </div>
  );
}
