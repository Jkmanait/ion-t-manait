import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton } from '@ionic/react';
import './click-counter.css';

const ClickCounter: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);

  const incrementCount = () => {
    setClickCount(prevCount => prevCount + 1);
  };

  const resetCount = () => {
    setClickCount(0);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" /> {/* Back button */}
          </IonButtons>
          <IonTitle>Click Counter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Click Counter</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="ion-text-center ion-padding">
          <h2>Clicks: {clickCount}</h2>
          <IonButton onClick={incrementCount} color="dark">Click Me</IonButton>
          <IonButton onClick={resetCount} color="light">Erase</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ClickCounter;
