# Weather App Documentation

## Overview

The Weather App is a simple web application that allows users to check the current weather state of a location. It utilizes the OpenWeatherMap API to fetch real-time weather data. Users need to obtain their own API key and insert it into the `script.js` file for the application to function properly.

## Getting Started

### Prerequisites

Before using the Weather App, you need to have the following:

1. OpenWeatherMap API Key - You can obtain your API key by signing up on the [OpenWeatherMap website](https://openweathermap.org/). Make sure to choose the free plan for basic usage.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/Weather-App.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Weather-App
   ```

3. Open the `script.js` file in a text editor of your choice.

4. Replace the placeholder `YOUR_API_KEY_HERE` with your actual OpenWeatherMap API key.

   ```javascript
   // script.js

   const apiKey = "YOUR_API_KEY_HERE";
   ```

## Usage

1. Open the `index.html` file in a web browser.

2. Enter the location for which you want to check the weather in the input field.

3. Click the "Get Weather" button.

4. The application will fetch and display the current weather information for the specified location.

## Troubleshooting

- **Invalid API Key:** Ensure that you have replaced the placeholder API key in the `script.js` file with your valid OpenWeatherMap API key.

- **Network Issues:** If the weather data is not loading, check your internet connection and ensure that the OpenWeatherMap API is accessible.

## Contributing

If you would like to contribute to the Weather App, please follow these steps:

1. Fork the repository.

2. Create a new branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and commit them:

   ```bash
   git add .
   git commit -m "Add your feature description"
   ```

4. Push your changes to your fork:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Create a pull request on the [main repository](https://github.com/your-username/Weather-App).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to OpenWeatherMap for providing the API used in this project.
- Contributors to the project.

Feel free to use, modify, and contribute to the Weather App!
