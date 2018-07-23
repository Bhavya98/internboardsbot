
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const config = require("./config");
const request = require('request');

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
extended: true
}));

server.post('/submit', (req, res) => {
    const reqcategory = req.body.result.parameters.category;
    const reqlocation = req.body.result.parameters.location;
    // const reqUrl = encodeURI(config.base_url + `/internship/read/?search=${category}`);
    console.log(reqcategory);
    var options = { method: 'GET',
    url: 'http://api.internboards.com/internship/read/',
    qs: { search: reqcategory },
    headers: 
    {  
         'Content-Type': 'application/json'
    },
  body: { result: { parameters: { category: reqcategory, location: reqlocation } } },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  
  res.json(body);
  console.log(body);
});

    // request.get(reqUrl).on('response',(response) => {
        // console.log(response.statusCode)
        // console.log(response.headers['content-type'])
        // console.log(response.body);
    //   });
    // request.get(reqUrl, (responseFromAPI) => {
    //     console.log(responseFromAPI);
    //     let completeResponse = '';
    //     responseFromAPI.on('data', (chunk) => {
    //         completeResponse += chunk;
    //         console.log(completeResponse);
    //     });
    //     responseFromAPI.on('end', () => {
    //         const internship_ = JSON.parse(responseFromAPI);
    //         console.log(internship_)
    //        var dataToSend = `InternshipID  ${internship_.id} Category ${internship_.category} Location ${location}`;  
    //             return res.json({
    //             speech: dataToSend,
    //             displayText: dataToSend,
    //             source: '/submit'
    //         });
    //     });
    // }, 
    // (error) => {
    //     return res.json({
    //         speech: 'Something went wrong!',
    //         displayText: 'Something went wrong!',
    //         source: 'get-movie-details'
    //     });
    // });
});
server.listen((process.env.PORT || 8000), () => {
    console.log("Server is up and running...");
});

// const location = req.body.result.location;
    // const comapny = req.body.result.comapny;
    // const approved = req.body.result.approved;
    // const skills = req.body.result.skills;
    // const PPO = req.body.result.PPO;
    // const free_snacks = req.body.result.free_snacks;
    // const letter_of_recommendation = req.body.result.letter_of_recommendation;
    // const flexible_work_hours = req.body.result.flexible_work_hours;
    // const certificate = req.body.result.certificate;
    // const informal_dress_code = req.body.result.informal_dress_code;
        
    // const deadline = req.body.result.deadline;
    // const duration = req.body.result.duration;

    // if (company === ""){
    //     comapny = empty;
    // }
    // if (approved === ""){
    //     approved = empty;
    // }
    // if (skills === ""){
    //     skills = empty;
    // }
    // if (PPO === ""){
    //     PPO = empty;
    // }
    // if (free_snacks === ""){
    //     free_snacks = empty;
    // }
    // if (letter_of_recommendation === ""){
    //     letter_of_recommendation = empty;
    // }
    // if (flexible_work_hours === ""){
    //     flexible_work_hours = empty;
    // }
    // if (certificate === ""){
    //     certificate = empty;
    // }
    // if (informal_dress_code === ""){
    //     informal_dress_code = empty;
    // }
    // if (deadline === ""){
    //     deadline = empty;
    // }
    // if (duration === ""){
    //     duration = empty;
    // }

    // const reqUrl = encodeURI(config.base_url + 
    //     `?category=${category}&location=${location}&company=${company}&approvied=${approved}&${skills}&${PPO}&${free_snacks}&${letter_of_recommendation}&${flexible_work_hours}&${certificate}&${informal_dress_code}&${deadline}&${duration}`);
    