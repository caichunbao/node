const {InfluxDB} = require('@influxdata/influxdb-client')

// You can generate a Token from the "Tokens Tab" in the UI
const token = 'token'
const org = 'org'
const bucket = 'bucket_name_demo'

const client = new InfluxDB({url: 'http://localhost:8086', token: token})

const {Point} = require('@influxdata/influxdb-client')
const writeApi = client.getWriteApi(org, bucket)
writeApi.useDefaultTags({host: 'host2'})

const point = new Point('mem')
  .floatField('used_percent', 23.43234543)
  .floatField('used_percent1', 23.43234543)
writeApi.writePoint(point)
writeApi
    .close()
    .then(() => {
        console.log('FINISHED')
    })
    .catch(e => {
        console.error(e)
        console.log('\\nFinished ERROR')
    })