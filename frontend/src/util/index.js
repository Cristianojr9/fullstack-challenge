import * as Yup from 'yup';

export const phoneMask = {
  exec: x =>
    `${x}`
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
      .replace(/(-\d{4})\d+?$/, '$1')
};

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