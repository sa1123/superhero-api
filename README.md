# superhero-api
<br></br>
![Opera Snapshot_2023-02-13_012821_127 0 0 1](https://user-images.githubusercontent.com/51375919/218334104-ef70ffff-202d-47aa-aac5-411ac834306a.png)
<br></br>
![Opera Snapshot_2023-02-13_012847_127 0 0 1](https://user-images.githubusercontent.com/51375919/218334109-ba334247-4a5d-4181-bfb5-77ea3da95e0e.png)
<br></br>
![Opera Snapshot_2023-02-13_012911_127 0 0 1](https://user-images.githubusercontent.com/51375919/218334116-ff7715a3-ec43-4c78-bae8-b7360e60beec.png)
<br></br>
![Opera Snapshot_2023-02-13_012929_127 0 0 1](https://user-images.githubusercontent.com/51375919/218334083-35d2ab5f-c8cf-4d3c-9667-02a29c0fc6d6.png)
<br></br>

Javascript Test

TEST NAME: Superhero Hunter JS

Problem statement
Create a superhero hunter app. Use ONLY vanilla javascript, no libraries or frameworks are allowed for Javascript (you can use any CSS framework like Bootstrap).

Instructions
Use the Marvel API:  https://developer.marvel.com/docs 
Register yourself to the above website https://developer.marvel.com/signup and generate the public and private key.
Now follow the instruction on how to use the API key https://developer.marvel.com/documentation/authorization. You need to use the timestamp as ts and then create the hash using md5 hash of ts, private-key and public-key. 
How to generate md5 hash? 
// first install crypto-js
npm install crypto-js
// now use md5 as below
var MD5 = require("crypto-js/md5"); 
console.log(MD5("text to hash").toString());

Make sure to use the right API URL else it will give you a CORS error.
You are ALLOWED to style the app any way you like.
You are ALLOWED to google and read how to approach the problem.
DO NOT copy and paste code from the internet.
DO NOT cheat with other students. REMEMBER: These tests are for YOU so that you can learn something new. Cheating won’t help. It’s better to not submit the solution than to cheat and submit. PS: There will be a plagiarism check and when found cheating, you won’t be allowed to give future tests.
Once you have finished with the test, make a video recording your computer screen (via phone or software like OBS/screencastify, etc) and explaining how you have approached the problem in code and showing the final product. The video can be UPTO 5 mins long. Please don’t record videos longer than that.
Upload and Host the code on github as well.
Once you have recorded the video, upload it on youtube (unlisted or whatever), drive or wherever you want to upload it.
Hosting on Github is compulsory, I will be rejecting the submission if not hosted!


Features (No need for extra features, just make the listed features)
Home Page
Fetch and display a list of SuperHeros (Characters) on the home page. Also create a search bar that will filter out the character based on search query. Suppose I type “bat” in the search box, it should show “batman”. 
[ API example https://gateway.marvel.com:443/v1/public/characters?ts=<time-stamp>&apikey=<public-key>&hash=<md5(ts+privateKey+publicKey)>]
Each search result of the superhero should have a favorite button, clicking on which superhero should be added to “My favorite superheroes” (a list).
On clicking any particular search result (any superhero), open a new page with more information about that superhero (Superhero page).

Superhero Page
Should show a lot of information about the superhero like their name, photo, bio and other information provided by the API (comics, events, series, stories, etc).

My favourite superheroes Page
Display a list of all the favourite superheroes.
Make this list persistent (should have the same number of superheroes before and after closing the browser).
Remove from favourites button: Each superhero should have remove from favourites button, clicking on which should remove that superhero from the list.


Points on which the project will be judged
All functionalities mentioned above
Github
Readme.md file
Hosted code on Github
Code
Comments
Structuring of code
Indentation
Variables and functions naming
Styling
Design
Video (explanation about the project)
Creativity
