import RegisterContainer from "@/components/signup/RegisterContainer";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

export default function Register(){
  return (
    <div className={'w-full h-[100vh] font-[family-name:var(--font-geist-mono)]'}>
        <Link href={'/'} className={'w-full h-[36px] flex items-center text-sm hover:underline '}><IoIosArrowBack size={20}/> Back</Link>
        <section className={'w-full h-[calc(100%-80px)] flex justify-center items-center'}>
            <RegisterContainer/>
        </section>
    </div>
  )
}

