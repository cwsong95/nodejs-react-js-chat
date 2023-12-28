const express = require("express");  //runs http server
const cors = require("cors");
const { default: axios } = require("axios");

// call server in any other origins
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

// creates POST call to authenticate
// takes user name from req body
app.post("/authenticate", async (req, res) => {
  // whenever a user this authenticate endpoint
  // I will get or create a user object for this username in
  // my chat engine database
  // there is all the rest API calls that chat engine has on rest.chatengine.io
  const { username } = req.body;

  // https://api.chatengine.io/users/ <- this fetches the user with the following username
  //    or creates one from scratch if they are not existed
  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      // pass in all require data; username and secret
      {
        username: username,
        secret: username,
        first_name: username
      },
      // need to set some headers to authenticate this API call
      // just the private key
      {
        headers: {
          "private-key": '25cc935d-2603-473e-82b1-b45736612042'
        }
      }
    )
    // once this api call goes through, let's return response status
    // response from this API callwill dictate the status of the API call and data within it
    return res.status(r.status).json(r.data);
  } catch(e) {
    return res.status(e.response.status).json(e.response.data);
  }
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001); // runs app on PORT 3001