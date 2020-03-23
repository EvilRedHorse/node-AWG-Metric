# node-AWG-Metric
AWG to Metric Wire Conversion in R, with an Express Node.js Front-end


- [x] clone to directory and install requirements
```
git clone https://github.com/EvilRedHorse/node-AWG-Metric.git
cd node-AWG-Metric
npm install express shelljs
sudo dnf -y install jq R
```

- [x] create 1 MiB cache folder, update permissions, touch .txt .json
```
cd test
mkdir cache
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

- [x] open html browser and enter url for Web-UI
```
http://127.0.0.1:3031
```

## USAGE:

#### send AWG to R script, writes JSON to output
`R/awg-metric.r [AWG]`





I :heart: SiaPrime Coin (SCP): `f2e15fc822761f083db8376ea3b151d6f398abc951ee102b40a20839eeaf531a6b432535b5f6`
