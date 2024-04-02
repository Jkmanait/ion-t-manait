import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol, IonInput } from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value: string) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Calculator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <IonInput
                value={input}
                placeholder="Enter expression"
                readonly
                style={{ textAlign: 'right' }}
              ></IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="3">
              <IonButton onClick={() => handleClick('7')}>7</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton onClick={() => handleClick('8')}>8</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton onClick={() => handleClick('9')}>9</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton onClick={() => handleClick('/')}>/</IonButton>
            </IonCol>
          </IonRow>
          {/* Add other rows of buttons here */}
          <IonRow>
            <IonCol size="3">
              <IonButton onClick={() => handleClick('C')}>C</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton onClick={() => handleClick('0')}>0</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton onClick={() => handleClick('=')}>=</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton onClick={() => handleClick('*')}>*</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonRow>
          <IonCol size="12">
            <IonInput
              value={result}
              placeholder="Result"
              readonly
              style={{ textAlign: 'right', fontWeight: 'bold' }}
            ></IonInput>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
