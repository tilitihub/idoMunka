/*
* File: app.js
* Author: Tiliczki Tibor
* Copyright: kopirájtkriptobájt
* Group: Szoft I/1/E
* Date: 2023-02-13
* Github: https://github.com/tilitihub/idoMunka
* Licenc: GNU GPL
*/
const lengthElem = document.querySelector('#length');
const feedElem = document.querySelector('#feed');
const rpmElem = document.querySelector('#rpm');
const calcButton = document.querySelector('#calcButton');
const areaElem = document.querySelector('#area');

calcButton.addEventListener('click', () => {
    
    let length = Number(lengthElem.value);
    let feed = Number(feedElem.value);
    let rpm = Number(rpmElem.value);
    let area = calcArea(length, feed, rpm);
    console.log(area);
    areaElem.value = area;

});

function calcArea(length, feed, rpm) {
    let area = length/(feed*rpm);
    return area;
}