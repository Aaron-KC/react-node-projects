import { ZoomIn } from '@mui/icons-material'
import { Grid2 } from '@mui/material'
import React from 'react'
import MyDialog from './MyDialog';

const Images = ({ images }) => {
  const [open, setOpen] = React.useState({
    open: false,
    imgsrc: ''
  });

  const handleClickOpen = (img) => {
    setOpen({
      open: true,
      imgsrc: img
    });
  };

  const handleClose = () => {
    setOpen({
      open: false
    });
  };
  return (
    <>
      <Grid2 container spacing={5} padding={2}>
        {
          images?.length > 0 ? images.map((img, i) => {
            return <>
              <Grid2 size={{ xs: 11, md: 4, lg: 3 }} position={'relative'} key={i} height={'340px'}>
              <img src={img.largeImageURL} alt="image" style={{ width: '100%', height: '100%', objectFit: 'cover'}} />
              <div className="overlay">
                <div>
                  {img.tags}
                  <br />
                  By: <strong>{img.user}</strong>
                </div>
                <div>
                  <ZoomIn sx={{ cursor: 'pointer' }} onClick={() => handleClickOpen(img.largeImageURL)}/>
                </div>
              </div>
            </Grid2>
            </>
          }) : 'There are no Images!'
        }
        <MyDialog open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} />
      </Grid2>
    </>
  )
}

export default Images
