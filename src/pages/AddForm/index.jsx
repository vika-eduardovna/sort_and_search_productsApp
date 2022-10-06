import React, { useContext } from 'react'
import s from './style.module.sass'
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';
import { Context } from '../../context';

export default function AddForm() {
  const {addProduct} = useContext(Context);

    const submit = e => {
        e.preventDefault();
        const {title, price, discount} = e.target;
        addProduct(title.value, price.value, discount.value);
        title.value = '';
        price.value = '';
        discount.value = '';
    }

  return (
    <form onSubmit={submit} className={s.container}>
        <Input name='title'placeholder='title'/>
        <Input name='price'placeholder='price'/>
        <Input name='discount'placeholder='discount'/>
        <Button>Add</Button>
    </form>
  )
}
