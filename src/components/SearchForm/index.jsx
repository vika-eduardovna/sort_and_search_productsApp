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
        <Button style={{backgroundColor: 'tomato'}}>Search</Button>
    </form>
    </div>
  )
}
