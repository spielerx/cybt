/* eslint-disable testing-library/no-node-access */
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from './LoginForm';

describe('Login Component', () => {
  test('should be rendered', async () => {
    render(<LoginForm />);
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
  });

  test('should validate form and prevent submission', async () => {
    const spySubmit = jest.fn();
    render(<LoginForm onSubmit={spySubmit} />);

    userEvent.type(screen.getByLabelText('Username'), 'test@@@@.com');

    userEvent.click(await screen.findByRole('button', { name: /Log in/i }));

    expect(await screen.findByText('Username is invalid')).toBeInTheDocument();
    expect(spySubmit).toHaveBeenCalledTimes(0);
  });

  test('should be processed and return form data', async () => {
    const spySubmit = jest.fn();
    render(<LoginForm onSubmit={spySubmit} />);

    const fields = {
      email: 'correct@email.com',
      password: 'password123',
    };
    userEvent.type(screen.getByLabelText('Username'), fields.email);
    userEvent.type(screen.getByLabelText('Password'), fields.password);

    userEvent.click(await screen.findByRole('button', { name: /Log in/i }));

    await waitFor(() => expect(spySubmit).toHaveBeenCalledWith(fields));
  });
});
