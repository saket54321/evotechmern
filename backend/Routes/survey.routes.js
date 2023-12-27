import express from "express"
import { createsurvey,getsurvey } from "../Controllers/survey.controller.js";
const surveyrouter=express.Router();
surveyrouter.get('/allsurvey',getsurvey);
surveyrouter.post('/postsurvey',createsurvey);
export default surveyrouter;



