// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Joyce Nkengbeza
// Created on: Mar 2025
// This file contains the JS functions for index.html

"use strict"

function calculatesalary() {
  // input
  const abase = parseFloat(document.getElementById('a-base').value);
  const bbase = parseFloat(document.getElementById('b-base').value);
  const height = parseFloat(document.getElementById('height-lenghth').value);
    

  // process
    const trapezoidarea = [(abase + bbase) / 2] * height

  // output
  document.getElementById('area').innerHTML = 'area is:' + trapezoidarea + 'mm²'
}

