import React, { useState } from 'react';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonItemDivider,
  IonSearchbar,
  IonBadge
} from '@ionic/react';

//Custom CSS
import './home.css';

//Ionic Icons
import { speedometerOutline,calculator,pencil, chatbubble, readerOutline, logoIonic,logoFirebase, logoReact} from 'ionicons/icons';

import image1 from '../assets/img/click-counter.gif'; 
import image2 from '../assets/img/calculator.gif'; 
import image3 from '../assets/img/todolist.gif'; 
import image4 from '../assets/img/generator.gif'; 
import image5 from '../assets/img/notes.gif'; 


const cardData = [
  {
    title: 'Click Counter',
    icon: speedometerOutline,
    subtitle: 'Applet #1',
    link: 'home/clickcounter',
    image: image1
  },
  {
    title: 'Calculator',
    icon: calculator,
    subtitle: 'Applet #2',
    link: 'home/calculator',
    image: image2
  },
  {
    title: 'To Do List',
    icon: pencil,
    subtitle: 'Applet #3',
    link: 'home/todolist',
    image: image3
  },
  {
    title: 'Quote Generator',
    icon: chatbubble,
    subtitle: 'Applet #4',
    link: 'home/quotesgenerator',
    image: image4
  },
  {
    title: 'Notes',
    icon: readerOutline,
    subtitle: 'Applet #5',
    link: 'home/notes',
    image: image5
  }
  
];

const Home: React.FC = () => {
  {/*Dynamic Search*/}
  const [searchTerm, setSearchTerm] = useState<string>('');
  
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
          
          {/*Dynamic Search*/}
          <IonSearchbar 
            value={searchTerm} 
            onIonInput={(e) => setSearchTerm(e.target.value ?? '')} 
          />
          
          {cardData
            .filter((card) => card.title.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((card, index) => (
              <IonCard key={index} routerLink={card.link} routerDirection='forward'>
                <IonCardHeader>
                  <IonCardTitle>
                    <IonGrid>
                      <IonRow>
                        {/* <IonCol size="2">
                          <IonIcon className="home-card-icon" icon={card.icon} color="primary" />
                        </IonCol> */}
                        <img src ={card.image} className="card-gif" />
                        <IonCol size="auto">
                            <div className="home-card-title">{card.title}</div>
                            <IonCardSubtitle>{card.subtitle}</IonCardSubtitle>
                            {/* {card.tags && Object.entries(card.tags).map(([key, icon], i) => (
                              <IonIcon
                                key={i}
                                className="home-card-subicon"
                                icon={icon}
                                color="primary" // Set color as needed
                              />
                            ))} */}
                          </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonCardTitle>
                </IonCardHeader>
              </IonCard>
          ))}
        </IonContent>
      </IonPage>
    );
};
  
export default Home;
  