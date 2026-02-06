import './Legal-mentions.css';

function LegalMentionsPage() {
    return (
        <main className="legal-mentions container my-5">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-10">
                    <h1 className="text-center mb-5">Mentions Légales</h1>

                    <section className="mb-5">
                        <h2>1. Éditeur du site</h2>
                        <p>
                            <strong>Nom :</strong> Vincent Gillet<br />
                            <strong>Statut :</strong> Portfolio personnel<br />
                            <strong>Email :</strong> <a href="mailto:vincent-gillet@neuf.fr">vincent-gillet@neuf.fr</a><br />
                        </p>
                    </section>

                    <section className="mb-5">
                        <h2>2. Hébergement</h2>
                        <p>
                            <strong>Hébergeur :</strong> Netlify<br />
                            <strong>Siège social :</strong> 610 22ND St Ste 315 San Francisco, CA, 94107-3163 United States<br />
                            <strong>Site web :</strong> <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">https://www.netlify.com</a>
                        </p>
                    </section>

                    <section className="mb-5">
                        <h2>3. Propriété intellectuelle</h2>
                        <p>
                            L'ensemble du contenu de ce site (textes, images, code source, design) est la propriété 
                            exclusive de Vincent Gillet et est protégé par les lois françaises et internationales relatives 
                            à la propriété intellectuelle.
                        </p>
                        <p>
                            Toute reproduction, distribution ou utilisation sans autorisation préalable est strictement interdite.
                        </p>
                    </section>

                    <section className="mb-5">
                        <h2>4. Protection des données personnelles (RGPD)</h2>
                        
                        <h3 className="h5 mt-4">4.1. Collecte des données</h3>
                        <p>
                            Les données personnelles collectées via le formulaire de contact sont :
                        </p>
                        <ul>
                            <li>Nom et prénom</li>
                            <li>Adresse email</li>
                            <li>Message</li>
                        </ul>

                        <h3 className="h5 mt-4">4.2. Finalité</h3>
                        <p>
                            Ces données sont collectées uniquement dans le but de répondre à vos demandes de contact 
                            et ne sont en aucun cas utilisées à des fins commerciales ou transmises à des tiers.
                        </p>

                        <h3 className="h5 mt-4">4.3. Durée de conservation</h3>
                        <p>
                            Les données sont conservées pendant une durée maximale de 3 ans à compter du dernier contact.
                        </p>

                        <h3 className="h5 mt-4">4.4. Vos droits</h3>
                        <p>
                            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
                        </p>
                        <ul>
                            <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
                            <li><strong>Droit de rectification :</strong> corriger des données inexactes</li>
                            <li><strong>Droit à l'effacement :</strong> supprimer vos données</li>
                            <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                        </ul>
                        <p>
                            Pour exercer ces droits, contactez-moi à : <a href="mailto:vincent-gillet@neuf.fr">vincent-gillet@neuf.fr</a>
                        </p>
                    </section>

                    <section className="mb-5">
                        <h2>5. Cookies</h2>
                        <p>
                            Ce site n'utilise pas de cookies de suivi ou de cookies tiers. Aucun cookie publicitaire 
                            n'est déposé sur votre appareil lors de votre navigation.
                        </p>
                    </section>

                    <section className="mb-5">
                        <h2>6. Limitation de responsabilité</h2>
                        <p>
                            Vincent Gillet s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées 
                            sur ce site. Toutefois, il ne peut garantir l'exactitude, la précision ou l'exhaustivité 
                            des informations mises à disposition.
                        </p>
                        <p>
                            En conséquence, Vincent Gillet décline toute responsabilité pour toute imprécision, inexactitude 
                            ou omission portant sur des informations disponibles sur ce site.
                        </p>
                    </section>

                    <section className="mb-5">
                        <h2>7. Liens hypertextes</h2>
                        <p>
                            Ce site peut contenir des liens vers des sites externes. Vincent Gillet ne saurait être tenu 
                            responsable du contenu de ces sites tiers.
                        </p>
                    </section>

                    <section className="mb-5">
                        <h2>8. Droit applicable</h2>
                        <p>
                            Les présentes mentions légales sont régies par le droit français. Tout litige relatif à 
                            l'utilisation de ce site relève de la compétence exclusive des tribunaux français.
                        </p>
                    </section>

                    <section className="mb-5 text-muted">
                        <p>
                            <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                            })}
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}

export default LegalMentionsPage;