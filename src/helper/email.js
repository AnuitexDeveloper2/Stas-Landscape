import emailjs from '@emailjs/browser';

export const sentEmail = (name, phone, email, description, location) => {
    emailjs
        .send(
            'service_oifn99h',
            'template_r0k2n4i',
            {
                name: name,
                phone: phone,
                email: email,
                description: description,
                location: location,
            },
            'QQ0U8vlcnFeHFRtUz',
        )
        .then(
            (response) => {
                console.log('SUCCESS!', response.status, response.text);
            },
            (err) => {
                console.log('FAILED...', err);
            },
        );
};
