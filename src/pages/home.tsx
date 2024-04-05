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
              <IonCard>
                  <IonCardHeader>
                      <IonCardSubtitle className="bold-text">Welcome to my First App!</IonCardSubtitle>
                      <br/>
                      <IonImg src="../src/assets/img/avatar.PNG" alt="Image" />
                      <br/>
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
