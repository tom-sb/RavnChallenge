import { Base, Main } from '../../components/template/base';
import Dashboard from './dashboard';

export default function DashboardView() {
  //todo verifica si en el otro proyecto se importa el componente Base y como
  return (
      <Base>
        <Main>
          <Dashboard />
        </Main>
      </Base>
  );
}
