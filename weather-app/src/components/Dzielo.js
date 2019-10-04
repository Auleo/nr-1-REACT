import React from 'react';

const Dzielo = props =>   {                    //twoże komponent funkcyjny
return (
  //po klikniciu wyszukanie miasta w impucie
  <div onSubmit = {props.submit}>
    <input type="text" value={ props.value } onChange={props.value} 
    placeholder = "Wpisz miasto" />
    <button> Szukaj miasta :</button>
  </div>
)
}

export default Dzielo              // jedna rzecz moze byc default owa
//komponentgit 