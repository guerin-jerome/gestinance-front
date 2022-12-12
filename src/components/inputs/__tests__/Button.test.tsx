import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../button';

describe('<Button />', () => {
  it('basic', async () => {
    // ARRANGE
    render(<Button name="Click me" />);

    // ACT
    await screen.findByRole('button');
    userEvent.click(screen.getByRole('button'));

    // ASSERT
    const buttonDisabled = screen.getByRole('button');
    expect(buttonDisabled).toHaveTextContent('Click me');
    expect(buttonDisabled).toHaveClass('button primary');
  });

  it('disabled', async () => {
    // ARRANGE
    render(<Button name="Click me" disabled />);

    // ACT
    await screen.findByRole('button');

    // ASSERT
    const buttonDisabled = screen.getByRole('button');
    expect(buttonDisabled).toHaveClass('button disabled primary');
    expect(buttonDisabled).toBeDisabled();
  });

  it('loading', async () => {
    // ARRANGE
    render(<Button name="Click me" loading />);

    // ACT
    await screen.findByRole('button');

    // ASSERT
    const buttonDisabled = screen.getByRole('button');
    expect(buttonDisabled).toHaveClass('button disabled primary');
    expect(buttonDisabled).toBeDisabled();
  });

  it('secondary', async () => {
    // ARRANGE
    render(<Button name="Click me" appearance="secondary" />);

    // ACT
    await screen.findByRole('button');

    // ASSERT
    expect(screen.getByRole('button')).toHaveClass('button secondary');
  });

  it('submit', async () => {
    // ARRANGE
    render(<Button name="Click me" type="submit" />);

    // ACT
    await screen.findByRole('button');

    // ASSERT
    expect(screen.getByRole('button')).toHaveProperty('type', 'submit');
  });

  it('with onClick', async () => {
    // ARRANGE
    const onClick = jest.fn();
    render(<Button name="Click me" onClick={onClick} />);

    // ACT
    await screen.findByRole('button');
    userEvent.click(screen.getByRole('button'));

    // ASSERT
    expect(onClick).toBeCalledTimes(1);
  });
});
