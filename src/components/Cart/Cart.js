import React, { Component, Fragment } from 'react'
import Title from '../Title'
import CartColumns from './CartColumns'
import EmptyCard from './EmptyCard'
import { ProductConsumer } from '../context'
import CartList from './CartList'
import CartTotal from './CartTotal'

export default class Cart extends Component {
    render() {
        return (
            <section>
            <ProductConsumer>
                {value=>{
                    const{cart} = value;
                    if(cart.length > 0){
                        return (
                           <Fragment>
                                <Title name="Your" title="Cart"/>
                                <CartColumns />
                                <CartList value={value} />
                                <CartTotal value={value} history={this.props.history}/>
                           </Fragment>
                        )
                    }else{
                        return <EmptyCard />
                    }
                }}
            </ProductConsumer> 
            </section>
        )
    }
}

