import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/react';

const TodoList: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
            <IonBackButton defaultHref="/home" /> {/* Back button */}
          </IonButtons>
          <IonTitle>To Do List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* No content here */}
      </IonContent>
    </IonPage>
  );
};

export default TodoList;
