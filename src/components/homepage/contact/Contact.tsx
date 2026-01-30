import { Button, FormLabel } from 'react-bootstrap';
import './Contact.css';
import { useState } from 'react';

function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        consent: false
    });
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus('');

        try {
            if (!formData.name || !formData.email || !formData.message) {
                setStatus('❌ Tous les champs sont obligatoires.');
                setLoading(false);
                return;
            }
            if (!formData.consent) {
                setStatus('❌ Vous devez accepter que vos données soient utilisées pour vous recontacter.');
                setLoading(false);
                return;
            }

            const response = await fetch('/.netlify/functions/sendEmail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('✅ Message envoyé avec succès !');
                setFormData({ name: '', email: '', message: '', consent: false });
            } else {
                setStatus('❌ Erreur lors de l\'envoi');
            }
        } catch (error) {
            setStatus('❌ Erreur réseau');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mb-5" id="contact">
            <h2 className='title-h2 text-center m-4'>Contact</h2>
            <form className='form-contact d-flex flex-column align-items-center' onSubmit={handleSubmit}>
                <div className="container-input mb-2">
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        className='input-form' 
                        placeholder='Nom' 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                </div>
                <div className="container-input mb-2">
                    <input
                        type="email" 
                        id="email" 
                        name="email" 
                        className='input-form' 
                        placeholder='Email' 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                </div>
                <div className="container-input mb-2">
                    <textarea 
                        id="message" 
                        name="message" 
                        rows={5} 
                        className='input-form' 
                        placeholder='Message'
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                </div>
                <div className="mb-2">
                    <FormLabel htmlFor="consent" className='label-consent'>
                        <input 
                            type="checkbox" 
                            id="consent" 
                            name="consent" 
                            className='me-2' 
                            checked={formData.consent}
                            onChange={(e) => setFormData({...formData, consent: e.target.checked})}
                        />
                        J'accepte que mes données soient utilisées pour me recontacter.
                    </FormLabel>
                </div>
                <div>
                    <Button variant="" className='a-btn' type='submit' >Envoyer</Button>
                </div>
                {status && <p>{status}</p>}
            </form>
        </div>
    );
}

export default Contact;