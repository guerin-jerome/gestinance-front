import { Button } from '../../../components';
import { BasicPageProps } from '../../../types/BasicPageProps';

export const NotFound = ({ onClick }: BasicPageProps) => {
  return (
    <section className="not-found-container">
      <h1>Not found</h1>
      <p>Please click on button to redirect at home.</p>
      <Button name="Redirect" onClick={onClick} />
    </section>
  );
};
