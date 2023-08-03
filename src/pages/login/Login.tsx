import { Box, Button, CardMedia, Container, Grid, Stack, Typography } from '@mui/material';
import cybellumSign from 'assets/images/login/cybellum-sign.svg';
import monitor from 'assets/images/login/imac-dig-twins.png';
import LoginForm, { LoginInput } from 'components/login/LoginForm';

const bottomLinks = {
  'Privacy policy': '/privacy-policy',
  'Terms of use': '/terms-of-use',
  'Contact us': '/contact-us',
};

export default function Login() {
  const handleSubmit = async (values: LoginInput) => {
    console.log(values);
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
              <LoginForm onSubmit={handleSubmit} />
            </Box>
          </Grid>
          <Grid item xs={6} sx={{ display: { xs: 'none', md: 'block' } }}>
            <CardMedia component="img" alt="Digital Twins" image={monitor} sx={{ width: '48vw', mb: { xl: -21 } }} />
          </Grid>
        </Grid>
      </Box>

      <Stack direction="row" spacing={6.5}>
        {Object.keys(bottomLinks).map((link) => (
          <Button key={link}>{link}</Button>
        ))}
      </Stack>
    </Container>
  );
}
