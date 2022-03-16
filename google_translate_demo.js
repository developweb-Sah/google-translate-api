const { Translate } = require("@google-cloud/translate").v2;
require("dotenv").config();

// Your credentials
const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);

// Configuration for the client
const translate = new Translate({
  credentials: CREDENTIALS,
  projectId: CREDENTIALS.project_id,
});

const detectLanguage = async (text) => {
  try {
    let response = await translate.detect(text);
    return response[0].language;
  } catch (error) {
    console.log(`Error at detectLanguage --> ${error}`);
    return 0;
  }
};
// detectLanguage(`today is Wednesday`)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(error);
//   });

const translateText = async (text, targetLanguage) => {
  try {
    let [response] = await translate.translate(text, targetLanguage);
    return response;
  } catch (error) {
    console.log(`Error at TranslateText --> ${error}`);
    return 0;
  }
};

// translateText('आज बुधवार है', 'en')
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
