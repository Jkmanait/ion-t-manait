import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        
    <IonCard>
      <img alt="Silhouette of mountains" src="../src/assets/img/avatar.PNG" />
        <IonCardHeader>
          <IonCardTitle>Manait, James Kenneth</IonCardTitle>
           <IonCardSubtitle>Student</IonCardSubtitle>
            </IonCardHeader>

      <IonCardContent>Nothing more, nothing less.</IonCardContent>
    </IonCard>
        </IonContent>
      </IonPage>
  );
};

export default Tab1;
