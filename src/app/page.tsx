import React from "react";

const Home = () => {

  type Morador = {
    primeiroNome: string;
    sobrenome: string;
  }

  function formatarNomeMorador(morador: any) {
    return morador.primeiroNome + ' ' + morador.sobrenome;
  }

  function obterSaudacao(morador: null | Morador){
    if (morador) {
      return <span>Olá, {formatarNomeMorador(morador)}!</span>;
    }
    return <span>Olá, bora bill!!!</span>;
  }

  const morador = {
    primeiroNome: 'Yuri',
    sobrenome: 'Alberto'
  };


  return (
    <div id="principal" className = "min-h-screen flex items-center justify-center bg-black">
	    <div id="componente-azul" className = "card-azul">
		    <h1 id="name" className = "text-2xl font-blod text-center">
			  {obterSaudacao(morador)}
		  </h1>
  	</div>
  </div>
  );
};

export default Home