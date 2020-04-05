import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const questions = [
      {
        question: 'Me love you long tim. Me lobe yoy long time',
        answer: 'Harvey, the computer',
        answered: false,
        value: 200,
      }, {
        question: 'The tea in Nepal is very hot. ___ ___ ______ __ ____ __ ____ ______',
        answer: 'But the coffee in Peru is much hotter.',
        answered: false,
        value: 200,
      }, {
        question: 'What is your name?',
        answer: 'I do not have to tell you',
        answered: false,
        value: 200,
      }, {
        question: 'What is the name of the good pizza place?',
        answer: 'Alfredo\'s Pizza Cafe',
        answered: false,
        value: 200,
      }, {
        question: 'What did Andy cook after being fired?',
        answer: 'Cherries Jubilee',
        answered: false,
        value: 200,
      }, {
        question: 'What is your name?',
        answer: 'I do not have to tell you',
        answered: false,
        value: 200,
      },

      {
        question: 'I’m not gonna start doubting my drunken self now',
        answer: 'Robert California',
        answered: false,
        value: 400,
      }, {
        question: 'You don’t know me _____ ____ ____ __ _____',
        answer: 'You\'ve just seen my penis',
        answered: false,
        value: 400,
      }, {
        question: 'How big a boy are you?',
        answer: 'I do not have to tell you',
        answered: false,
        value: 400,
      }, {
        question: 'What did Andy cook after being fired?',
        answer: 'Cherries Jubilee',
        answered: false,
        value: 400,
      }, {
        question: 'How big a boy are you?',
        answer: 'I do not have to tell you',
        answered: false,
        value: 400,
      }, {
        question: 'How big a boy are you?',
        answer: 'I do not have to tell you',
        answered: false,
        value: 400,
      },
      {
        question: 'I saw it. I saw it, and it was amazing! Who said I didn’t see it?',
        answer: 'Pam Beesley',
        answered: false,
        value: 600,
      }, {
        question: 'Sitting in my office with a _____ __ _______ _____',
        answer: 'plate of grilled bacon',
        answered: false,
        value: 600,
      }, {
        question: 'How big a boy are you?',
        answer: 'I do not have to tell you',
        answered: false,
        value: 600,
      }, {
        question: 'What Chinese thing did Andy eat at Gabe’s?',
        answer: 'Powdered seahorse',
        answered: false,
        value: 600,
      }, {
        question: 'How big a boy are you?',
        answer: 'I do not have to tell you',
        answered: false,
        value: 600,
      }, {
        question: 'How big a boy are you?',
        answer: 'I do not have to tell you',
        answered: false,
        value: 600,
      },
      {
        question: 'I don’t think Michael’s ever done drugs. I don’t know if anyone has ever offered him any.',
        answer: 'Ryan Howard',
        answered: false,
        value: 800,
      }, {
        question: 'The boat was actually Plan C. The Church was plan B and ___ _ ___ ________ ___ _ ____, ____ ____ ___',
        answer: 'Plan A was marrying her a long, long time ago',
        answered: false,
        value: 800,
      }, {
        question: 'How big a boy are you?',
        answer: 'I do not have to tell you',
        answered: false,
        value: 800,
      }, {
        question: 'What kind of beer was being advertised on Michael neon sign?',
        answer: 'St. Pauli Girl',
        answered: false,
        value: 800,
      }, {
        question: 'How big a boy are you?',
        answer: 'I do not have to tell you',
        answered: false,
        value: 800,
      }, {
        question: 'How big a boy are you?',
        answer: 'I do not have to tell you',
        answered: false,
        value: 800,
      },
      {
        question: 'Dr. Tuna, MD, I have some terrible news.',
        answer: 'Andy Bernard',
        answered: false,
        value: 1000,
      }, {
        question: 'How big a boy are you?',
        answer: 'I do not have to tell you',
        answered: false,
        value: 1000,
      }, {
        question: 'How big a boy are you?',
        answer: 'I do not have to tell you',
        answered: false,
        value: 1000,
      }, {
        question: 'Name 3 of the 4 of the meals that Kevin and pregnant Pam shared.',
        answer: 'Second breakfast, lunch, second lunch, and first dinner',
        answered: false,
        value: 1000,
      }, {
        question: 'How big a boy are you?',
        answer: 'I do not have to tell you',
        answered: false,
        value: 1000,
      }, {
        question: 'How big a boy are you?',
        answer: 'I do not have to tell you',
        answered: false,
        value: 1000,
      }
    ];
    const doubleJeopardy = [
      {
        question: 'XXXXXMe love you long tim. Me lobe yoy long time',
        answer: 'Harvey, the computer',
        answered: false,
        value: 200,
      }, {
        question: 'The tea in Nepal is very hot. ___ ___ ______ __ ____ __ ____ ______',
        answer: 'But the coffee in Peru is much hotter.',
        answered: false,
        value: 200,
      }, {
        question: 'What is your name?',
        answer: 'I do not have to tell you',
        answered: false,
        value: 200,
      }, {
        question: 'What is the name of the good pizza place?',
        answer: 'Alfredo\'s Pizza Cafe',
        answered: false,
        value: 200,
      }, {
        question: 'What did Andy cook after being fired?',
        answer: 'Cherries Jubilee',
        answered: false,
        value: 200,
      }, {
        question: 'What is your name?',
        answer: 'I do not have to tell you',
        answered: false,
        value: 200,
      },
    ];
    const finalJeopardy = [
      {
        question: 'Me love you long tim. Me lobe yoy long time',
        answer: 'Harvey, the computer',
        answered: false,
        value: 200,
      }
    ];
    return {questions};
  }
}
