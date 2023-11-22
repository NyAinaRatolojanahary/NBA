import { IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonTitle, IonToolbar } from "@ionic/react";

const StatPerso: React.FC= () =>{

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/PlayerList"> Retour</IonBackButton>
                    </IonButtons>
                    <IonTitle>Nom Player
                        <IonIcon slot="start"></IonIcon>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h2>Player Details</h2>
                
            </IonContent>
        </>
    );
};

export default StatPerso;