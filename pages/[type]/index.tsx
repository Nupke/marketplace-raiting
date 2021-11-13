import { withLayout } from '../../layout/Layout';
import {MenuItem} from "../../interfaces/menu.interface";


interface TypeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

function Type({ firstCategory }: TypeProps): JSX.Element {

  return (
    <>
      Type: {firstCategory}
    </>
  );
}

export default withLayout(Type);
