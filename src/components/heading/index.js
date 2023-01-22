import React from 'react';
import IconButton from '@mui/material/IconButton';
import './heading.css'
import Add from '@mui/icons-material/Add';
import { Typography } from '@mui/material';

export default function Heading(props) {
  const { text, buttons } = props
  const icons = (text, color) => {
    switch (text) {
      case "Add":
        return <Add style={{ color }} />
      default:
        return <Add style={{ color }} />
    }
  }
  return (
    <div className='heading__container'>
      <div className='heading__text'>{text}</div>
      <div className='heading__buttons'>
        {buttons.map((button, index) => (
          <IconButton
            key={`heading__text_${index}`}
            sx={{ background: button.color, borderRadius: 2, marginLeft: 1 }}
          >
            {icons(button.icon, button.headingColor)}
            <Typography sx={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              // fontWeight: 600,
              fontSize: '16px',
              lineHeight: '24px',
              color: button.headingColor
            }}>
              {button.text}
            </Typography>
          </IconButton>
        ))}
      </div>

    </div>
  )
}