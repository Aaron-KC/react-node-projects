import React, { useState } from 'react'
import './Products.scss'
import MyDataGrid from '../../components/MyDataGrid'
import { products, userRows } from '../../data'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Link } from 'react-router-dom';
import MyPopUp from '../../components/MyPopUp';

const Products = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'img',
      headerName: 'Avatar',
      width: 90,
      renderCell: (params) => {
        return <div className='img'>
          <img src={params.row?.img || '/revenueIcon.svg'} />
        </div>
      }
    },
    {
      field: 'title',
      headerName: 'Title',
      width: 150,
      editable: true,
    },
    {
      field: 'color',
      headerName: 'Color',
      width: 150,
      editable: true,
    }, {
      field: 'producer',
      headerName: 'Producer',
      width: 150
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 150,
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      width: 120
    },
    {
      field: 'inStock',
      headerName: 'InStock',
      renderCell: (params) => {
        return <div className='verify'>
          {
            params.row.inStock ? (
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
          <Link to={`/products/${params.row.id}`} className='link'>
            <img src="/view.svg" alt="" />
          </Link>
          <DeleteOutlinedIcon sx={{ color: 'red' }} />
        </div>
      }
    }
  ];
  const [isShown, setIsShown] = useState(false)

  return (
    <div className='products'>
      <div className='info'>
        <h2>Products</h2>
        <button onClick={() => setIsShown(true)}>Add New Products</button>
      </div>
      <MyDataGrid rows={products} columns={columns}/>
      {isShown && <MyPopUp columns={columns} setIsShown={setIsShown} header={'Product'}/>}
    </div>
  )
}

export default Products
