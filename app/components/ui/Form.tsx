'use client'
import { useRef, ReactNode } from "react";

interface formProps {
  children: ReactNode;
  action: (formData: FormData) => Promise<void>;
  className?: string;
  onSubmit?: () => void;
}

function Form({ children, action, className, onSubmit }: formProps) {
  //ref allow the form to reset onSubmit
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      action={async (formData) => {
        await action(formData);
        //resets the form
        ref.current?.reset();
      }}
      ref={ref}
      className={className}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}

export default Form;
