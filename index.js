async function getMongo() {
  let results = await fetch("/.netlify/functions/get_mongo").then(
    (response) => {
      console.log("res: ", response);
      return response.json();
    }
  );

  results.forEach((result) => {
    const listItem = document.createElement("li");
    listItem.innerText = result.name;
    document.getElementById("mongo").appendChild(listItem);
  });
}

getMongo();
