import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg,
  IonLabel, IonItem, IonIcon, IonThumbnail
} from '@ionic/react';

const Home: React.FC = () => {
  return (
      <IonPage>
          <IonHeader>
              <IonToolbar>
                  <IonTitle>Home</IonTitle>
              </IonToolbar>
          </IonHeader>
          <IonContent fullscreen className="home-content">
              <IonHeader collapse="condense">
                  <IonToolbar>
                      <IonTitle size="large">Home</IonTitle>
                  </IonToolbar>
              </IonHeader>

              {/* Content */}
              <br/>
              <IonItem>
              <IonThumbnail slot="start">
                  <IonIcon icon="finger-"></IonIcon>
                  </IonThumbnail>
                  <IonLabel>Click Counter</IonLabel>
              </IonItem>

          </IonContent>
      </IonPage>
  );
};

export default Home;
