import React, { Component } from 'react'
import {ProductConsumer} from './context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const{id, title, img, price, company, info, inCart} = value.detailProduct
                return(
                    <div className="container py-5">
                        {/*Product title*/}
                        <div className="row">
                            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                <h2>{title}</h2>
                            </div>
                        </div>
                        {/*end product title*/}
                        {/*Product info*/}
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <img src={img} alt="Product" className="img-fluid"/>
                            </div>
                            {/*Product text*/}
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <h2>Model : {title}</h2>
                                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                    Made By : <span className="text-uppercase">{company}</span>
                                </h4>
                                <h4 className="text-blue">
                                    <strong>Price : <span>$</span> {price}</strong>
                                </h4>
                                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                    Some info about this product : 
                                </p>
                                <p className="text-muted lead">
                                    {info}
                                </p>
                                {/*Buttons*/}
                                <div>
                                    <Link to="/">
                                        <ButtonContainer>Back to product</ButtonContainer> 
                                    </Link> 
                                    <ButtonContainer cart
                                        onClick={() => {
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }} 
                                        disabled={inCart ? true : false}>
                                        {inCart ? "inCart" : "add to cart"}
                                    </ButtonContainer> 
                                    
                                    
                                </div>

                                
                            </div>
                            {/*End product text*/}
                        </div>
                        {/*end product info*/}

                    </div>
                )
                }}
            </ProductConsumer>
        )
    }
}
