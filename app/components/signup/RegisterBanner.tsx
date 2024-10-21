import Link from 'next/link'
import React from 'react'

function RegisterBanner() {
  return (
    <section className={'w-1/4 h-full bg-primarygreen hidden md:flex flex-col justify-between text-white rounded-l-2xl'}>
        <Link href={'/'} className={'w-full pt-2 pl-2 text-start font-bold uppercase font-[family-name:var(--font-geist-sans)] underline'}>Fixate</Link>
        <div className={'mt-6 h-[60%]'}>
            <h2 className={'w-full text-center font-bold text-2xl mb-3'}>Fill us in</h2>
            <p className="text-sm text-center">Create your company profile in seconds with our streamlined registration form. Provide essential details about your business and set up your account quickly and easily.</p>
        </div>
    </section>
  )
}

export default RegisterBanner