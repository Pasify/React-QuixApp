# React QuixApp - A Simple Quiz App using useReducer

React QuixApp is a small React application that demonstrates the use of the useReducer hook to manage the state of a simple quiz. The app fetches 15 questions from an API and allows users to answer each question while keeping track of their progress.

## Features

- Fetches 15 quiz questions from an API.
- Displays one question at a time with multiple-choice answers.
- Tracks user's selected answer and highlights the correct answer.
- Provides feedback on whether the user's answer is correct or not.
- Displays the user's overall score at the end of the quiz.
  Utilizes the useReducer hook to manage the state of the quiz.
- Timer to show minutes left to finish the quiz, and automatically ends the game once the time is up.

## Installation and Usage

1. Clone the repository to your local machine:

```bash
git clone https://github.com/Pasify/React-QuixApp.git
```

2. Navigate to the project directory:

```
cd react-quixapp
```

3. Install the required dependencies::

   ```
    npm install
   ```

4. Start the development server:

   ```
    npm run dev
   ```

   This will launch the app in your default web browser. You can view it at http://localhost:5173.

# How to use

1. The app loads with the start screen showing you how many questions there is and a button to start the quiz.
2. once you start the quiz i displays your progress as well as the score you have accumulated as the quiz goes on.
3. Read the question and select your answer from the multiple-choice options.
4. once you select an answer it gets locked in and immediately display the correct answer, which will be highlighted and styled differently from the wrong answers.
5. After selecting an answer, and seeing the correct answer, click the "Next" button to move on to the next question.
6. Repeat steps 2-5 for all 15 questions.
7. At the end of the quiz, your total score and percentage will be displayed.

# Technologies Used

- React
- useReducer hook
- json-server (for fake API requests)
- CSS (for styling)

# Contributing

If you want to contribute to Flixbox, follow these steps:

Fork the repository.

1. Create a new branch for your feature:

   ```
    git checkout -b feature-name.

   ```

2. Make your changes and commit them:

   ```
    git commit -m 'Add some feature'.

   ```

3. Push the changes to your fork:

   ```
    git push origin feature-name.

   ```

4. Submit a pull request, and we'll review your changes.
