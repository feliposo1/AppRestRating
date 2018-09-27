App rest rating
=====================
 To run the application you must install the [Ngrok](https://ngrok.com)
 ## Using this project
 
 ```bash
$ npm install
```
If you do not have Ionic installed globally, use the:
 ```bash
$ npm install -g ionic
```
 Then run: 
 ```bash
$ ionic serve
```
 Run the server: 
 ```bash
$ node appRating
```
 ## Configuring the server and routes
 
 Open two Ngrok windows and type in each consecutively 
 
 Run the server: 
 ```bash
$ ngrok http 8100
```

This will generate a URL similar to ``Http://681d5b9a.ngrok.io``

Open the ``www/index.html`` file and replace all the URLs that contain  ``Ngrok`` with the new one generated above

Run the server: 
 ```bash
$ ngrok http 3412
```
Open the ``www/js/value/configUrl.js`` file and replace all the URLs that contain  ``Ngrok`` with the new one generated above

This will generate a URL similar to ``Http://09e461e3.ngrok.io``

**Finally, go to http://localhost:8100** 
