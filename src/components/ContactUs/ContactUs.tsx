import React, { useState } from 'react';
import useStyles from './styles';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className={classes.section}>
      
      <div className={classes.container}>
        <div className={classes.header}>
          <h2 className={classes.title}>NEED A SOME HELP?</h2>
          <p className={classes.subtitle}>Request a quote and let's get your project underway.</p>
        </div>

        <div className={classes.formWrapper}>
          <div className={classes.formContainer}>
            <form onSubmit={handleSubmit} className={classes.form}>
              <div className={classes.inputGrid}>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name*"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={classes.input}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name*"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={classes.input}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address*"
                  value={formData.email}
                  onChange={handleChange}
                  className={classes.input}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number*"
                  value={formData.phone}
                  onChange={handleChange}
                  className={classes.input}
                  required
                />
              </div>
              
              <textarea
                name="message"
                placeholder="Message*"
                value={formData.message}
                onChange={handleChange}
                className={classes.textarea}
                required
              />

              <div className={classes.buttonContainer}>
                <button type="submit" className={classes.button}>
                  Get a Quote
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
