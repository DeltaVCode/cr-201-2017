
- List of questions
  - Question
    - Answer (y/n, number, array of answers)
    - Question text (string)
    - Question type (yn, number, multiple-answer)
    - Allowed attempts (number OR null/undefined for unlimited OR Infinity)
    - Points possible (1)
    - Message if correct
    - Message if incorrect
- List of responses
  - Answer provided in prompt
  // ['yes', 'no', 1, 'california']
- Current score

```javascript
var askQuestion = function() {
  return prompt(this.Text);
}

var gameModel = {
  Questions: [
    {
      Text: 'Am I old?',
      Answer: true, // typeof should be boolean or number, or Array.isArray() true
      MessageIfCorrect: 'Yep, old as dirt!',
      MessageIfIncorrect: 'You\'re sweet, but no. I\'m old.',
      AllowedAttempts: undefined, // or a number

      AskQuestion: askQuestion,
    },
    {
      Text: 'Where have I lived?',
      Answer: ['ia','wa'],
      MessageIfCorrect: 'That\'s right, I have lived in Iowa and Washington',
      MessageIfIncorrect: 'WRONG',

      AskQuestion: askQuestion
    },
    {
      Text: 'What is my favorite number?',
      Answer: 42,
      MessageIfCorrect: 'Good job!',
      MessageIfIncorrect: 'WRONG', // hint: can this be a function?
      AllowedAttempts: 6,

      AskQuestion: function() {
        return prompt(this.Text);
      }
    }
  ],
  UserResponses: [],
  UserScore: 0
};
```
