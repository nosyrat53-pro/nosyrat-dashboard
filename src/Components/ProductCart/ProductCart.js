import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './ProductCart.css';
import { Link } from '@mui/material';

export default function ProductCart({ 
    img , 
    productName,
    isNew,
    isSale,
    colors,
    price,
    oldPrice,
}) {
    return (
        <Grid item lg={3} md={3} sm={6} xs={12} >
        <Paper 
        className="product__paper"
        sx={{
            borderRadius: '16px',
        }}
        >
        
        <img src={img} alt={productName}/>

        {isNew ? <div className='product__new'>New</div> : null}
        {isSale ? <div className='product__sale'>sale</div> : null}

            <div className='product__info'>
                <Link sx={{
                    cursor: 'pointer',
                    color: 'rgba(0 0 0 / 75%)',
                    fontSize: '.9rem',
                    textDecoration: 'none',
                    ':hover': {
                        textDecoration: 'underline',
                        color: 'rgba(0 0 0 / 85%)',
                    }
                }}>
                <h3 className='product__linkName'>{productName}</h3>
                </Link>
                <div className="product__restInfo">
                    <div className='product__colors'>

                        {colors.length <= 3 ? colors.map(color => {

                        return <div className="product__colorPaint" style={{backgroundColor: `${color}`}}/>
                        
                        }) : 
                        colors.slice(0,3).map(color => {

                            return <div className="product__colorPaint" style={{backgroundColor: `${color}`}}/>
                            
                            })
                        }
                        {colors.length > 3 ? `+${colors.length - 3}` : null}
                    </div>
                    <h3 className='product__price'>
                        {oldPrice && <span className='product__oldPrice'>${oldPrice} </span>}
                        ${price}
                        </h3>
                </div>
            
            </div>
        </Paper>
        </Grid>
    );
}