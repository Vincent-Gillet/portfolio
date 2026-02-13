import Button from 'react-bootstrap/Button';

export default function NotFound() {
  return (
    <div className='container not-found'>
      <h1>404 - Page non trouvée</h1>
      <p>Désolé, cette page n'existe pas.</p>
      <Button href="/" className='a-btn'>Retour à l'accueil</Button>
    </div>
  )
}