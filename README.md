P5

Project 05 of CIT 281 course

Learning Objectives

After completing this project, you will:

Gain experience working with classes, including class constructors and methods

Gain experience interpreting existing code to design a new class, including constructor and methods

Gain more experience working with code modules

Gain experience executing and debugging Node.js code using VSCode, including module breakpoints

Gain more experience working with Array map() and forEach() methods

Gain experience working with the concept of a gaming loop

Gain more experience working with objects and arrays

Overview

For this project, you will create a Monster Game program using classes. The game will create monsters with initial life values, and minimum life values for the monster to be alive. Once the game is running, each monster's life will be drained by a random amount, and the game will continue until all of the monsters have died. The game will include a delay before each life drain.

The project will consist of the following files and functionality:

p5.js:

The complete code for this file is provided.

p5-monster-game.js:

The file is a code module with a MonsterGame class.

The class constructor accepts an object with initial game values, and creates the initial list of monsters.
The listMonsters() method will list each of the monsters to the console (see screen capture below). You will write this method, and must use forEach() Array method, and template literal.

p5-monster.js:

This file contains the Monster class.

You will need to look at the use of the Monster class in the p5-monster-game.js file to see how you will need to code your class, including the class constructor and methods, and will include the following class methods:

constructor():

Accepts an object parameter, deconstructs the object into the following variables and matching this class properties, with the specified default values

<img width="278" alt="Screenshot 2023-06-07 at 8 51 07 PM" src="https://github.com/isigala4/cit281-p5/assets/133719793/50bc1854-bf90-42e5-bb80-1a718edcbbf4">

The following were all the project deliverables(the code files are included in GitHub as files):

p5.js

p5-monster-game.js

p5-monster.js
