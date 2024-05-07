import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './profile.css';

const Blank: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonCard>
          {/* <IonCardHeader>
            <IonCardTitle>Manait, James Kenneth</IonCardTitle>
            <IonCardSubtitle>Student</IonCardSubtitle>
          </IonCardHeader> */}
          <IonCardContent>
            {/* Your content here */}
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Blank;
