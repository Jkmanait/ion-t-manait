import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonRouterLink,
  IonIcon
} from '@ionic/react';
import { fingerPrintOutline, heartOutline } from 'ionicons/icons'; // Import the icon you want to use

const CardExample: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Card Example</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol size="6">
              <IonRouterLink href="/card1">
                <IonCard>
                  <IonCardHeader>
                    <IonIcon slot="start" icon={fingerPrintOutline} /> {/* Icon */}
                    <IonCardSubtitle></IonCardSubtitle>
                    <IonCardTitle>Click Counter</IonCardTitle>
                  </IonCardHeader>
                  
                </IonCard>
              </IonRouterLink>
            </IonCol>
            {/* Repeat for other cards */}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default CardExample;
