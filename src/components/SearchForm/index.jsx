import React from 'react'
import s from './style.module.sass'
import Input from '../UI/Input/index'
import Button from '../UI/Button/index'
import { Context } from '../../context'
import { useContext } from 'react'

export default function SearchForm() {
  const {setSearchWord} = useContext(Context);
  const change = event => setSearchWord(event.target.value);
        
  return (
    <div className={s.container}>
        <form onChange={change}>
        <Input placeholder='Name' name='search'/>
        <Button>Search</Button>
        <div className={s.sort_style}>
          <p className={s.title_style}>Sort by:</p>
          <select name="sort">
            <option value="title">Title</option>
            <option value="price">Price</option>
          </select>
        </div>
    </form>
    </div>
  )
}
