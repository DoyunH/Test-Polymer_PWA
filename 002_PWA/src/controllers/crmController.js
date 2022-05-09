import mongoose from "mongoose";
import { ContactSchema, VideoSchema } from "../models/crmModel";

const cloudfrontSign = require("aws-cloudfront-sign");
const Contact = mongoose.model("Contact", ContactSchema);
const Video = mongoose.model("Video", VideoSchema);

export const addNewContact = (req, res) => {
  let newContact = new Contact(req.body);

  newContact.save((err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

export const getContacts = (req, res) => {
  Contact.find({}, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

export const getContactID = (req, res) => {
  Contact.findById(req.params.contactID, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

export const updateContact = (req, res) => {
  Contact.findOneAndUpdate(
    { _id: req.params.contactID },
    req.body,
    { new: true, useFindAndModify: false },
    (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    }
  );
};

export const deleteContact = (req, res) => {
  Contact.remove({ _id: req.params.contactID }, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "successfully deleted contact" });
  });
};

export const addNewVideo = (req, res) => {
  let newVideo = new Video(req.body);

  newVideo.save((err, video) => {
    if (err) {
      res.send(err);
    }
    res.json(video);
  });
};

export const getVideo = (req, res) => {
  Video.find({}, (err, video) => {
    if (err) {
      res.send(err);
    }
    const options = {
      keypairId: "K2U6IQ5WQCDJL7",
      privateKeyPath: "./private_key.pem",
    };
    const signedUrl = cloudfrontSign.getSignedUrl(
      "https://d8wp69ritpb1o.cloudfront.net/test_video.mp4",
      options
    );

    video[0].url = signedUrl;
    console.log(video[0].url);
    res.json(video);
  });
};

export const deleteVideo = (req, res) => {
  Video.remove({ _id: req.params.videoID }, (err, video) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "successfully deleted video" });
  });
};
