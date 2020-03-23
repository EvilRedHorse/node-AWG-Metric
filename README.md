# node-AWG-Metric
AWG to Metric Wire Conversion in R, with an Express Node.js Front-end

- [x] Install system requirements
```
sudo dnf -y install git npm jq R
```

- [x] clone to directory and install
```
git clone https://github.com/EvilRedHorse/node-AWG-Metric.git
cd node-AWG-Metric
npm install
```

- [x] create 1 MiB cache folder, update permissions, touch .txt .json
```
cd test
mkdir -p cache
sudo mount -t tmpfs -o size=1M,mode=0755 tmpfs cache
sudo chmod a+rw cache
touch cache/awg.json
touch cache/diameter.txt
touch cache/area.txt
```

- [x] start node instance on port 3031
```
node ../testStart.js
```
or
```
cd ../
npm start
```

- [x] open html browser and enter url for Web-UI
```
http://127.0.0.1:3031
```

## USAGE:

#### send AWG to R script, writes JSON to output
`R/awg-metric.r [AWG]`





I :heart: SiaPrime Coin (SCP): `f2e15fc822761f083db8376ea3b151d6f398abc951ee102b40a20839eeaf531a6b432535b5f6`
