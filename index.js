const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;

const HD_ENDPOINT = 'https://app.humandesign.ai/api/v1/chart';

const fetchChart = async (body) => {
  const response = await axios.post(HD_ENDPOINT, body, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    }
  });
  return response.data;
};

app.post('/type', async (req, res) => {
  const data = await fetchChart(req.body);
  res.json({ type: data.type });
});

app.post('/strategy', async (req, res) => {
  const data = await fetchChart(req.body);
  res.json({ strategy: data.strategy });
});

app.post('/authority', async (req, res) => {
  const data = await fetchChart(req.body);
  res.json({ authority: data.authority });
});

app.post('/profile', async (req, res) => {
  const data = await fetchChart(req.body);
  res.json({ profile: data.profile });
});

app.post('/centers', async (req, res) => {
  const data = await fetchChart(req.body);
  res.json({ centers: data.centers });
});

app.post('/channels', async (req, res) => {
  const data = await fetchChart(req.body);
  res.json({ channels: data.channels });
});

app.post('/gates', async (req, res) => {
  const data = await fetchChart(req.body);
  res.json({ gates: data.gates });
});

app.post('/incarnationCross', async (req, res) => {
  const data = await fetchChart(req.body);
  res.json({ incarnationCross: data.incarnationCross });
});

app.listen(PORT, () => {
  console.log(`HD proxy API listening on port ${PORT}`);
});
