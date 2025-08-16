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
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="pt-55 pb-55 pr-75 pl-75 bg-black">
      <h1 className="text-2x1 font-semibold bg-blue-800 p-5 rounded text-white">{obterSaudacao(morador)}</h1>
    </div>
    </div>
  );
};

export default Home