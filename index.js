
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const config = require("./config");
const request = require('request');
const verificationController = require('./verification');

const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
extended: true
}));

server.post('/submit', (req, res) => {
    const reqcategory = req.body.result.parameters.category;
    const reqlocation = req.body.result.parameters.location;
    // const reqcomapny = req.body.result.parameters.comapny;
    // const reqapproved = req.body.result.parameters.approved;
    // const reqskills = req.body.result.parameters.skills;
    // const reqPPO = req.body.result.parameters.PPO;
    // const reqfree_snacks = req.body.result.parameters.free_snacks;
    // const reqletter_of_recommendation = req.body.result.parameters.letter_of_recommendation;
    // const reqflexible_work_hours = req.body.result.parameters.flexible_work_hours;
    // const reqcertificate = req.body.result.parameters.certificate;
    // const reqinformal_dress_code = req.body.result.parameters.informal_dress_code;
   
    var options = { method: 'GET',
    url: 'http://api.internboards.com/internship/read/',
    qs: { search: reqcategory },
    headers: 
    {  
         'Content-Type': 'application/json'
    },
    body: { 
        result: { 
            parameters: { 
                category: reqcategory, 
                location: reqlocation, 
                // comapny: reqcomapny, 
                // approved: reqapproved,
                // skills: reqskills,
                // PPO: reqPPO,
                // free_snacks: reqfree_snacks,
                // letter_of_recommendation: reqletter_of_recommendation,
                // flexible_work_hours: reqflexible_work_hours,
                // certificate: reqcertificate,
                // informal_dress_code: reqinformal_dress_code
            } 
        } 
    },
    json: true };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
  
        res.json(body);
        console.log(body);
    });

});

server.listen((process.env.PORT || 8000), () => {
    console.log("Server is up and running...");
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


// const location = req.body.result.location;
    
        
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

    