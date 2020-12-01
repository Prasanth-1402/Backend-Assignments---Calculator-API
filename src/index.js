const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const maxLimit = 1000000;
const minLimit = -1000000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());
// your code goes here

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.post('/add', (req, res) => {
  const firstNum = req.body.num1;
  const secondNum = req.body.num2;
  if (typeof firstNum == 'string' || typeof secondNum == 'string') {
    res.status(404).send({
      status: 'failure',
    });
  }
  //   console.log(firstNum + ' ' + secondNum );
  else if (firstNum < minLimit || secondNum < minLimit) {
    res.status(404).send({
      status: 'failure',
      message: 'Underflow',
    });
  } else if (firstNum > maxLimit || secondNum > maxLimit) {
    res.status(404).send({
      status: 'failure',
      message: 'Overflow',
    });
  } else {
    res.send({
      status: 'success',
      message: 'the sum of given two numbers',
      sum: firstNum + secondNum,
    });
  }
});

app.post('/sub', (req, res) => {
  const firstNum = req.body.num1;
  const secondNum = req.body.num2;
  if (typeof firstNum == 'string' || typeof secondNum == 'string') {
    res.status(404).send({
      status: 'failure',
    });
  } else if (firstNum < minLimit || secondNum < minLimit) {
    res.status(404).send({
      status: 'failure',
      message: 'Underflow',
    });
  } else if (firstNum > maxLimit || secondNum > maxLimit) {
    console.log('MAXI MAXXXXX');
    res.status(404).send({
      status: 'failure',
      message: 'Overflow',
    });
  } else {
    res.set('status', 'success');
    res.set('result', firstNum / secondNum);
    res.status(200).send({
      status: 'success',
      message: 'The difference of given two numbers',
      result: firstNum - secondNum,
    });
  }
});

app.post('/multiply', (req, res) => {
  const firstNum = req.body.num1;
  const secondNum = req.body.num2;
  if (typeof firstNum == 'string' || typeof secondNum == 'string') {
    res.status(404).send({
      status: 'failure',
    });
  } else if (firstNum < minLimit || secondNum < minLimit) {
    res.status(404).send({
      status: 'failure',
      message: 'Underflow',
    });
  } else if (firstNum > maxLimit || secondNum > maxLimit) {
    res.status(404).send({
      status: 'failure',
      message: 'Overflow',
    });
  } else {
    res.status(200).send({
      status: 'success',
      message: 'The product of given numbers',
      result: firstNum * secondNum,
    });
  }
});

app.post('/divide', (req, res) => {
  const firstNum = req.body.num1;
  const secondNum = req.body.num2;
  console.log(typeof firstNum + ' ' + typeof secondNum);
  if (typeof firstNum == 'string' || typeof secondNum == 'string') {
    res.status(404).send({
      status: 'failure',
    });
  } else if (secondNum === 0) {
    res.status(404).send({
      status: 'error',
      message: 'Cannot divide by Zero',
    });
  } else if (firstNum < minLimit || secondNum < minLimit) {
    res.status(404).send({
      status: 'failure',
      message: 'Underflow',
    });
  } else if (firstNum > maxLimit || secondNum > maxLimit) {
    res.status(404).send({
      status: 'failure',
      message: 'Overflow',
    });
  } else {
    res.set('status', 'success');
    res.set('result', firstNum / secondNum);
    res.status(200).send({
      status: 'success',
      message: 'The division of given numbers',
      result: firstNum / secondNum,
    });
  }
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
