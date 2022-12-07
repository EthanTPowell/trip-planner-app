import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Map from './Map';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [day, setDay] = React.useState('sunday');
  

//   const { isLoaded } = useLoadScript({googleMapsApiKey: process.env.REACT_APP_GOOGLE_APIKEY})
    const handleSaveButton = () => {
    
    };
    const handleRemoveButton = () => {
        
    };
    
  const handleChange = (e) => {
      setDay(e.target.value)
    }
    
  return (
    <div>
      <Button onClick={handleOpen}>More info</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
          >
                 {/* <Wrapper apiKey={process.env.REACT_APP_GOOGLE_APIKEY} >
                  <Map resultObject={props.resultObject} />
                  </Wrapper> */}
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                  </Typography>
                  <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">day</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={day}
    label="day"
    onChange={handleChange}
  >
    <MenuItem value={'sunday'}>Sunday</MenuItem>
    <MenuItem value={'monday'}>Monday</MenuItem>
    <MenuItem value={'tuesday'}>Tuesday</MenuItem>
    <MenuItem value={'wednesday'}>Wednesday</MenuItem>
    <MenuItem value={'thursday'}>Thursday</MenuItem>
    <MenuItem value={'friday'}>Friday</MenuItem>
    <MenuItem value={'saturday'}>Saturday</MenuItem>
  </Select>
          </FormControl>
          <Button onClick={handleSaveButton()}>Save to day</Button>
          <Button onClick={handleRemoveButton()}>Remove from day</Button>
        </Box>
      </Modal>
    </div>
  );
}
