async function getMongo() {
  let results = await fetch("/.netlify/functions/get_mongo").then(
    (response) => {
      return response.json();
    }
  );
  console.log("res: ", JSON.stringify(results));

  results.forEach((result) => {
    const listItem = document.createElement("li");
    listItem.innerText = result.name;
    document.getElementById("mongo").appendChild(listItem);
  });
}

getMongo();
