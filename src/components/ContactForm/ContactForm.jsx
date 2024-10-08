import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

export default function ContactForm() {
  const dispatch = useDispatch();

  const fieldId = useId();
  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };
  const UserSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Мінімум 3 символи!")
      .max(30, "Максимум 30 символів!")
      .required("Обов'язково заповнити!"),
    number: Yup.string()
      .min(3, "Мінімум 3 символи!")
      .max(30, "Максимум 30 символів!")
      .required("Обов'язково заповнити!"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.formGroup}>
          <label htmlFor={`${fieldId}-name`}>Name</label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={`${fieldId}-name`}
          />
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>
        <div className={css.formGroup}>
          <label htmlFor={`${fieldId}-number`}>Number</label>
          <Field
            className={css.input}
            type="text"
            name="number"
            id={`${fieldId}-number`}
          />
          <ErrorMessage name="number" component="span" className={css.error} />
        </div>
        <button type="submit"> Add Contact </button>
      </Form>
    </Formik>
  );
}
