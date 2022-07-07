import React from 'react'
import { Nav } from './Nav';

interface IProps {
  children: JSX.Element
}

export const Layout = ({children}: IProps):JSX.Element => {
  return (
    <div className='layout'>
      <Nav/>
      {children}
    </div>
  )
}
