// Import necessary libraries or modules
const axios = require('axios');

// Function to fetch the latest news about cryptocurrencies
async function fetchLatestNews() {
    try {
        const response = await axios.get('https://api.cryptocurrencynews.com/v1/latest');
        const news = response.data;
        return news;
    } catch (error) {
        console.error('Error fetching latest news:', error);
        return null;
    }
}

// Function to fetch the latest price data for various cryptocurrencies
async function fetchPriceData() {
    try {
        const response = await axios.get('https://api.coinmarketcap.com/v2/ticker/?limit=10');
        const priceData = response.data;
        return priceData;
    } catch (error) {
        console.error('Error fetching price data:', error);
        return null;
    }
}

// Function to fetch market trend analysis for various cryptocurrencies
async function fetchMarketTrendAnalysis() {
    try {
        const response = await axios.get('https://api.cryptotrends.com/v1/analysis');
        const marketTrendAnalysis = response.data;
        return marketTrendAnalysis;
    } catch (error) {
        console.error('Error fetching market trend analysis:', error);
        return null;
    }
}

// Main function to orchestrate fetching and displaying data
async function main() {
    console.log('Welcome to CryptoHub! Fetching data...\n');

    // Fetch latest news
    const news = await fetchLatestNews();
    if (news) {
        console.log('Latest News:');
        console.log(news);
        console.log('\n');
    }

    // Fetch price data
    const priceData = await fetchPriceData();
    if (priceData) {
        console.log('Price Data:');
        console.log(priceData);
        console.log('\n');
    }

    // Fetch market trend analysis
    const marketTrendAnalysis = await fetchMarketTrendAnalysis();
    if (marketTrendAnalysis) {
        console.log('Market Trend Analysis:');
        console.log(marketTrendAnalysis);
    }
}

// Invoke the main function to start fetching and displaying data
main();
