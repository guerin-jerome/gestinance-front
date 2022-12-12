import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../../../setupTests';
import { NotFoundContainer } from '../container';

describe('<NotFoundContainer />', () => {
  it('it loads', async () => {
    // ARRANGE
    renderWithRouter(<NotFoundContainer />);

    // ACT
    await screen.findByRole('heading');
    await screen.findByText('Please click on button to redirect at home.');
    await screen.findByRole('button');

    // ASSERT
    expect(screen.getByRole('heading')).toHaveTextContent('Not found');
    expect(
      screen.getByText('Please click on button to redirect at home.')
    ).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Redirect');
  });

  it('navigate', async () => {
    // ARRANGE
    renderWithRouter(<NotFoundContainer />);

    // ACT
    await screen.findByRole('button');
    userEvent.click(screen.getByRole('button', { name: 'Redirect' }));

    // ASSERT
    expect(location.pathname).toEqual('/authenticate/login');
  });
});
