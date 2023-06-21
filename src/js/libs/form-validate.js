import JustValidate from "just-validate";

const validate = new JustValidate('#form');


validate
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


