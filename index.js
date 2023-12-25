const axios = require('axios');

const username = 'frizz131';
const token = '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';

const fetchContributions = async () => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}/events/public`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const contributionData = response.data;
    console.log('Contribution Data:', contributionData);
  } catch (error) {
    if (error.response) {
      console.error('Error fetching contribution data:', error.response.data);
    } else if (error.request) {
      console.error('No response received from GitHub API');
    } else {
      console.error('Error setting up the request:', error.message);
    }
  }
};

fetchContributions();
