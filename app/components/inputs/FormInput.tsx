"use client";

import { FormInputProps } from "@/app/types/interfaces";

const FormInput: React.FC<FormInputProps> = ({
    id,
    label,
    type = "text",
    disabled,
    required,
    register,
    errors
}) => {
    return (
        <div className="w-full relative">
            <input id={id} disabled={disabled} {...register(id, { required })} placeholder=" " type={type}
            className={`peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition 
            disabled:opacity-70 disabled:cursor-not-allowed ${errors[id] ? 'border-rose-500' : 'border-neutral-300'} 
            ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}
            `}/>
            <label className={`absolute left-4 text-md duration-150 top-1/3 transform -translate-y-3 origin-left
             peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
             peer-focus:scale-75 peer-focus:-translate-y-4 ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}`}>{label}</label>
        </div>
    )
}

export default FormInput;