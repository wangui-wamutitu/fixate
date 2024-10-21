import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link";

export default function Home() {
  const year = new Date().getFullYear()
  return (
    <div className="w-full min-h-screen p-4 font-[family-name:var(--font-geist-sans)] flex flex-col justify-between">
      <h2 className={'w-full text-center font-bold uppercase text-2xl md:text-4xl'}>Fixate</h2>
      <main className="mt-[-80px] flex flex-col justify-center items-center">
        <Image
          className="w-[100%] sm:w-[40%] dark:invert"
          src={'/images/fixing.svg'}
          alt="fixate animation"
          width={200}
          height={50}
          priority
        />
        <p className="hidden w-[95%] md:w-[60%] text-sm text-center font-[family-name:var(--font-geist-mono)] mb-4">
          Fixate allows you to know the painpoints of your users as they use your application. 
        </p>
        <p className="w-[95%] md:w-[60%] text-sm text-center font-[family-name:var(--font-geist-mono)] mb-4">
          Fixate allows companies to instantly gather valuable insights and feedback directly for your applications, empowering them to understand user needs and preferences more effectively.
          
        </p>

        <p className="w-[95%] md:w-[60%] text-sm text-center font-[family-name:var(--font-geist-mono)] mb-12">
          We also create action points for your development team to work on based on the feedback provided
        </p>

        {/* TODO: will add an image of the site here */}

        <div className="w-full flex items-center justify-center ">
        <Button asChild className={'bg-primarygreen text-white w-[120px]'}>
          <Link href="/register">Get Started</Link>
        </Button>
        </div>
      </main>
      <footer className="">
        <p className={'text-center text-sm'}>&copy; {year}</p>
      </footer>
    </div>
  );
}
