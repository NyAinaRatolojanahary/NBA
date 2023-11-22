import { IonBackButton, IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonTitle, IonToolbar } from "@ionic/react";
import { home } from 'ionicons/icons';
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import './Style.css';

const TeamList: React.FC = () => {
    const history = useHistory();
    const [posts, setPosts] = useState([]);

    const listeJoueur = (idEquipe: number) => {
        history.push({
            pathname: '/PlayerList',
            state: { myData: idEquipe }
        });
    };

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/Home"> Retour </IonBackButton>
                    </IonButtons>
                    <IonTitle>Teams
                        <IonIcon slot="start" icon={home}></IonIcon>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h2>All Teams</h2>
                <IonList>
                    {posts.map((post: any) => ( // Assurez-vous d'ajuster le type de 'post' en fonction de la structure de vos données
                        <IonItem key={post.id} onClick={() => listeJoueur(post.id)}>
                            <IonLabel>{post.title}</IonLabel>
                        </IonItem>
                    ))}
                </IonList>
            </IonContent>
        </>
    );
};

export default TeamList;
