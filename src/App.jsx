import './App.css'
import ItemListContainer from './ItemListContainer';
import NavBar from './NavBar';
import CicloComponentes from './CicloComponentes';
import Layout from './Layout';
import UseRefejemplo from './UseRefejemplo';
import RefVideoejemplo from './RefVideoejemplo';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Cursos de React JS"/>
      <CicloComponentes />
      <Layout title="Mi Componente">
        <h4>Subtítulo</h4>
        <p>Este es el contenido proyectado con children.</p>
        <p>Login Funcionando</p>
      </Layout>
      <UseRefejemplo />
      <RefVideoejemplo />
    </>
  );
}

export default App
