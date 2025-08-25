const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;

const HD_API_URL = 'https://app.humandesign.ai/api/v1/chart';

const fetchChart = async (body) => {
  const response = await axios.post(HD_API_URL, body, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    }
  });
  return response.data;
};

app.post('/type', async (req, res) => {
  try {
    const data = await fetchChart(req.body);
    res.json({ type: data.type });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Nem sikerült lekérni a típust.' });
  }
});

app.post('/strategy', async (req, res) => {
  try {
    const data = await fetchChart(req.body);
    res.json({ strategy: data.strategy });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Nem sikerült lekérni a stratégiát.' });
  }
});

app.post('/authority', async (req, res) => {
  try {
    const data = await fetchChart(req.body);
    res.json({ authority: data.authority });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Nem sikerült lekérni az autoritást.' });
  }
});

app.post('/profile', async (req, res) => {
  try {
    const data = await fetchChart(req.body);
    res.json({ profile: data.profile });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Nem sikerült lekérni a profilt.' });
  }
});

app.post('/centers', async (req, res) => {
  try {
    const data = await fetchChart(req.body);
    res.json({ centers: data.centers });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Nem sikerült lekérni a központokat.' });
  }
});

app.post('/channels', async (req, res) => {
  try {
    const data = await fetchChart(req.body);
    res.json({ channels: data.channels });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Nem sikerült lekérni a csatornákat.' });
  }
});

app.post('/gates', async (req, res) => {
  try {
    const data = await fetchChart(req.body);
    res.json({ gates: data.gates });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Nem sikerült lekérni a kapukat.' });
  }
});

app.post('/incarnationCross', async (req, res) => {
  try {
    const data = await fetchChart(req.body);
    res.json({ incarnationCross: data.incarnationCross });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Nem sikerült lekérni az inkarnációs keresztet.' });
  }
});

app.listen(PORT, () => {
  console.log(`HD proxy API listening on port ${PORT}`);
});
