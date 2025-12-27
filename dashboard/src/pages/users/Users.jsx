import React, { useState } from 'react'
import './Users.scss'
import MyDataGrid from '../../components/MyDataGrid'
import { userRows } from '../../data'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Link } from 'react-router-dom';
import MyPopUp from '../../components/MyPopUp';

const Users = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'img',
      headerName: 'Avatar',
      width: 90,
      renderCell: (params) => {
        return <div className='img'>
          <img src={params.row.img || '/noavatar.png'} />
        </div>
      }
    },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    }, {
      field: 'email',
      headerName: 'Email',
      width: 200
    },
    {
      field: 'phone',
      headerName: 'Phone',
      width: 150,
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      width: 120
    },
    {
      field: 'verified',
      headerName: 'Verified',
      renderCell: (params) => {
        return <div className='verify'>
          {
            params.row.verified ? (
              <CheckIcon sx={{ color: 'green' }} />
            ) : (
              <CloseIcon sx={{ color: 'red' }} />
            )
          }
        </div>
      }
    }, {
      field: 'action',
      headerName: 'Action',
      renderCell: (params) => {
        return <div className='icons'>
          <Link to={`/users/${params.row.id}`} className='link'>
            <img src="/view.svg" alt="" />
          </Link>
          <DeleteOutlinedIcon sx={{ color: 'red' }} />
        </div>
      }
    }
  ];
  const [isShown, setIsShown] = useState(false)
  return (
    <>
      <div className='users'>
        <div className='info'>
          <h2>Users</h2>
          <button onClick={() => setIsShown(true)}>Add New User</button>
        </div>
        <MyDataGrid rows={userRows} columns={columns} />
        {isShown && <MyPopUp columns={columns} setIsShown={setIsShown} header={'User'}/>}
      </div>

    </>
  )
}

export default Users
