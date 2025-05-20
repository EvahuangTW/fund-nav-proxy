import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/nav', (req, res) => {
  const codes = req.query.codes?.split(',') || [];
  const sampleData = {
    S124984: { nav: 8.31, date: '2025-05-20' },
    A003100057: { nav: 9.12, date: '2025-05-20' }
  };

  const result = codes.map(code => ({
    fundCode: code,
    date: sampleData[code]?.date || 'N/A',
    nav: sampleData[code]?.nav || 'N/A'
  }));

  res.json(result);
});

app.listen(PORT, () => {
  console.log(`NAV Proxy running on port ${PORT}`);
});
