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
  IonCol,
  IonRouterLink,
  IonIcon
} from '@ionic/react';
import { fingerPrintOutline, heartOutline, rocketOutline, thumbsUpOutline } from 'ionicons/icons'; // Import additional icons

const CardExample: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonCol size="6"> 
              <IonCard href="/click-counter">
                <IonCardHeader>
                  <IonIcon slot="start" icon={fingerPrintOutline} /> {/* Icon */}
                  <IonCardSubtitle></IonCardSubtitle>
                  <IonCardTitle className="ion-text-center">Click Counter</IonCardTitle>
                </IonCardHeader>
              </IonCard>        
          </IonCol>

          <IonCol size="6"> 
              <IonCard href="/calculator">
                <IonCardHeader>
                  <IonIcon slot="start" icon={heartOutline} /> {/* Icon */}
                  <IonCardSubtitle></IonCardSubtitle>
                  <IonCardTitle className="ion-text-center">Calculator</IonCardTitle>
                </IonCardHeader>
              </IonCard>
          </IonCol>

          <IonCol size="6">
            
              <IonCard href="/todolist">
                <IonCardHeader>
                  <IonIcon slot="start" icon={rocketOutline} /> {/* Icon */}
                  <IonCardSubtitle></IonCardSubtitle>
                  <IonCardTitle className="ion-text-center">To Do List</IonCardTitle>
                </IonCardHeader>
              </IonCard>

          </IonCol>

          <IonCol size="6">
            <IonRouterLink href="/card4">
              <IonCard>
                <IonCardHeader>
                  <IonIcon slot="start" icon={thumbsUpOutline} /> {/* Icon */}
                  <IonCardSubtitle></IonCardSubtitle>
                  <IonCardTitle className="ion-text-center"></IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonRouterLink>
          </IonCol>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default CardExample;
