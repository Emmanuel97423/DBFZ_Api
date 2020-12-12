let express = require('express');
let router = express.Router();
let fetch = require('node-fetch');
let cors = require('cors');

let app = express();
app.use(cors());

router.get("/", function  (req, res, next) {
    fetch("https://api.smash.gg/gql/alpha", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization':  'Bearer 441ef84618369961238c98e8f23fdaa6'
      },
      
      body: JSON.stringify({
        query: `query EventSets($eventId: ID!, $page: Int!, $perPage: Int!) {
            event(id: $eventId) {
              id
              name
              sets(
                page: $page
                perPage: $perPage
                sortType: STANDARD
              ) {
                pageInfo {
                  total
                }
                nodes {
                  id
                  slots {
                    id
                    entrant {
                      id
                      name
                    }
                  }
                }
              }
            }
          }`,
          variables: {
            "eventId":538503,
            "page": 1,
            "perPage": 15
          }
      })
    })
      .then(result => {
        return result.json();
      })
    
      .then(data => {
        console.log("data returned:\n", data);
        res.send(data);
        console.log(data);
      })
      .catch(err => {
          console.log("error: ", err);
      });
      
  });

  module.exports = router;
