const int pot = 0;
const int led = 8;
int valor = 0;
void setup() {
  Serial.begin(9600);
  pinMode(led, OUTPUT);
}

void loop() {
  valor = analogRead(pot);
  Serial.println(valor);

  if(Serial.available()){
    switch(Serial.read()){
      case 'a':
        //LIGAR O LED
        digitalWrite(led, HIGH);
        break;
      case 'b':
        //DESLIGAR O LED
        digitalWrite(led, LOW);
        break;
    }    
  }
  delay(2000);
}
