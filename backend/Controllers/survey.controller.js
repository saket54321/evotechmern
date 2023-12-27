import SurveyForm from "../Models/survey.model.js"
export const createsurvey=async (req, res) => {
    try {
      const formData = req.body;
      const newForm =  SurveyForm(formData);
      await newForm.save();
      //console.log('New form submitted:', newForm);
      //res.redirect('/success');
    } catch (error) {
      console.error('Error submitting form:', error);
      //res.redirect('/error');
    }
  }

  export const getsurvey=async (req, res) => {
    try {
      const allSubmissions = await SurveyForm.find();
      res.status(200).json(allSubmissions);
    } catch (error) {
      console.error('Error getting form submissions:', error);
      res.status(500).json({ error: 'Internal server error' });
    }}