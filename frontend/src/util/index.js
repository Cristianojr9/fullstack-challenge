import * as Yup from 'yup';

export const professionSchema = Yup.object().shape({
  description: Yup.string().required('Descrição é obrigatório'),
  active: Yup.boolean()
});

export const professionalSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required(),
  phone: Yup.number().required(),
  active: Yup.bool()
});