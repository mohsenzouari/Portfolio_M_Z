import "./contact.scss";
import { useContext, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Helmet } from 'react-helmet-async';
import { useLocale } from '../LocaleProvider';
import { FormattedMessage } from 'react-intl';


export default function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  
  //toggle la langue fr/en
  const [locale, setLocale] = useLocale();
  const isEnglish = locale === 'en';

  //validation du formulaire avec Yup
  const validationSchema = Yup.object().shape({
    user_name: Yup.string()
       .min(2, isEnglish ? 'Too Short!' : 'Trop court!')
       .max(50, isEnglish ? 'Too Long!': 'Trop long!')
       .required(isEnglish ? 'Required field' : 'Champs requis'),
       user_subject: Yup.string()
       .min(2, isEnglish ? 'Too Short!' : 'Trop court!')
       .max(100, isEnglish ? 'Too Long!': 'Trop long!')
       .required(isEnglish ? 'Required field' : 'Champs requis'),
       user_email: Yup.string().email(isEnglish ? 'Invalid email' : 'Courriel non valide').required(isEnglish ? 'Required field' : 'Champs requis'),
  });

  //Envoi de contenu du formulaire vers mon gmail 
  const handleSubmit = () => {
     emailjs
      .sendForm(
        "service_da6cvyz",
        "template_w0fr3fq",
        formRef.current,
        "Ix9IVkqC4kg-5jAVa"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact" id="contact">
      <Helmet>
        <title>Contact - Mouna Tebourski</title>
        <meta name="description" content="Page Contact pour envoyer un message"/>
    </Helmet>
      <div className="left">
        <img src="assets/desk.jpg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <Formik
        initialValues={{
          //initiliser les valeurs du formulaire
        user_name: '',
        user_subject: '',
        email: '',
        message:'',
       }}
       //Schema de validation qu'on a fais avec yup 
       validationSchema={validationSchema}
       onSubmit={values => {
         console.log(values);
         handleSubmit();
       }}
     >
       {({ errors, touched }) => (
         <Form ref={formRef}>
          <Field type="text" className="field" placeholder= {isEnglish ? "Name" : "Nom"} name="user_name"/>
           {errors.user_name && touched.user_name ? (<div className="error">{errors.user_name}</div>) : null}
          <Field type="text" className="field" placeholder={isEnglish ? "Subject" : "Sujet"} name="user_subject" />
          {errors.user_subject && touched.user_subject ? (<div className="error">{errors.user_subject}</div>) : null}
          <Field type="email" className="field" placeholder="Email" name="user_email" />
          {errors.user_email && touched.user_email ? <div className="error">{errors.user_email}</div> : null}
          <Field as="textarea" className="textarea"  placeholder="Message" name="message"></Field>
          <button type="submit">{isEnglish ? "Send" : "Envoyer"}</button>
          {done && <span><FormattedMessage id="app.contact.response" />  </span>}
         </Form>
       )}
     </Formik>
    </div>
    </div>
  );
}
