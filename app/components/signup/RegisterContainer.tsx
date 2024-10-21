import React from 'react'
import RegisterBanner from './RegisterBanner'
import RegisterDetails from './RegisterDetails'

function RegisterContainer() {
  return (
    <div className={'w-[90%] md:w-[75%] h-full md:h-[75%] flex md:rounded-2xl md:shadow-md border border-slate-100'}>
        <RegisterBanner/>
        <RegisterDetails/>
    </div>
  )
}

export default RegisterContainer