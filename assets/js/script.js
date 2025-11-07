const form = document.getElementById("weatherForm");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const city = document.getElementById("cityInput").value;
    resultDiv.innerHTML = "Loading...";
    try {
        // Use fetch with GET
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        // Handle response
        if (!response.ok) throw new Error("City not found");
        
        const data = await response.json();

        console.log(data);

        // Display result
        resultDiv.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>🌡️ ${data.main.temp} °C</p>
      <p>☁️ ${data.weather[0].description}</p>
      <p>Humidity: ${data.main.humidity}</p>
      <p>Wind Speed: ${data.wind.speed}</p>
    `;
    } catch (error) {
        resultDiv.innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
});