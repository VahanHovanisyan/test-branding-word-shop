import JustValidate from "just-validate";

const validator = new JustValidate('.contact-us__form');

validator
  .addField('.contact-us__input_user-name', [
    {
      rule: 'required',
    },
    {
      rule: 'minLength',
      value: 2,
    },
    {
      rule: 'maxLength',
      value: 15,
    },
  ])
  .addField('.contact-us__input_user-email', [
    {
      rule: 'required',
    },
    {
      rule: 'email',
    },
  ])
  .addField('.contact-us__input_user-phone', [
    {
      rule: 'required',
    },
    {
      rule: 'number',
    },
  ])
  .addField('.contact-us__input_user-note', [
    {
      rule: 'required',
    },
    {
      rule: 'minLength',
      value: 15,
    },
  ])



