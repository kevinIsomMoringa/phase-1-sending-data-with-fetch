// Add your code here
baseURL = "http://localhost:3000"
userDir= "/users"

async function submitData(Name="Byron", Email="byron@gmail.com"){
    const usrDetails = {
        name: Name,
        email: Email
      };
      
      // method: "POST" is missing from the object below
      const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(usrDetails),
      };
      
      await fetch(`${baseURL}${userDir}`, configurationObject)
        .then(async (response) => await response.json())
        .then((object) => {
            console.log(object.id);
            appendInfo2DOM(`ID value: ${object.id}`);
            return object
        })
        .catch((error) => {
            alert("Unauthorized Access");
            console.log(error.message);
            appendInfo2DOM(`Something Went Wrong \n${error.message}`)
        });

};

function appendInfo2DOM(info){
    let body = document.querySelector("body")
    let paragraph = document.createElement("p")

    paragraph.innerHTML = info
    body.appendChild(paragraph)
}
