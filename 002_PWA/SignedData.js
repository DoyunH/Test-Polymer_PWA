const AWS = require("aws-sdk");
const fs = require("fs");
const path = require("path");

const distUrl = "d8wp69ritpb1o.cloudfront.net";
const s3Key = "test_video.mp4";
const cfAccessKeyId = "K2U6IQ5WQCDJL7";
let cfPrivateKey = fs.readFileSync(path.join(__dirname, "private_key.pem"));

const signer = new AWS.CloudFront.Signer(cfAccessKeyId, cfPrivateKey);
const thirtySeconds = 30 * 1000; // 30 seconds
let cfObjectUrl = "https://" + distUrl + "/" + s3Key;

const signedUrl = signer.getSignedUrl({
  url: cfObjectUrl,
  expires: Math.floor((Date.now() + thirtySeconds) / 1000),
});

console.log(signedUrl);
