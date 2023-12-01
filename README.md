# Naukri-profile-updater
For running this tool as a CLI <br>
Run <br>
```node index.js --username=<USERNAME> --password=<PASSWORD>```

You can use -u=<> and -p=<> as well.

Example <br>
```node index.js --username=Mahismati --password=katappa```



For running it in a separate container - continuously

Update line number 7 in DockerFile with your Username and password<br> 
Create a docker image using docker build -t .
an then run it forever, it daily updates the resume headline.
