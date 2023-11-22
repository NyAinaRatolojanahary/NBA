import { IonButton, IonContent,  IonHeader, IonIcon, IonTitle, IonToolbar } from "@ionic/react";
import { home } from 'ionicons/icons';
import { useHistory } from "react-router-dom";
import './Style.css';

const Home: React.FC = () =>{

    const history = useHistory();

    const TeamList = () => {
        history.push('/TeamList');
    };

    return (
        <>
            <IonHeader class='header'>
                <IonToolbar>
                    <IonTitle>NBA
                        <IonIcon slot="start" icon={home}></IonIcon>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h2>Welcome to NBA</h2>


                <h4>You can see all teams of this seasons in the link below</h4>
                
                
                <IonButton fill="outline" onClick={TeamList}>Teams</IonButton>
            </IonContent>
            

        </>
    );
};

export default Home;