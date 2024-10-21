interface inputProps{
    className?: string;
    type: string;
    name: string;
    placeholder?: string;
    value?:string
    accept?: string
}

function Input({className, type, name, placeholder, value, accept}: inputProps) {
  return (
    <>
        <input className={className} type={type} name={name} placeholder={placeholder} value={value} accept={accept}/>
    </>
  )
}

export default Input