import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import ImageUploading from 'react-images-uploading';
import "./ImageUpload.css";

function ImageUpload(props) {
  // const [image, setImage] = useState(null);
  // console.log('props12321', props)
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList) => {
    // data for submit
    props.onChange(imageList)
    setImages(imageList);
  };
  // console.log("props.value", props.value)
  useEffect(() => {
    if (typeof props.value === 'string' && props.value !== '') {
      setImages([{ "data_url": props.value }]);
    }
  }, [props.value])

  return (
    <div className="image-upload-container">
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
          {props.headerName}{props.required ? "*": ""}
        </Typography>
      <ImageUploading
        multiple={false}
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <Box sx={{
              height: 30
            }}>
              {!props.disabled &&
                <button
                  // style={isDragging ? { color: 'red' } : undefined}
                  style={{ position: 'absolute', borderWidth: "0px" }}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  <svg width="30" height="30" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_64_3542)">
                      <circle cx="33.5" cy="32.5" r="29.5" fill="white" />
                    </g>
                    <path d="M34 39.875C35.5625 39.875 36.8908 39.3283 37.985 38.235C39.0783 37.1408 39.625 35.8125 39.625 34.25C39.625 32.6875 39.0783 31.3592 37.985 30.265C36.8908 29.1717 35.5625 28.625 34 28.625C32.4375 28.625 31.1092 29.1717 30.015 30.265C28.9217 31.3592 28.375 32.6875 28.375 34.25C28.375 35.8125 28.9217 37.1408 30.015 38.235C31.1092 39.3283 32.4375 39.875 34 39.875ZM34 37.375C33.125 37.375 32.3854 37.0729 31.7813 36.4687C31.1771 35.8646 30.875 35.125 30.875 34.25C30.875 33.375 31.1771 32.6354 31.7813 32.0313C32.3854 31.4271 33.125 31.125 34 31.125C34.875 31.125 35.6146 31.4271 36.2187 32.0313C36.8229 32.6354 37.125 33.375 37.125 34.25C37.125 35.125 36.8229 35.8646 36.2187 36.4687C35.6146 37.0729 34.875 37.375 34 37.375ZM24 44.25C23.3125 44.25 22.7242 44.0054 22.235 43.5163C21.745 43.0263 21.5 42.4375 21.5 41.75V26.75C21.5 26.0625 21.745 25.4742 22.235 24.985C22.7242 24.495 23.3125 24.25 24 24.25H27.9375L30.25 21.75H37.75L40.0625 24.25H44C44.6875 24.25 45.2763 24.495 45.7663 24.985C46.2554 25.4742 46.5 26.0625 46.5 26.75V41.75C46.5 42.4375 46.2554 43.0263 45.7663 43.5163C45.2763 44.0054 44.6875 44.25 44 44.25H24ZM44 41.75V26.75H38.9375L36.6562 24.25H31.3438L29.0625 26.75H24V41.75H44Z" fill="#3EB049" />
                    <defs>
                      <filter id="filter0_d_64_3542" x="0" y="0" width="67" height="67" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_64_3542" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_64_3542" result="shape" />
                      </filter>
                    </defs>
                  </svg>

                </button>
              }

            </Box>

            &nbsp;
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" style={{
                  // width: props.width,
                  height: props.height
                }} />
                {!props.disabled &&

                  <div className="image-item__btn-wrapper">
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                }
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
      {props.error && <div>This field is required</div>}
    </div>
  );
}

export default ImageUpload;