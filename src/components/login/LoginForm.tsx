import { Button, TextField } from '@mui/material';

export default function LoginForm() {
  return (
    <>
      <TextField label="Username" value="alma.lawson@example.com" />
      <TextField label="Password" type="password" sx={{ mt: 3.5 }} />
      <Button size="small">Forgot your password?</Button>
      <Button variant="contained" fullWidth sx={{ mt: 5.6, mb: 4, clear: 'both' }}>
        Log in
      </Button>
    </>
  );
}
