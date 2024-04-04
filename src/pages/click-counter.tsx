import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {
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
          <IonButton onClick={incrementCount}>Click Me</IonButton>
          <IonButton onClick={resetCount} color="danger">Erase</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
