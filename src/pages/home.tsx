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
          <IonContent fullscreen>
              <IonHeader collapse="condense">
                  <IonToolbar>
                      <IonTitle size="large">Home</IonTitle>
                  </IonToolbar>
              </IonHeader>

              {/* Content */}
              <IonCard>

                  <IonCardHeader>
                      <IonCardSubtitle>Welcome to my First App!</IonCardSubtitle>
                      <IonImg src="path_to_your_image" alt="Image" />
                      <IonCardTitle>This is the home page</IonCardTitle>
                  </IonCardHeader>

                  <IonCardContent>
                      <p>This is where you can display your home page content.</p>
                      <IonButton expand="block" routerLink="/profile">Go to Profile</IonButton>
                  </IonCardContent>
              </IonCard>

          </IonContent>
      </IonPage>
  );
};

export default Home;
