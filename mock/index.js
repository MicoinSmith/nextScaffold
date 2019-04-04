const express = require('express');
const app = express();

const port = parseInt(process.env.PORT, 10) || 3000;

app.all('*', (req, res, next)=>{
  console.log('req.url: ', req.url);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  req.method === 'OPTIONS' ? res.send(200) : next();
});

app.get('/api/v1/*', (req, res)=>{
  console.log('req: ', req.url);

  const list = [];
  for (var i = 0; i < 10; i++) {
    list.push(
      {
        name: 'vbhnjmk',
        price: '$9.99',
        vendor: 'made in china'
      }
    );
  }

  res.send({
    code: 200,
    list
  });
});

// ç›‘å�¬ç«¯å�£
app.listen(port, function () {
  console.log(`localhost:${port}`);
});
