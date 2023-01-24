import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import './heading.css'
import Add from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Modal from '@mui/material/Modal';


export default function Heading(props) {
  const { text, buttons = [], subHeading } = props
  const [open, setOpen] = useState({});
  const handleOpen = (button) => {
    console.log('button12312', button)
    setOpen(button)
  };
  const handleClose = () => setOpen({});
  const icons = (text, color) => {
    switch (text) {
      case "Add":
        return <Add style={{ color }} />
      default:
        return <Add style={{ color }} />
    }
  }
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

  return (
    <div className='heading__container'>
      <Modal
        open={Object.values(open).length > 0}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
      <div className='heading__text_container'>
        <div className='heading__text'>{text}</div>
        {subHeading && <div className='heading__subheading'>&nbsp;/&nbsp;{subHeading}</div>}
      </div>
      <Box className='heading__buttons' sx={{ mr: 2 }}>
        {buttons.map((button, index) => (
          <IconButton
            key={`heading__text_${index}`}
            sx={{
              background: button.color,
              borderRadius: 2,
              marginLeft: 1,
              "&:hover": { color: "green" }
            }}
            onClick={() => handleOpen(button)}
          >
            {icons(button.icon, button.headingColor)}
            <Typography sx={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              // fontWeight: 600,
              fontSize: '16px',
              lineHeight: '24px',
              color: button.headingColor,
              "&.MuiButtonBase-root:hover": {
                bgcolor: "transparent"
              }
            }}
            >
              {button.text}
            </Typography>
          </IconButton>
        ))}
      </Box>

    </div>
  )
}