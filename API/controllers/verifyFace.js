const express = require("express");
const app = express();
const { Canvas, Image, ImageData } = require("canvas");
const faceapi = require("face-api.js");
const { promisify } = require("util");
const readFile = promisify(require("fs").readFile);

// Register face-api.js models
const MODEL_PATH = "./models";
faceapi.env.monkeyPatch({ Canvas, Image, ImageData });


// Endpoint to compare the face in the video with the base64 image
exports.verifyFace = async (req, res) => {
  try {
    const video = req.files.video
    console.log(video)
    /* await writeFileAsync(videoPath, video, 'base64');

    // Convert base64 image to buffer
    const imageBuffer = Buffer.from(image, 'base64');

    // Load models and weights
    await Promise.all([
      faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
      faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
      faceapi.nets.faceRecognitionNet.loadFromUri('/models')
    ]);

    // Load the video and detect faces
    const videoData = await faceapi.fetchImage(videoPath, { fetchFunc: fetch });
    const videoFaces = await faceapi.detectAllFaces(videoData).withFaceLandmarks().withFaceDescriptors();

    // Load the image and detect faces
    const imageImg = new Image();
    imageImg.src = imageBuffer;
    await imageImg.decode();
    const imageData = faceapi.createCanvasFromMedia(imageImg);
    const imageFaces = await faceapi.detectAllFaces(imageData).withFaceLandmarks().withFaceDescriptors();

    // Compare faces
    const faceMatcher = new faceapi.FaceMatcher(imageFaces);
    const results = videoFaces.map((face) => faceMatcher.findBestMatch(face.descriptor));

    res.json({ results }); */

  } catch (error) {
    console.error("Face comparison error:", error);
    res.status(500).json({ error: "Face comparison failed" });
  }
};

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
