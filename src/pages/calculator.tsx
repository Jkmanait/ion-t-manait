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
      <IonContent fullscreen className="calculator-container">
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
                className="calculator-input"
              ></IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="2">
              <IonButton onClick={() => handleClick('7')} className="calculator-button">7</IonButton>
            </IonCol>
            <IonCol size="2">
              <IonButton onClick={() => handleClick('8')} className="calculator-button">8</IonButton>
            </IonCol>
            <IonCol size="2">
              <IonButton onClick={() => handleClick('9')} className="calculator-button">9</IonButton>
            </IonCol>
            <IonCol size="2">
              <IonButton onClick={() => handleClick('/')} className="calculator-button">/</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="2">
              <IonButton onClick={() => handleClick('4')} className="calculator-button">4</IonButton>
            </IonCol>
            <IonCol size="2">
              <IonButton onClick={() => handleClick('5')} className="calculator-button">5</IonButton>
            </IonCol>
            <IonCol size="2">
              <IonButton onClick={() => handleClick('6')} className="calculator-button">6</IonButton>
            </IonCol>
            <IonCol size="2">
              <IonButton onClick={() => handleClick('*')} className="calculator-button">*</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="2">
              <IonButton onClick={() => handleClick('1')} className="calculator-button">1</IonButton>
            </IonCol>
            <IonCol size="2">
              <IonButton onClick={() => handleClick('2')} className="calculator-button">2</IonButton>
            </IonCol>
            <IonCol size="2">
              <IonButton onClick={() => handleClick('3')} className="calculator-button">3</IonButton>
            </IonCol>
            <IonCol size="2">
              <IonButton onClick={() => handleClick('-')} className="calculator-button">-</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="2">
              <IonButton onClick={() => handleClick('0')} className="calculator-button">0</IonButton>
            </IonCol>
            <IonCol size="2">
              <IonButton onClick={() => handleClick('.')} className="calculator-button">.</IonButton>
            </IonCol>
            <IonCol size="2">
              <IonButton onClick={() => handleClick('=')} className="calculator-button">=</IonButton>
            </IonCol>
            <IonCol size="2">
              <IonButton onClick={() => handleClick('+')} className="calculator-button">+</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonRow>
          <IonCol size="15">
            <IonInput
              value={result}
              placeholder="Result"
              readonly
              className="calculator-input"
              style={{ fontWeight: 'bold' }}
            ></IonInput>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
