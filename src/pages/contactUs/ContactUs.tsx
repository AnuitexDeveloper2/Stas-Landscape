import { FC, useState } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import DialButton from '../home/dialButton/DialButton';
import { ContactsWrapper } from './ContactUs.styles';
// import { sentEmail } from "../helper/email";
const Contacts: FC = () => {
    const [successSubmit, setSuccessSubmit] = useState(false);
    const [error, setError] = useState(false);
    const [state, setState] = useState({
        name: '',
        phone: '',
        email: '',
        comments: '',
        location: '',
    });

    const handleInputs = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setState({
            ...state,
            [event.currentTarget.name]: event.currentTarget.value,
        });
    };

    const submitData = () => {
        if (!state.phone) {
            setError(true);
            return;
        }
        // sentEmail(
        //   state.name,
        //   state.phone,
        //   state.email,
        //   state.comments,
        //   state.location
        // );
        setSuccessSubmit(true);
    };

    return (
        <>
            <Header />
            <ContactsWrapper>
                <div className="contact-container">
                    <h1 className="title">Зв'яжіться з нами</h1>
                    <div className="description">
                        На всі запити буде надано відповідь, наші рекомендації безкоштовні і ні до
                        чого не зобов'язують.
                    </div>
                    <div className="information">
                        <div className="information-inner">
                            <div className="title">телефон:</div>
                            <div className="description">
                                {' '}
                                <a href="tel:+380660175450">066 01 75 450</a>
                            </div>
                            <div className="title">Електронна пошта:</div>
                            <div className="description">
                                <a
                                    className="phone-section"
                                    href="mailto: oakhousekharkiv@gmail.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    oakhousekharkiv@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {successSubmit ? (
                    <div className="success-submit">Ми зв'яжемося з вами найближчим часом</div>
                ) : (
                    <div className="form-container">
                        <div className="navigation">
                            <DialButton />
                        </div>

                        <div className="form-container-item">
                            <span>Ім'я</span>
                            <div>
                                <input type="text" name="name" onChange={handleInputs} />
                            </div>
                        </div>
                        <div className="form-container-item">
                            <span>Email</span>
                            <div>
                                <input type="text" name="email" onChange={handleInputs} />
                            </div>
                        </div>
                        <div className="form-container-item">
                            <span>Телефон</span>
                            <div>
                                <input type="text" name="phone" onChange={handleInputs} />
                                {!state.phone && error && (
                                    <span className="error">Введіть телефон</span>
                                )}
                            </div>
                        </div>
                        <div className="form-container-item">
                            <span>Адреса виконання роботи</span>
                            <div>
                                <input type="text" name="location" onChange={handleInputs} />
                            </div>
                        </div>
                        <div className="form-container-item">
                            <span>Невеликий опис роботи</span>
                            <div>
                                <textarea name="comments" onChange={handleInputs} />
                            </div>
                        </div>
                        <div className="form-button">
                            <button className="contact-form-buttons" onClick={submitData}>
                                Відправити
                            </button>
                        </div>
                    </div>
                )}
                <div></div>
            </ContactsWrapper>
            <Footer />
        </>
    );
};

export default Contacts;
