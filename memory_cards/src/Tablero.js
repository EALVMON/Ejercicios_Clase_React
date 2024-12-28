import React, { useState, useEffect, useRef } from 'react';
import Card from './Card.js';
import Mensaje from './Mensaje.js';
function Tablero() {

    // vamos a empezar creando el tablero 
    // me empiezo creando una variable de tipo state

    const [cardList, setCardList] = useState([]); // creamos un arraylist y lo inicializo vacio
    const flippedCards = useRef([]);
    // const [indexCards, setIndexCard] = useState([]); se lo creo la profe para hacer el ramdon
    const intervalId = useRef(null);
    const executedTimes = useRef(0);
    const [msgWin, setMsgWin] = useState("");
    const flagInterval = useRef(false);
    const initCards = () => { // esto va a crear una lista con las imagenes
        let aux = [] // creamos una variable con let mejor que ocupa menos y creamos un array uxiliar
        // ya que no podemos trabajar directamente sobre setCartList 
    


        aux.push({ id: 0, state: 0, imagen: './As_de_Bastos.jpg' }); // aqui vamos a crear la primera carta, le damos un id, le damos un estado en este caso 0 para cuando este dada la vuelta, y la url donde esta            
        aux.push({ id: 1, state: 0, imagen: './As_de_Copas.jpg' });
        aux.push({ id: 2, state: 0, imagen: './As_de_Espadas.jpg' });
        aux.push({ id: 3, state: 0, imagen: './As_de_Oros.jpg' });
        aux.push({ id: 4, state: 0, imagen: './As_de_Bastos.jpg' });
        aux.push({ id: 5, state: 0, imagen: './As_de_Copas.jpg' });
        aux.push({ id: 6, state: 0, imagen: './As_de_Espadas.jpg' });
        aux.push({ id: 7, state: 0, imagen: './As_de_Oros.jpg' });
        //setCardList(aux); // para poder ver lo que tenemos
        // lo que hizo la profe para el ramdon
        //let arr = [0,1,2,3,4,5,6,7]
        //arr.sort((a,b) => 0.5 - Math.random())
        //setIndexcard(arr);
        // // Mezclamos las cartas para que no estén ordenadas
        setCardList(aux.sort(() => Math.random() - 0.5));


    }

    const init = () => {
        initCards();
        setMsgWin("");
       // if (executedTimes!=undefined) executedTimes= 0;

    }
    const flip = (index) => { //recibe d eentrada el id

        if (flippedCards.current != undefined) {
            if (cardList[index].state == 1 || flagInterval.current) return;
            if (flippedCards.current.length == 0) {
                flippedCards.current.push(cardList[index]);
                cardList[index].state = 1;
            }
            else if (flippedCards.current.length == 1) {
                // en el caso de encontrar dos iguales
                if (flippedCards.current[0].imagen != cardList[index].imagen) {

                    const fIntervalId = (paramid) => {
                        cardList[index].state = 0;
                        cardList.map((card) => { if (card.id == paramid) card.state = 0 })
                        setCardList([...cardList]);
                        executedTimes.current = 1;
                        flagInterval.current=false;
                    };
                    executedTimes.current = 0;
                    flagInterval.current=true;
                    intervalId.current = setInterval(fIntervalId, 1000, flippedCards.current[0].id);
                }
                cardList[index].state = 1;
                flippedCards.current = [];
            }
            setCardList([...cardList]);
        }
    }
    // lo que voy hacer ahora es en el montaje del array list se inicialice ese arrayList

    useEffect(() => { //() tiene que ser una funcion, cuyo contenido por si tenemos que utilizarlo es llamar a init
        initCards(); // llamo a una funcion que se llam ainitcards
    }, []);

    useEffect(() => {
        if (intervalId != null && intervalId.current != null && executedTimes != null && executedTimes.current == 1) {
            clearInterval(intervalId.current);
            executedTimes.current = 0;
            intervalId.current = null;
        }
        if (cardList.length > 0) {
            var flag = true;
            cardList.map((card) => {
                 if (card.state == 0) { 
                    flag = false; 
                    //break;
                 } 
                });
            if (flag) setMsgWin("Felicidadessssssssssssssssss Has Ganado");
        }
        else {
            if (flag) setMsgWin("");
        }
    }, [cardList, setCardList]);

    return (  // lo ponemos de tipo container porque estamos con bootsrtap y otro row
        // luego por cada carta con jsx nos creamos un con¡mponente card 
        // por cada uno de los elementos devolvemos un <card></card> cuya key va ser card.id
        // luego del key le pasamos el componente card con el data
        <> {msgWin.length > 1 && <Mensaje texto={msgWin} handler={init}/>}

            <div className='container'>
                <div className='row'>
                    &nbsp;
                </div>

                <div className='row'>

                    {cardList.map((card, index) => (
                        <Card key={card.id} indice={index} data={card} handler={flip} />
                    ))}
                </div>
            </div>
        </>);
}
export default Tablero;