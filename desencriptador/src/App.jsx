import React from 'react';

const App = () => {  
  const encrypt_original = "^[()`~^*/?`[()^+`-~()#[$()/~()%\\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\\{()*~¡[$[{( )¡[()?=[]`\\¬]()¿()[{;+[$__~()`~]=\\]+~";
  const posible = "Me complace mucho ver lo bien que estoy trabajando y cómo esto aumentan mis poderes de atención y esfuerzo continuo."
  let encrypt = "^[()`~^*/?`[()^+`-~()#[$()/~()%\\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\\{()*~¡[$[{()¡[()?=[]`\\¬]()¿()[{;+[$__~()`~]=\\]+~";

  // prueba
  encrypt = encrypt.replace(/\?/g, 'a');
  encrypt = encrypt.replace(/\[/g, 'e');
  encrypt = encrypt.replace(/\\/g, 'i');
  encrypt = encrypt.replace(/\~/g, 'o');
  encrypt = encrypt.replace(/\+/g, 'u');
  encrypt = encrypt.replace(/\¬/g, 'ó');
  encrypt = encrypt.replace(/\^/g, 'm');
  encrypt = encrypt.replace(/\$/g, 'r');
  encrypt = encrypt.replace(/\(\)/g, ' ');

  encrypt = encrypt.replace(/\`/g, 'c'); // segun yo 
  encrypt = encrypt.replace(/\*/g, 'p'); // segun yo 
  encrypt = encrypt.replace(/\//g, 'l'); // segun yo 
  encrypt = encrypt.replace(/\-/g, 'h'); // segun yo 
  encrypt = encrypt.replace(/\#/g, 'v'); // segun yo 
  encrypt = encrypt.replace(/\%/g, 'b'); // segun yo 
  encrypt = encrypt.replace(/\]/g, 'n'); // segun yo 
  encrypt = encrypt.replace(/\}/g, 'q'); // segun yo 
  encrypt = encrypt.replace(/\{/g, 's'); // segun yo 
  encrypt = encrypt.replace(/\=/g, 't'); // segun yo 
  encrypt = encrypt.replace(/\¿/g, 'y'); // segun yo 
  encrypt = encrypt.replace(/\!/g, 'j'); // segun yo 
  encrypt = encrypt.replace(/\¡/g, 'd'); // segun yo 
  encrypt = encrypt.replace(/\;/g, 'f'); // segun yo 
  encrypt = encrypt.replace(/\__/g, 'z'); // segun yo 


  console.log("Cadena modificada: ", encrypt);

  return (
    <div>
      <h1>Desencriptador en React</h1>
      <p>La variable encrypt contiene: {encrypt}</p>
      <p>La variable encrypt_original contiene: {encrypt_original}</p>
    </div>
  );
};

export default App;
