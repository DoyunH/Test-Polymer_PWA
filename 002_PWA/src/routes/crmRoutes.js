import {
  addNewContact,
  getContacts,
  getContactID,
  updateContact,
  deleteContact,
  getVideo,
  addNewVideo,
  deleteVideo,
} from "../controllers/crmController";

const routes = (app) => {
  app
    .route("/contact")
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getContacts)

    // Post endpoint
    .post(addNewContact);

  app
    .route("/contact/:contactID")
    // get a specific contact
    .get(getContactID)

    // updating a specific contact
    .put(updateContact)

    // deleting a specific contact
    .delete(deleteContact);

  app
    .route("/video")

    .get(getVideo)

    .post(addNewVideo);

  app
    .route("/video/:videoID")

    .delete(deleteVideo);
};

export default routes;
