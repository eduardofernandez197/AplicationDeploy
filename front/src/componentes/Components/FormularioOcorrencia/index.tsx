import type { SubmitHandler, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import type { FormValues } from '../../../Types/types';
import {
    DescriptionInput,
    FieldGroup,
    FileInput,
    FormContainer,
    FormPanel,
    FullWidthGroup,
    SubmitButton,
    TextInput
} from './styles';

type FormularioOcorrenciaProps = {
    newOcorrencia: boolean;
    handleSubmit: UseFormHandleSubmit<FormValues>;
    onSubmit: SubmitHandler<FormValues>;
    register: UseFormRegister<FormValues>;
}

export const FormularioOcorrencia = (props: FormularioOcorrenciaProps) => {
    return  <FormPanel $open={props.newOcorrencia}>
                <FormContainer onSubmit={props.handleSubmit(props.onSubmit)}>
                    <FieldGroup>
                        <label htmlFor="titulo">Titulo</label>
                        <TextInput type="text" id='titulo' {...props.register("titulo")} placeholder='Titulo'/>
                    </FieldGroup>
                    <FullWidthGroup>
                        <DescriptionInput {...props.register("descricao")} placeholder='Descreva o ocorrido'/>
                    </FullWidthGroup>
                    <FieldGroup>
                        <label htmlFor="emailDestino">E-mail destino</label>
                        <TextInput type="email" id='emailDestino' {...props.register("emailDestino")} placeholder='Digite o e-mail'/>
                    </FieldGroup>
                    <FullWidthGroup>
                        <FileInput type="file" multiple {...props.register("foto")}/>
                    </FullWidthGroup>
                    <FullWidthGroup>
                        <SubmitButton type='submit'>Enviar</SubmitButton>
                    </FullWidthGroup>
                </FormContainer>
            </FormPanel>
}
