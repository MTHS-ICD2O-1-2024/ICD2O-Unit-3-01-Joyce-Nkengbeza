// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Joyce Nkengbeza
// Created on: Mar 2025
// This file contains the JS functions for index.html

"use strict"

function calculatesalary() {
  // input
  const hoursworked = parseFloat(document.getElementById('hours-worked').value);
  const hourlywage = parseFloat(document.getElementById('hourly-wage').value);
    

  // process
    const salaryweekly = (hoursworked * hourlywage) * (1.00 - 0.18)
    const incometax = (hoursworked * hourlywage) * 0.18

  // output
  document.getElementById('salary').innerHTML = 'Your pay will be: $' +  salaryweekly.toFixed(2)
  document.getElementById('incometax').innerHTML = 'The Government will take: $' + incometax.toFixed(2)
}

