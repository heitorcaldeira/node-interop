# Node Addons

Just a performance test using node and c++

To generate a **really big file** to test, you can use (linux):

```
yes "Every single line" | head -n 10000000 > bigfile.txt
```

To build the c++ file:

```
npm install -g node-gyp
node-gyp configure
node-gyp build
```

To run the project:

```
npm install
node index.js
```

### GET `/node`

### GET `/cpp`