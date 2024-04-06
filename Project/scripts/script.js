// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', function() {
    // Fetch initial joke when the page loads
    fetchJoke();
  });
  
  document.getElementById('generateJokeBtn').addEventListener('click', fetchJoke);
  
  async function fetchJoke() {
    try {
      // Show loading message
      document.getElementById('loadingMessage').style.display = 'block';
  
      const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
      const data = await response.json();
  
      if (data.error) {
        throw new Error(data.message);
      }
  
      displayJoke(data.joke);
    } catch (error) {
      displayError(error.message);
    } finally {
      // Hide loading message regardless of success or failure
      document.getElementById('loadingMessage').style.display = 'none';
    }
  }
  
  function displayJoke(joke) {
    const jokeContainer = document.getElementById('jokeContainer');
    jokeContainer.innerHTML = `<p>${joke}</p>`;
  }
  
  function displayError(message) {
    const jokeContainer = document.getElementById('jokeContainer');
    jokeContainer.innerHTML = `<p>Error: ${message}</p>`;
  }
  