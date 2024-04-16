const requestBody = `{
    ""input_data"": [
      ""Hi, I'm Ashish""
    ],
    ""params"": {
      ""top_p"": 1.0,
      ""temperature"": 0.8,
      ""max_new_tokens"": 50,
      ""do_sample"": true,
      ""return_full_text"": true
    }
  }`;

const requestHeaders = new Headers({
    "Content-Type": "application/json",
});

// Replace this with the primary/secondary key or AMLToken for the endpoint
const apiKey = "qazvAttgL2MtOdW6bAeRnPYqXPntMxYr";
if (!apiKey) {
    throw new Exception("A key should be provided to invoke the endpoint");
}
requestHeaders.append("Authorization", "Bearer " + apiKey);

// This header will force the request to go to a specific deployment.
// Remove this line to have the request observe the endpoint traffic rules
requestHeaders.append("azureml-model-deployment", "gpt2-16");

const url = "https://knack.azure-api.net";

fetch(url, {
    method: "POST",
    body: JSON.stringify(requestBody),
    headers: requestHeaders,
})
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            // Print the headers - they include the request ID and the timestamp, which are useful for debugging the failure
            console.debug(...response.headers);
            console.debug(response.body);
            throw new Error(
                "Request failed with status code" + response.status
            );
        }
    })
    .then((json) => console.log(json))
    .catch((error) => {
        console.error(error);
    });
