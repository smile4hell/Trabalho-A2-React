import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


export default function Copyright(){
  

return(
  <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.youtube.com/watch?v=1Mcdh2Vf2Xk"target="_blank">>
        Gabriel RGM: 25136313
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
)
}