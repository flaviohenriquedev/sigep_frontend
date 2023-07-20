import { InputHTMLAttributes } from 'react';

interface InputPMUProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputPMU = ({ ...rest }: InputPMUProps) => {
    return <input {...rest} />;
};

export default InputPMU;
