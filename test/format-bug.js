var fs = require ('fs');
var ClickHouse = require ("../src/clickhouse");
var ch = new ClickHouse ('127.0.0.1')

let clickhouseStream = ch.query ('INSERT INTO testTable', {format: 'CSV'});
fs.createReadStream('./test/csv.csv').pipe(clickhouseStream);
clickhouseStream.on ('error', console.error);

let clickhouseStream2 = ch.query ('INSERT INTO testTable FORMAT CSV');
fs.createReadStream('./test/csv.csv').pipe(clickhouseStream2);
clickhouseStream2.on ('error', console.error);

//
// const stream = ch.query(
//   `INSERT INTO "testTable"`,
//   { format: 'JSONEachRow' },
//   (err, data) => {}
//   // err ? console.error(err) : console.log(data),
// )
//
// // stream.on('error', console.error)
// stream.write(JSON.stringify({a: '1234'}))
// stream.end()
