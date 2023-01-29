import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import MuiToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const ToggleButton = styled(MuiToggleButton)({
  "&.Mui-selected, &.Mui-selected:hover": {
    color: "white",
    backgroundColor: 'green',
    // borderRadius: 20
  },
  "&.MuiToggleButton-root": {
    color: "#8D8D8D",
    // borderRadius: 20
  },
  "&.Mui-selected": {
    color: "white",
    backgroundColor: 'green',
    // borderRadius: 20
  },
  "&.MuiToggleButton-standard": {
    borderRadius: 20
  }
});


export default function SwitchContainer(props) {
  const { onChange, value, width, height, name, left, right, headerName } = props
  let defaultCase = 'left'
  if (value === right) {
    defaultCase = 'right'
  }
  const handleChange = (event) => {
    onChange(event)
  };
  const [alignment, setAlignment] = React.useState(defaultCase);

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment || defaultCase);
    if (newAlignment === 'left') {
      onChange(left)
    } else {
      onChange(right)
    }
  };

  return (
    <div style={{ width: width, }}>
      <FormControl sx={{ width: width, pr: 1, mb: 2 }}>
        <Typography sx={{
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "21px",
          "&.MuiButtonBase-root:hover": {
            bgcolor: "transparent"
          },
        }}
        >
          {headerName}{props.required ? "*" : ""}
        </Typography>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton
            value="left"
            aria-label="left aligned"
            sx={{
              "&.Mui-selected, &.Mui-selected:hover": {
                color: "white ",
                backgroundColor: '#24352F',
              },
              "&.MuiToggleButton-root": {
                color: "#8D8D8D",
              },
              "&.Mui-selected": {
                color: "white",
                backgroundColor: '#24352F',
              }
            }}
          >
            {left}
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned" selectedColor="pink">
            {right}
          </ToggleButton>
        </ToggleButtonGroup>
      </FormControl>
    </div>
  );
}