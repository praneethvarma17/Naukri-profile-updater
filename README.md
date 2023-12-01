# Naukri-profile-updater
For running it as a CLI - 
Run 
```node index.js --username=<USERNAME> --password=<PASSWORD>```

You can use -u=<> and -p=<> as well.

Example - 
```node index.js --username=Mahismati --password=katappa```



For running it in a separate container - continuously

Update line number 7 in DockerFile with your Username and password. 
create a docker image using docker build -t .
an then run it forever, it daily updates the resume headline
