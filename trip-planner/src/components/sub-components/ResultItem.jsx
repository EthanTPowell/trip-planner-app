import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import BasicModal from './BasicModal';
import { Wrapper, Status } from "@googlemaps/react-wrapper";




export default function ResultItem(props) {



    

    return <>
        
        <Card variant='outlined' sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    { props.resultObject.name }
        </Typography>
        <Typography variant="h5" component="div">
        { props.resultObject.name }
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <Link to={props.resultObject.url}>Website</Link>
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
                    <BasicModal resultObject={props.resultObject} />
                {/* </Wrapper> */}
            </CardActions>
    </Card>
        {/* <div className='resultItemDiv' style={{ "border": "3px solid black" } }>
        <h1>{props.resultObject.name}</h1>
        <h2>{props.resultObject.phone}</h2>
        <h2>{props.resultObject.url}</h2>
        </div> */}
    </>
}





// export default function BasicCard() {
//   return (
//     <Card sx={{ minWidth: 275 }}>
//       <CardContent>
//         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//           Word of the Day
//         </Typography>
//         <Typography variant="h5" component="div">
//           be{bull}nev{bull}o{bull}lent
//         </Typography>
//         <Typography sx={{ mb: 1.5 }} color="text.secondary">
//           adjective
//         </Typography>
//         <Typography variant="body2">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }
