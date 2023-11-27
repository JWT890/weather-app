# weather-app
This is a Vue application that tells the weather based on the town or city you put in with the Imperial System. It also determines if the temperature is hot or cold based on its hotter or colder than 70 degrees Fahrenheit. 

This application pulls data from from a free API from Open Weather API, https://openweathermap.org/api, and displays the temperature for the input and a background to reflect if its either hot or cold. 

The first step is to sign up for an account with Open Weather API and after you sign up, you will get an email with your free default API key that you can use for the application, or navigate to My API keys and get it from there or generate your own free API key.

After inserting the API key on line 33, you will need to run the npm run serve command to get it run for the application to start. 

You will be presented with the web page where you type in regions so you check the weather.
![image](https://github.com/JWT890/weather-app/assets/95875505/2c83786e-c933-433f-835c-fe8c6bb897ee)

Examples of places with below 70 degree temperatures as of November 27, 2023 at around 10:30 in the morning
![image](https://github.com/JWT890/weather-app/assets/95875505/d13a7615-b4b8-4b1b-94a5-ed9bc8db297e)
![image](https://github.com/JWT890/weather-app/assets/95875505/56e5f8df-e7de-4b2a-bceb-f4b06859988f)
![image](https://github.com/JWT890/weather-app/assets/95875505/79b5012d-677d-4e4b-87f0-5657c086350b)

Examples of places with aboce 70 degree temperatures as of November 27, 2023 at around 10:30 in the morning
![image](https://github.com/JWT890/weather-app/assets/95875505/1624f334-06f3-4a00-8885-1e50aa22de20)
![image](https://github.com/JWT890/weather-app/assets/95875505/5a216640-ebd0-4095-925a-3dba2989ce5c)
![image](https://github.com/JWT890/weather-app/assets/95875505/543bdfa3-d4e4-4b55-aeef-8f8f644a2294)


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
