'use client'

import { Button } from '../ui/button'
import Input from '../ui/Input'
import { createCompany } from '@/actions/companyActions'
import { useActionState, useRef } from 'react'

interface CompanyFormState {
  errors?: {
    name?: string[];
    appUrl?: string[];
    logo?: string[];
    email?: string[];
    description?: string[];
    password?: string[];
    confirmPassword?: string[];
    _form?: string[];
  };
  message?: string;
}

function RegisterDetails() {
  const [state, formAction, isPending] = useActionState<CompanyFormState>(createCompany, {} as CompanyFormState);
  const ref = useRef<HTMLFormElement>(null);

  async function handleRegisterCompany(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await formAction();
    ref.current?.reset();
  }

  return (
    <div className={'w-full md:w-3/4 h-full md:rounded-r-2xl flex flex-col justify-between'}>
        <div>
            <h2 className={'w-full text-center font-bold text-xl md:text-3xl py-6'}>Company Details</h2>
            {state?.errors?._form  && <ul>
                {state.errors._form?.map((err:string, index:number) => (
                  <li key={index} className="text-red-500">{err}</li>
                ))}
              </ul>
            }
            <form
              action={handleRegisterCompany}
              ref={ref}
              className={'px-2 md:px-10'}
            >
              <Input type="text" className={'outline-none rounded-xl text-sm w-full h-10 bg-lightgreen focus:border shadow-sm px-2 mb-3'} placeholder={'Company Name*'} name='name'/>
              {
                  state?.errors?.name
                  && <ul>
                  {state?.errors.name?.map((err:string, index:number) => (
                  <li key={index} className="text-red-500">{err}</li>
                ))}
                </ul>
              }
              <Input type="text" className={'outline-none rounded-xl text-sm w-full h-10 bg-lightgreen focus:border shadow-sm px-2 mb-3'} placeholder={'Site url or link to app store*'} name='appUrl'/>
              {
                  state?.errors.appUrl
                  && <ul>
                  {state?.errors.appUrl?.map((err:string, index:number) => (
                  <li key={index} className="text-red-500">{err}</li>
                ))}
                </ul>
              }
              <Input type="email" className={'outline-none rounded-xl text-sm w-full h-10 bg-lightgreen focus:border shadow-sm px-2 mb-3'} placeholder={'Company Email*'} name='email'/>
              {
                  state?.errors.email
                  && <ul>
                  {state?.errors.email?.map((err:string, index:number) => (
                  <li key={index} className="text-red-500">{err}</li>
                ))}
                </ul>
              }
              <textarea placeholder={'App description'} name={'description'} className={'outline-none rounded-xl text-sm w-full bg-lightgreen focus:border shadow-sm p-2 mb-3'} cols={30} rows={10}></textarea>
              {
                  state?.errors.description
                  && <ul>
                  {state?.errors.description?.map((err:string, index:number) => (
                  <li key={index} className="text-red-500">{err}</li>
                ))}
                </ul>
              }
              <div className={'flex flex-col text-slate-500 mb-3 text-sm'}>
                <label>Select company logo:</label>
                <Input type='file' name='logo' accept="images/*" className='text-slate-500 my-2'/>

                {
                  state?.errors.logo
                  && <ul>
                  {state?.errors.logo?.map((err:string, index:number) => (
                  <li key={index} className="text-red-500">{err}</li>
                ))}
                </ul>
                }
              </div>
              <Input type="password" className={'outline-none rounded-xl text-sm w-full h-10 bg-lightgreen focus:border shadow-sm px-2 mb-3'} placeholder={'Password...'} name='password'/>
              {
                  state?.errors.password
                  && <ul>
                    {state?.errors.password?.map((err:string) => (
                      <li className="text-red-500">{err}</li>
                    ))}
                  </ul>
                  
              }
              <Input type="password" className={'outline-none rounded-xl text-sm w-full h-10 bg-lightgreen focus:border shadow-sm px-2 mb-3'} placeholder={'Confirm Password...'} name='confirmPassword'/>
              {
                  state?.errors.confirmPassword
                  && <ul>
                    {state?.errors.confirmPassword?.map((err:string) => (
                      <li className="text-red-500">{err}</li>
                    ))}
                  </ul>
                  
              }
            </form>
        </div>
        <div className={'w-full px-2 md:px-10 text-end'}>
            <Button disabled={isPending} className={'bg-primarygreen text-white w-[120px] my-4'} type='submit'>{isPending? "Submitting...":"Submit"}</Button>
        </div>
    </div>
  )
}

export default RegisterDetails