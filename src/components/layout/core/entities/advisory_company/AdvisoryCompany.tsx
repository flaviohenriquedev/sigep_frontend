'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

const schema = Yup.object().shape({
    password: Yup.string()
        .min(6, 'A senha precisa ter pelo menos 6 caractéres')
        .required('Campo obrigatório'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'As senhas não batem')
        .required('Campo obrigatório')
});

const AdvisoryCompany = () => {
    const { register, handleSubmit, formState, reset } = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(schema),
        defaultValues: {
            password: '',
            confirmPassword: ''
        }
    });

    const { errors, isSubmitting } = formState;

    function handleSubmitData() {
        console.log('submit');
        reset();
    }

    return (
        <form onSubmit={handleSubmit(handleSubmitData)}>
            <input
                {...register('password')}
                type="password"
                placeholder="Senha"
                autoFocus
            />
            {errors.password && <p>{errors.password.message}</p>}
            <input
                {...register('confirmPassword')}
                type="password"
                placeholder="Confirme a senha"
            />
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
            <button disabled={isSubmitting}>
                {isSubmitting ? 'Enviando' : 'Enviar'}
            </button>
        </form>
    );
};

export default AdvisoryCompany;
