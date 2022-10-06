import React, {useContext} from 'react'
import { Context } from '../../context';
import ProductItem from '../ProductItem';
import s from './style.module.sass'

export default function ProductsContainer() {
    const {showProducts} = useContext(Context);
  return (
    <div className={s.container}>
       {
        showProducts.map(prod => <ProductItem key={prod.id} {...prod}/>)
       }
    </div>
  )
}
