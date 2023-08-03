import { zodResolver } from '@hookform/resolvers/zod';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Box, Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const loginSchema = z.object({
  email: z.string().nonempty('Username is required').email('Username is invalid'),
  password: z.string().nonempty('Password is required').min(8, 'Password must be more than 8 characters').max(32, 'Password must be less than 32 characters'),
});

export type LoginInput = z.TypeOf<typeof loginSchema>;

interface LoginFormProps {
  loading?: boolean;
  error?: Error;
  onSubmit?: (values: LoginInput) => void;
}

export default function LoginForm({ loading, error, onSubmit }: LoginFormProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: 'alma.lawson@example.com',
      // password: 'password',
    },
  });

  return (
    <Box component="form" onSubmit={handleSubmit((values) => onSubmit?.(values))} noValidate>
      <TextField
        sx={{ minHeight: '6rem' }}
        label="Username"
        autoComplete="email"
        autoFocus
        error={!!errors['email']}
        helperText={errors['email'] ? errors['email'].message : ''}
        InputProps={
          errors['email'] && {
            endAdornment: <ErrorOutlineIcon color="error" />,
          }
        }
        {...register('email')}
      />
      <TextField
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        error={!!errors['password']}
        helperText={errors['password'] ? errors['password'].message : ''}
        InputProps={
          errors['password'] && {
            endAdornment: <ErrorOutlineIcon color="error" />,
          }
        }
        {...register('password')}
      />

      <Button size="small">Forgot your password?</Button>
      <Button type="submit" variant="contained" color="secondary" fullWidth sx={{ mt: 5.6, mb: 4, clear: 'both' }}>
        Log in
      </Button>
    </Box>
  );
}
