import { Card, CardContent, Typography } from '@mui/material';
import { useAppSelector } from 'app/store';
import logo from 'assets/images/cybellum-logo-vertical-black.svg';
import Notifications from 'components/user/Notifications';
import { selectCurrentUser } from 'slices/user/userSlice';
import Styled from './intro.styled';

export default function Intro() {
  const isAuthenticated = useAppSelector(selectCurrentUser);

  return (
    <Styled.Box>
      {isAuthenticated ? (
        <Notifications />
      ) : (
        <Card sx={{ maxWidth: 345, textAlign: 'center' }}>
          <CardContent>
            <Styled.CardMedia component="img" alt="Cybellum" image={logo} />
            <Typography gutterBottom variant="h5" component="div" sx={{ mt: 4 }}>
              Cybellum Exercise
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Please read README.md and follow the instructions there
            </Typography>
          </CardContent>
        </Card>
      )}
    </Styled.Box>
  );
}
