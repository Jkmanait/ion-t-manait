import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg
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
              

          </IonContent>
      </IonPage>
  );
};

export default Home;
