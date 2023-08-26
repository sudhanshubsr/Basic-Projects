// Unsplash API

const count = 10;
const apiKEY = 'XkRuHEwD54pMiR32z7t7xWVDOM3gP-rC2AJWq3eJMIg';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKEY}&count=${count}`




// Get PHOTOS from unsplash API


async function getPHOTOS(){
    try{
        const response = await fetch(apiURL);
        const data = await response.json;
        console.log(data);
    }
    catch(error){
        // Catch Error Here
    };
}

getPHOTOS();
