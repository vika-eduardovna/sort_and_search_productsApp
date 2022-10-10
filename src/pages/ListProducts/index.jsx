import React from 'react'
import ProductsContainer from '../../components/ProductsContainer'
import s from './style.module.sass'
import SearchForm from '../../components/SearchForm'

export default function ListProducts() {
  return (
    <div className={s.container}>
        <SearchForm/>
        <ProductsContainer />
    </div>
  )
}
