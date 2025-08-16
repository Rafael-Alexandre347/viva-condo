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
      <h1 className="text-2x1 font-semibold text-red-600">{obterSaudacao(morador)}</h1>
    </div>
  );
};

export default Home