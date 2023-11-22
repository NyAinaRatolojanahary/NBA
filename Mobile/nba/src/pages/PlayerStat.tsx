import { IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonTitle, IonToolbar } from "@ionic/react";
import { home } from 'ionicons/icons';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Style.css';

const PlayerStat: React.FC = () => {
    const { playerId } = useParams<{ playerId: string }>();
    const [playerStats, setPlayerStats] = useState<any>(null); // Remplacez 'any' par le type de données attendu pour les statistiques du joueur

    useEffect(() => {
        // Utilisez l'ID reçu pour appeler le web service et obtenir les statistiques du joueur
        fetch(`https://jsonplaceholder.typicode.com/post`) // Remplacez l'URL par votre service
            .then(response => response.json())
            .then(data => setPlayerStats(data))
            .catch(error => console.error(error));
    }, [playerId]);

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref={`/PlayerDetails/${playerId}`}> Retour</IonBackButton>
                    </IonButtons>
                    <IonTitle>Player Statistics
                        <IonIcon slot="start" icon={home}></IonIcon>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h2>Player Statistics</h2>
                {playerStats && (
                    <IonList>
                        <IonItem>
                            <IonLabel>{playerStats.stat1}</IonLabel>
                        </IonItem>
                        {/* Ajoutez d'autres éléments pour afficher d'autres statistiques si nécessaire */}
                    </IonList>
                )}
            </IonContent>
        </>
    );
};

export default PlayerStat;
