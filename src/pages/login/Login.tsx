import { Box, Button, CardMedia, Container, Grid, Stack, Typography } from '@mui/material';
import { useLoginMutation } from 'api/auth/auth';
import { useAppDispatch } from 'app/store';
import cybellumSign from 'assets/images/login/cybellum-sign.svg';
import monitor from 'assets/images/login/imac-dig-twins.png';
import LoginForm, { LoginInput } from 'components/login/LoginForm';
import { useNavigate } from 'react-router-dom';
import { setUser } from 'slices/user/userSlice';

const bottomLinks = {
  'Privacy policy': '/privacy-policy',
  'Terms of use': '/terms-of-use',
  'Contact us': '/contact-us',
};

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login, { isLoading, error }] = useLoginMutation();

  const handleSubmit = async (values: LoginInput) => {
    try {
      const response = await login(values).unwrap();
      dispatch(setUser(response));
      navigate('/');
    } catch {}
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ minHeight: 'calc(100vh - 75px)', pt: 5, pb: 7 }} display="flex" alignItems="center">
        <Grid container spacing={0} alignItems="center">
          <Grid item xs={12} md={6}>
            <CardMedia component="img" alt="Cybellum" image={cybellumSign} sx={{ width: 151 }} />

            <Typography component="h1" variant="h2" sx={{ mt: 4 }}>
              Welcome to the <div>Product Security Platform</div>
            </Typography>

            <Box sx={{ my: 4.5, maxWidth: '25rem' }}>
              <LoginForm loading={isLoading} error={error as Error} onSubmit={handleSubmit} />
            </Box>
          </Grid>
          <Grid item xs={6} sx={{ display: { xs: 'none', md: 'block' } }}>
            <CardMedia component="img" alt="Digital Twins" image={monitor} sx={{ width: '48vw', mb: { xl: -21 }, userSelect: 'none' }} />
          </Grid>
        </Grid>
      </Box>

      <Stack direction="row" spacing={6.5}>
        {Object.entries(bottomLinks).map(([title, link]) => (
          <Button href={link} key={link}>
            {title}
          </Button>
        ))}
      </Stack>
    </Container>
  );
}
