const admin = require("firebase-admin");
const dotenv = require("dotenv");

// Carga las variables de entorno
dotenv.config();

const serviceAccount = 
{
  "type": "service_account",
  "project_id": "test-f4de2",
  "private_key_id": "c32859ec10922f97ca71c8b45f6f54a0c6768a4b",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDqZpx5xHE64KUk\nqOy+JaYveV59GwC00+ruHUHadXY69zWHgA5wGzFB1EdyyXwD1bVxHumSv3J0H+KL\nxl9sYRD7zKxVxEDKuT9rL1jFuHq3WdU97gOpQUY92B56yRy11DKhzySfiDGpgwxm\nq0iYoP23wHe6kMpCcgd+Sm0KzFyf2TuzHQhsn5kwKRn1FOonTgEFBbtRfK7c5FMK\n8wpkEJeWg8/47uezhIdq/9ZfuFK4uWv9xsANjzVcZpRh+lLQyR8AGuFrwqpJN0PQ\npCx545wni2NLHJMftjEpruKWLlvQqxRa7Lbl8FLP58cIvjAw3ctig8yenT9crCY1\nIirtkMJDAgMBAAECggEACD2TQrSlRmyfYaqOqCCqtwCNUdihLbpFiBl/Ny7p+Si3\nuQvHdil+kdHksSRkN75Loq5zh7UzUOHOFRvkPusqra+EX3+Gx5m7oQkJFepmZgvC\nc2rqtgiVb5cpeyeW2s2a+hVONE2VcWAqD3H2G2eNg+hATU7JzYw0tzvmmXqVxwjK\n1ftm0ejb5J6RqEmOLt8h6hyHCrWsls2Js9Iw0VTVJZbbfIkmdrM/C4Lh3tkd9CbC\nE/3vTubwJDYppAzrx1I2kj3OLz+EvtmLtG3Yc4jFConV0NYGgkbPZnDANk3/AFaw\npjK4ZM8UIo0vpxjjeEutrOGwKSJYDwTQhKflty3oAQKBgQD6vXO8gm3mjam1R5Zn\nL/9SdYzzto9gFa5ztUu/OiQSh3x1KjYiQ1/PcTc3rvzELVuJF6lH+bCOgBzlZXvR\nu7GFGtaM7NEQ2lusEWfJWdnGN50sHDSkOT6Y3wrZ61ojcX0VSADVWFC3IzbiIfJb\npA1fL6hA9FdMgZVw/Ka0eCcNjQKBgQDvUWmm4VdGeHJAXD+SB5sJ+k/DPtjw8oeY\nEo3jqUvMyiOt/G3FdGXbq1jpKi2woC0xtFX9wyz69HnsEuBNDjRHn3KBRIhER+/A\n3GWfapHFkdVJjZcd+lITQ4NLcFyFAFM4Tv3Qt3W5tzX7iWcZwHbezZhRkuJCtFM0\nKxpPczuTDwKBgEqAmnALzT3xH9j2cXEtqM7GkOAlgYqKRrCo0N38F5XN3iQuK7GY\nlVJdEIwiGYbs90LP3gO95EEjPfLHabgS7hdftxpej2xThWOmNFF2uieUhMYDh3y4\naaogs+e2b60SXplBMMYznKAd/YPJlGq4XyTGU1chgwL/ifjtiVccUHZNAoGBAIcp\nffhIkNg2MqDy+Nxq+z95Zg8psbDz6W0UHZsVBMCW8evUA9NfWB/m+IJH1iJJdPz7\nkw2NbBwYc7vHNXOPsCs7fJpRsHyP/HL6h1KwB8CECuhN1amStUQ3/zFeNoLPmjDV\nPDjjRNQtC4oTIm3C6+AOUhbQVIXD/rIaHfP9awo1AoGBAPoviK0VdhN4yhk4oMEg\nuuovWbgY7xfGSTx7foEo3/d+9cifgRS54599bbimaSkqzCxPon8UxPct2gp2/WD9\nbwjz641DxCnWaBLRJvwiVtf/2MMYfm4CT/uZQAGWpVyPVEMF1WkoqUxLEcb/tH6S\nujWEgsSUCdV70ryANv77LiBd\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-fbsvc@test-f4de2.iam.gserviceaccount.com",
  "client_id": "107135508572252068823",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40test-f4de2.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}
;

// Inicializa Firebase con la clave privada
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://test-f4de2-default-rtdb.firebaseio.com"
    
});

const firestore = admin.firestore();
const database = admin.database();
const apiKey = "AIzaSyApMAoPO3TIZOWHYzPezuvaaV0Wd4RyzWY"
module.exports = { admin,firestore };  

