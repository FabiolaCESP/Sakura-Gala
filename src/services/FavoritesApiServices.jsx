import React, { Component } from 'react';

function deleteReading(id) {
    const requestOptions = {
        method: "DELETE"
      };
      
     return fetch(`http://localhost:4000/readings/${id}`, requestOptions)
        .then((response) => response.json())
        
}

function addReading(data) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: "POST",
        body:JSON.stringify(data),
        headers: myHeaders
      };
      
     return fetch(`http://localhost:4000/readings`, requestOptions)
        .then((response) => response.json())
        
}

function getReadings() {
    const requestOptions = {
        method: "GET"
      };
      
     return fetch(`http://localhost:4000/readings`, requestOptions)
        .then((response) => response.json())     
}

export { deleteReading, addReading, getReadings } ;