import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.includes(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectPlaceholder(props) {
  const { options, placeholder, onChange, value, width, height, name } = props;
  const theme = useTheme();
  const handleChange = (event) => {
    onChange(event)
  };

  return (
    <div style={{width: width,}}>
      <FormControl sx={{ width: width, pr: 1, }}>
        {name &&
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "21px",
              "&.MuiButtonBase-root:hover": {
                bgcolor: "transparent"
              }
            }}
          >
            {name}{props.required ? "*" : ""}
          </Typography>
        }
        <Select
          {...props}
          displayEmpty
          value={value}
          sx={{
            height: height,
          }}
          onChange={handleChange}
          input={<OutlinedInput />}
          MenuProps={MenuProps}

          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>{placeholder}</em>
          </MenuItem>
          {options.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, value, theme)}
              className="select__name"
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}