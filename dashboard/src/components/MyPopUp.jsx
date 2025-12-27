import React from 'react'
import CloseIcon from '@mui/icons-material/Close';


const MyPopUp = ({columns, setIsShown, header}) => {
  return (
    <>
      <div className='add'>
        <div className='add-content'>
          <CloseIcon className='closeIcon' onClick={() => setIsShown(false)}/>
          <h2>Add New {header}</h2>
          <div className='input-container'>
            {
              columns.filter(column => column.field !== 'img' && column.field !== 'id' && column.field !== 'action').map(column => {
                return <div className='input' key={column.field}>
                  <label htmlFor={column.field}>
                    {column.headerName}
                  </label>
                  <input type="text" id={column.field} placeholder={column.headerName} />
                </div>
              })
            }
          </div>
          <button>Send</button>
        </div>
      </div>
    </>
  )
}

export default MyPopUp
