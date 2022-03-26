import React,{useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import Header from '../../Components/Header/Header';
import './Product.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button  } from '@mui/material';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import ProductCart from '../../Components/ProductCart/ProductCart';

import Product1 from '../../assets/product_1.jpg';
import Product2 from '../../assets/product_2.jpg';
import Product3 from '../../assets/product_3.jpg';
import Product4 from '../../assets/product_4.jpg';

import Product5 from '../../assets/product_5.jpg';
import Product6 from '../../assets/product_6.jpg';
import Product7 from '../../assets/product_7.jpg';
import Product8 from '../../assets/product_8.jpg';
import Product9 from '../../assets/product_9.jpg';
import Product10 from '../../assets/product_10.jpg';
import Product11 from '../../assets/product_11.jpg';
import Product12 from '../../assets/product_12.jpg';
import Product13 from '../../assets/product_13.jpg';
import Product14 from '../../assets/product_14.jpg';
import Product15 from '../../assets/product_15.jpg';
import Product16 from '../../assets/product_16.jpg';
import Product17 from '../../assets/product_17.jpg';
import Product18 from '../../assets/product_18.jpg';
import Product19 from '../../assets/product_19.jpg';
import Product20 from '../../assets/product_20.jpg';
import Product21 from '../../assets/product_21.jpg';
import Product22 from '../../assets/product_22.jpg';
import Product23 from '../../assets/product_23.jpg';
import Product24 from '../../assets/product_24.jpg';

function createPoductInfo(img, productName,isNew,isSale,colors,price,oldPrice) {
    return {
        img,
        productName,
        isNew,
        isSale,
        colors,
        price,
        oldPrice,
    }
}



const Product = (props) => {

    const [products] = useState([
        createPoductInfo(Product1,'Nike Air Force 1 NDESTRU',false,false,['rgb(0, 171, 85)' , 'black'],'44.24',null),
        createPoductInfo(Product2,'Nike Space Hippie 04',false,false,['white' , 'black'],'64.17',null),
        createPoductInfo(Product3,'Nike Air Zoom Pegasus 37 A.I.R. ',true,false,['white' , 'rgb(255, 192, 203)'],'63.22','26.42'),
        createPoductInfo(Product4,'Nike Blazer Low 77 Vintage',false,false,['rgb(255, 192, 203)' , 'rgb(255, 72, 66)','rgb(24, 144, 255)'],'18.08',null),
        
        createPoductInfo(Product5,'Nike ZoomX SuperRep Surge',true,false,['rgb(0, 171, 85)' , 'black', 'white','rgb(0, 171, 85)' , 'black', 'white','rgb(0, 171, 85)' , 'black'],'14.66',null),
        createPoductInfo(Product6,'Zoom Freak 2',true,false,['rgb(0, 171, 85)' , 'black', 'white','rgb(0, 171, 85)' , 'black', 'white','rgb(0, 171, 85)' , 'black'],'15.42','19.99'),
        createPoductInfo(Product7,'Nike Air Max Zephyr',false,false,['rgb(0, 171, 85)' , 'black'],'44.91',null),
        createPoductInfo(Product8,'Jordan Delta',false,false,['rgb(0, 171, 85)' , 'black', 'white','rgb(0, 171, 85)' , 'black', 'white','rgb(0, 171, 85)' , 'black'],'68.80',null),
                
        createPoductInfo(Product9,'Air Jordan XXXV PF',false,false,['rgb(0, 171, 85)' , 'black', 'white','rgb(0, 171, 85)' , 'black', 'white','rgb(0, 171, 85)' , 'black'],'14.66',null),
        createPoductInfo(Product10,'Nike Waffle Racer Crater',false,true,['rgb(0, 171, 85)' , 'black', 'white','rgb(0, 171, 85)' , 'black', 'white','rgb(0, 171, 85)' , 'black'],'15.42','19.99'),
        createPoductInfo(Product11,'Kyrie 7 EP Sisterhood',false,false,['rgb(0, 171, 85)' , 'black'],'44.91',null),
        createPoductInfo(Product12,'Nike Air Zoom BB NXT',false,true,['rgb(0, 171, 85)' , 'black', 'white','rgb(0, 171, 85)' , 'black', 'white','rgb(0, 171, 85)' , 'black'],'68.80',null),
                
        createPoductInfo(Product13,'Nike Air Force 1 07 LX',false,false,['rgb(0, 171, 85)' , 'black', 'white','rgb(0, 171, 85)' , 'black', 'white','rgb(0, 171, 85)' , 'black'],'14.66',null),
        createPoductInfo(Product14,'Nike Air Force 1 Shadow SE',true,false,['rgb(0, 171, 85)' , 'black', 'white','rgb(0, 171, 85)' , 'black', 'white','rgb(0, 171, 85)' , 'black'],'95.78',null),
        createPoductInfo(Product15,'Nike Air Zoom Tempo NEXT%',false,false,['rgb(0, 171, 85)' , 'black'],'44.91',null),
        createPoductInfo(Product16,'Nike DBreak-Type',false,true,['rgb(0, 171, 85)' , 'black', 'white','rgb(0, 171, 85)' , 'black', 'white','rgb(0, 171, 85)' , 'black'],'48.80','50.32'),
                
        createPoductInfo(Product17,'Nike Air Max Up',false,false,['rgb(0, 171, 85)' , 'black', 'white','rgb(0, 171, 85)' , 'black', 'white','rgb(0, 171, 85)' , 'black'],'14.66',null),
        createPoductInfo(Product18,'Nike Air Max 270 React ENG',true,false,['rgb(0, 171, 85)' , 'black', 'white','rgb(0, 171, 85)' , 'black', 'white','rgb(0, 171, 85)' , 'black'],'74.42',null),
        createPoductInfo(Product19,'NikeCourt Royale',false,false,['rgb(0, 171, 85)' , 'black'],'44.91',null),
        createPoductInfo(Product20,'Nike Air Zoom Pegasus 37 Premi',true,false,['rgb(0, 171, 85)' , 'black', 'white','rgb(0, 171, 85)' , 'black', 'white','rgb(0, 171, 85)' , 'black'],'68.00','90.32'),
                
        createPoductInfo(Product21,'Nike Air Zoom SuperRep',true,false,['rgb(0, 171, 85)' , 'black', 'white','rgb(0, 171, 85)' , 'black', 'white','rgb(0, 171, 85)' , 'black'],'14.66',null),
        createPoductInfo(Product22,'NikeCourt Royale',false,false,['rgb(0, 171, 85)' , 'black', 'white','rgb(0, 171, 85)' , 'black', 'white','rgb(0, 171, 85)' , 'black'],'35.42',null),
        createPoductInfo(Product23,'Nike React Art3mis',false,true,['rgb(0, 171, 85)' , 'black'],'44.91',null),
        createPoductInfo(Product24,'Nike React Infinity Run Flyknit A.I.R',false,false,['rgb(0, 171, 85)' , 'black', 'white','rgb(0, 171, 85)' , 'black', 'white','rgb(0, 171, 85)' , 'black'],'78.70',null),
    ]);

    useEffect(() => {
        document.getElementById('sidebarID').style.display = 'block';
    },[])

    return (
        <Grid  item xs className="product">
            <Header />

            <div className="topSpacer"></div>
            <div className="product__title">
                <h1 className="title">Products</h1>
                <div className="product__cartContainer">
                
                <Paper  
                sx={{
                    backgroundColor: 'white',
                    color: 'black',
                    boxShadow: 'none',
                    cursor: 'pointer',
                    width: 'fit-content',
                    padding: '4px 16px',
                    border: '1px solid #44444444',
                    borderTopLeftRadius: '10px',
                    borderBottomLeftRadius: '0px',
                    ':hover': {
                        background: 'none',
                        boxShadow: 'none',
                    },
                    ':active': {
                        background: 'none'
                    }
                }}
                className="cartContainer"
                >
                    <ShoppingCartIcon />
                </Paper>
                </div>
            </div>
            <Grid container spacing={2} rowSpacing={4}>
                {products.map((product,id) => {
                    return <ProductCart 
                            key={id}
                            img={product.img}
                            productName={product.productName}
                            isNew={product.isNew}
                            isSale={product.isSale}
                            colors={product.colors}
                            price={product.price}
                            oldPrice={product.oldPrice}
                            />;
                })}
            </Grid> 
            
        </Grid>
    );
}

export default Product;