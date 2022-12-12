import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextField } from '../textField';

describe('<TextField />', () => {
  it('basic', async () => {
    // ARRANGE
    render(<TextField name="Write me" />);

    // ACT
    await screen.findByRole('textbox');
    const textBox = screen.getByRole('textbox');
    userEvent.type(textBox, 'Test type');

    // ASSERT
    expect(textBox).toHaveProperty('type', 'text');
    expect(textBox).toHaveProperty('id', 'Write me');
    expect(textBox).toHaveProperty('name', 'Write me');
    expect(textBox).toHaveProperty('value', 'Test type');
    expect(textBox).toHaveClass('medium');
  });

  it('small', async () => {
    // ARRANGE
    render(<TextField name="Write me" size="small" />);

    // ACT
    await screen.findByRole('textbox');

    // ASSERT
    expect(screen.getByRole('textbox')).toHaveClass('small');
  });

  it('large', async () => {
    // ARRANGE
    render(<TextField name="Write me" size="large" />);

    // ACT
    await screen.findByRole('textbox');

    // ASSERT
    expect(screen.getByRole('textbox')).toHaveClass('large');
  });

  it('onChange', async () => {
    // ARRANGE
    const onChange = jest.fn();
    render(<TextField name="Write me" onChange={onChange} />);

    // ACT
    await screen.findByRole('textbox');
    userEvent.type(screen.getByRole('textbox'), 'Test');

    // ASSERT
    expect(onChange).toHaveBeenCalledTimes(4);
  });

  it('placeholder', async () => {
    // ARRANGE
    render(<TextField name="Write me" placeholder="Test" />);

    // ACT
    await screen.findByRole('textbox');

    // ASSERT
    expect(screen.getByRole('textbox')).toHaveProperty('placeholder', 'Test');
  });

  it('disabled', async () => {
    // ARRANGE
    render(<TextField name="Write me" disabled />);

    // ACT
    await screen.findByRole('textbox');

    // ASSERT
    const textbox = screen.getByRole('textbox');
    expect(textbox).toBeDisabled();
    expect(textbox).toHaveClass('disabled');
  });

  it('invalid', async () => {
    // ARRANGE
    render(<TextField name="Write me" invalid />);

    // ACT
    await screen.findByRole('textbox');

    // ASSERT
    expect(screen.getByRole('textbox')).toHaveClass('invalid');
  });

  it('maxLength', async () => {
    // ARRANGE
    render(<TextField name="Write me" maxLength={1} />);

    // ACT
    await screen.findByRole('textbox');
    const textbox = screen.getByRole('textbox');
    userEvent.type(textbox, 'Test');

    // ASSERT
    expect(textbox).toHaveAttribute('maxLength', '1');
    expect(textbox).toHaveAttribute('value', 'T');
  });

  it('maxLength', async () => {
    // ARRANGE
    render(<TextField name="Write me" minLength={1} />);

    // ACT
    await screen.findByRole('textbox');

    // ASSERT
    expect(screen.getByRole('textbox')).toHaveAttribute('minLength', '1');
  });

  it('label', async () => {
    // ARRANGE
    render(<TextField name="Write me" label="Test label" />);

    // ACT
    await screen.findByRole('textbox');

    // ASSERT
    expect(screen.getByText('Test label')).toBeInTheDocument();
  });

  it('label with required', async () => {
    // ARRANGE
    render(<TextField name="Write me" label="Test label" required />);

    // ACT
    await screen.findByRole('textbox');

    // ASSERT
    expect(screen.getByText('Test label')).toBeInTheDocument();
    expect(screen.getByText('*')).toBeInTheDocument();
  });
});
