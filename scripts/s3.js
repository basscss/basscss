
var path = require('path')
var s3 = require('s3')
var version = require('../package.json').version

function upload() {
  var options = require('../aws.json')
  var params = {
    localFile: path.join(__dirname, '../css/basscss.min.css'),
    s3Params: {
      Bucket: options.bucket, 
      Key: 'basscss/' + version + '/basscss.min.css',
      ACL: 'public-read',
    }
  }

  var client = s3.createClient({
    s3Options: {
      accessKeyId: options.key,
      secretAccessKey: options.secret,
    }
  })

  var uploader = client.uploadFile(params)
  uploader.on('error', function(err) {
    console.error("unable to upload:", err.stack)
  })
  uploader.on('progress', function() {
    console.log("progress", uploader.progressMd5Amount, uploader.progressAmount, uploader.progressTotal)
  })
  uploader.on('end', function() {
    console.log("done uploading")
  })

}

upload()

