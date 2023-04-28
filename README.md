# Jaehoon-Sung.github.io - vanillaJS-todoApp Reflection

## HTML & CSS
### HTML
- `index.html` is the official name by convention! `github.io` can detect a html file only if the file name is `index.html`!
- I recalled that any script file should be at the end of the html to uploade the webpage much more quickly.
- I focused on how I should sectionize each `div` in the html. Here, I just recalled that I should have used `section` instead of `div`.

### CSS
- CSS works on this project might be the design project I worked most hard among past projects in aspect of design!

### JavaScript
#### Goal Setting for what to learn in this project 
- I want to review important JavaScript syntax and how to pick up and manipulate HTML tags using JavaScript I learned in DEV and FED.
- Using a real momentum chrome extension, I noticed that the inputs I provided, such as my name and to-do list items, were not being stored on a server. Instead, I discovered that they were being stored locally on my browser using `localStorage`! This experience motivated me to explore localStorage further and learn how to use it to store basic information from users on their browsers instead of on servers.
![image](https://user-images.githubusercontent.com/89331926/235240423-c56797af-cf89-4abc-9dd8-f4b4b178a936.png)

#### Greeting.js
This code allows users to "log in" with a username or use the extension as usual if they have already entered their names. When a user submits their name, the `onLoginSubmit()` function retrieves the username from the `loginInput` element and saves it in the local storage of their browser using `localStorage.setItem`. It then hides the login form and displays a personalized greeting message to the user using the `paintGreetings()` function. The code also checks if the user has previously logged in by retrieving their saved username from the local storage. If the saved username is `null`, it displays the login form and waits for the user to submit their details. If the saved username is not `null`, it displays the greeting message. 

#### clock.js
This code creates a clock that displays the current time on a web page! I defined a function `getClock()` that retrieves the current time using the `Date` object and formats it neatly. `padStart()` gave me the flashback to the DEV team project where I used that function a lot to display an inventory table neatly! After then, calling `getClock()` sets the text content of an HTML element with an id of `clock` to display the formatted time immediately. I also set up an interval using `setInterval()` to call the function every second to update the displayed time.Creating a simple clock is NOT simple!

#### background.js & quotes.js
`background.js` generates a random image from a list of image files and sets it as the background image of the webpage. Random generazation was achieved by using `Math.random()` and `Math.floor()` which were methods I used heavily in DEV course! The code creates an img element with the chosen image as its src attribute and appends that image element to the body of the HTML page.

`quotes.js` does similar things as `background.js`! It selects a quote and author randomly from a pre-built array of quote objects and displays them. But, it does not create a new element to display quote, but it updates the text content of two span elements in the HTML to display the selected quote and author.

#### todo.js
This code creates a to-do list that stores to-do items locally in the browser's `localStorage`! Listening to the event, it creates a new to-do object with a text and unique id. It also pushes the new to-do item into the to-do array and stores to the localStorage. `deleteToDo` function removes the to-do item from the array and stores the updated to-do list to the localStorage.

#### weather.js
- `Navigator.geolocation` is a useful tool to help a Web access the user's current location. It also automatically prompts to ask if it can use the location information. `getCurrentPosition(success, error)` was also an impressive function which I think makes it easier to implement callback functions to address what the application should process using the location information depending on whether it is allowed to use it or not.
- I used openweathermap API to display weather based on the user's current location! The API Key is actually exposed on github, which is not desirable due to the security reasons.
