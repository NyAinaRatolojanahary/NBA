import { IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonTitle, IonToolbar } from "@ionic/react";
import { home } from 'ionicons/icons';
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import './Style.css';

const PlayerDetails: React.FC = () => {
    const { playerId } = useParams<{ playerId: string }>();
    const [playerDetails, setPlayerDetails] = useState<any>(null); // Remplacez 'any' par le type de données attendu pour les détails du joueur
    const history = useHistory();

    useEffect(() => {
        // Utilisez l'ID reçu pour appeler le web service et obtenir les détails du joueur
        fetch(`https://jsonplaceholder.typicode.com/posts/${playerId}`) // Remplacez l'URL par votre service
            .then(response => response.json())
            .then(data => setPlayerDetails(data))
            .catch(error => console.error(error));
    }, [playerId]);

    const navigateToGeneralDetails = () => {
        // Lorsque l'utilisateur clique sur la ligne de détails, naviguez vers la page de détails généraux du joueur
        history.push(`/StatPerso/${playerId}`);
    };

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/TeamList"> Retour</IonBackButton>
                    </IonButtons>
                    <IonTitle>Nom Player
                        <IonIcon slot="start" icon={home}></IonIcon>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h2>Player Details</h2>
                {playerDetails && (
                    <IonList>
                        <IonItem onClick={navigateToGeneralDetails}>
                            <IonLabel>{playerDetails.title}</IonLabel>
                        </IonItem>
                        {/* Ajoutez d'autres éléments pour afficher d'autres détails si nécessaire */}
                    </IonList>
                )}
            </IonContent>
        </>
    );
};

export default PlayerDetails;
