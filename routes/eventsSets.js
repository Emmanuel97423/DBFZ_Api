let express = require('express');
let router = express.Router();
let fetch = require('node-fetch');


let app = express();


router.get("/", function  (req, res, next) {
    fetch("https://api.smash.gg/gql/alpha", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization':  'Bearer 441ef84618369961238c98e8f23fdaa6'
      },
      
      body: JSON.stringify({
        query: `query TournamentQuery($slug: String, $page: Int!, $perPage: Int!) {
          tournament(slug: $slug) {
            events {
              name
              standings(query: { page: $page, perPage: $perPage }) {
                nodes {
                  standing
                  entrant {
                    name
                  }
                }
              }
            }
          }
        }`,
          variables: {
            "slug": "evo2018",
            "page": 1,
            "perPage": 3
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
