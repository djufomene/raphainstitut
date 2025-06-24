import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import "../styles/contact.scss";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {   
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      "service_9el1edb ",
      "template_c8gtkqc",
      formRef.current,
      'UEskgPRVfNfOXQ72O'      
    )
    .then(() => {
      setSubmitStatus('success');
      setFormData({ user_name: '', user_email: '', message: '' });
    })
    .catch((error) => {
      console.error(error);
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <motion.div className="contact-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

      <div className="contact-hero">
        <div className="hero-content" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
          <h1>Contactez-nous</h1>
          <p>RHI <span>&gt;</span>Contactez RHI</p>
        </div>
      </div>

      <motion.div className="contact-container" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div className="contact-info" variants={itemVariants}>
          <h2>Informations de contact</h2>
          <div className="info-item">
            <div className="icon-circle"><i className="fas fa-map-marker-alt"></i></div>
            <div>
              <h3>Adresse</h3>
              <p>Douala, Logbessou Pk16<br />En face de la faculté de médecine de l'Université de Douala entrée gendarmerie</p>
            </div>
          </div>
          <div className="info-item">
            <div className="icon-circle"><i className="fas fa-phone-alt"></i></div>
            <div>
              <h3>Téléphone</h3>
              <p>+237 674154379 - 691572495 - 621258560</p>
            </div>
          </div>
          <div className="info-item">
            <div className="icon-circle"><i className="fas fa-envelope"></i></div>
            <div>
              <h3>Email</h3>
              <p>Raphainstitut@gmail.com</p>
            </div>
          </div>
          <div className="social-links">
            <motion.a href="#" whileHover={{ y: -3 }} className="social-icon facebook"><i className="fab fa-facebook-f"></i></motion.a>
            <motion.a href="#" whileHover={{ y: -3 }} className="social-icon twitter"><i className="fab fa-twitter"></i></motion.a>
            <motion.a href="#" whileHover={{ y: -3 }} className="social-icon linkedin"><i className="fab fa-linkedin-in"></i></motion.a>
            <motion.a href="#" whileHover={{ y: -3 }} className="social-icon instagram"><i className="fab fa-instagram"></i></motion.a>
          </div>
        </motion.div>

        <motion.div className="contact-form-container" variants={itemVariants}>
          <h2>Envoyez-nous un message</h2>

          {submitStatus === 'success' && (
            <motion.div className="alert success" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <i className="fas fa-check-circle"></i>
              Message envoyé avec succès !
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div className="alert error" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <i className="fas fa-exclamation-triangle"></i>
              Une erreur s’est produite. Veuillez réessayer.
            </motion.div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="user_name">Nom complet</label>
              <input type="text" id="user_name" name="user_name" value={formData.user_name} onChange={handleChange} required />
              <i className="fas fa-user"></i>
            </div>

            <div className="form-group">
              <label htmlFor="user_email">Email</label>
              <input type="email" id="user_email" name="user_email" value={formData.user_email} onChange={handleChange} required />
              <i className="fas fa-envelope"></i>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
              <i className="fas fa-comment-alt"></i>
            </div>

            <motion.button type="submit" className="submit-btn" disabled={isSubmitting} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Envoi en cours...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i> Envoyer le message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>

      <motion.div className="address-container" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <div className="address-card">
          <h3>Nous trouver</h3>
          <div className="address-content">
            <i className="fas fa-map-marked-alt"></i>
            <p>Douala, Logbessou Pk16<br />En face de la faculté de médecine de l'Université de Douala entrée gendarmerie</p>
          </div>
          <div className="transport-options">
            <div className="transport-item">
              <i className="fas fa-subway"></i>
              <span>Bus: Ligne 1 - Station pk14</span>
            </div>
            <div className="transport-item">
              <i className="fas fa-bus"></i>
              <span>Bus: 1, 3, 5</span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div className="map-container" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <div className="map-embed">
          <iframe
            title="Localisation RHI"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3183.0340149435197!2d9.801018934405722!3d4.098135493433178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2scm!4v1748733327122!5m2!1sfr!2scm"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>

    </motion.div>
  );
};

export default Contact;
