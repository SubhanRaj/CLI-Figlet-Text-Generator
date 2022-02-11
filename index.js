#!usr/bin/env node

/* An Node JS ASCII text generator that uses Inquirer JS to ask fro text input from User, than format it
    and print it to the console using figlet. */

// Importing the required modules
import figlet from 'figlet';
import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';


const title = chalkAnimation.rainbow('Welcome to the ASCII text generator!'); 
// Glitching the text




// console.log(chalk.yellow('Do you want to generate ASCII text using figlet or use chalkAnimation?'));