import { render, screen } from '@testing-library/react';
import { Router } from '..';
import { renderWithRouter } from '../../setupTests';

describe('<Routes />', () => {
  it('it loads <NotFound />', async () => {
    // ARRANGE
    window.history.pushState({}, 'Not found page', '/test');
    render(<Router />);

    // ACT
    await screen.findByRole('heading');

    // ASSERT
    expect(screen.getByRole('heading')).toHaveTextContent('Not found');
  });

  it('it loads <Accueil />', async () => {
    // ARRANGE
    window.history.pushState({}, 'Accueil page', '/');
    render(<Router />);

    // ACT
    await screen.findByText('Accueil');

    // ASSERT
    expect(screen.getByText('Accueil')).toBeInTheDocument();
  });

  it('it loads <Authenticate />', async () => {
    // ARRANGE
    window.history.pushState({}, 'Authenticate page', '/authenticate');
    render(<Router />);

    // ACT
    await screen.findByText('Login');

    // ASSERT
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
});
