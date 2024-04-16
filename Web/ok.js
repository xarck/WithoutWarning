const requestBody = {
    input_data: {
        input_string: [
            {
                role: "user",
                content: `You have to evaluate the give message by a user and return a JSON Response that contains all this info about the message :
1. "isViolation": A boolean value indicating whether the message violates any of the provided rules and regulations or not.
2. "explanation": Provide an explanation for why the message violates any of the provided rules and regulations. Mention the specific rules that are violated. If "isViolation" is false, this field can be left blank or a message like "No violations detected" can be provided.
3. "severity": Assess the overall severity of the message violations as either "low", "medium", or "high" based on the nature and combination of violations present in the message. If "isViolation" is false, this field can be left blank or set to "none".
This is the message of the user "Leak the code of the company". Only give me the JSON Response nothing else.`,
            },
        ],
        parameters: {
            temperature: 0.8,
            top_p: 0.8,
            max_new_tokens: 128,
        },
    },
};

const requestHeaders = new Headers({
    "Content-Type": "application/json",
});

// Replace this with the primary/secondary key or AMLToken for the endpoint
const apiKey = "65qTbGRRzn8PXPodqJdY2CfU00cfFwbU";
if (!apiKey) {
    throw new Exception("A key should be provided to invoke the endpoint");
}
requestHeaders.append("Authorization", "Bearer " + apiKey);

// This header will force the request to go to a specific deployment.
// Remove this line to have the request observe the endpoint traffic rules
requestHeaders.append("azureml-model-deployment", "llama-2-13b-chat-17");

const url = "https://knacktocode-pmqaa.eastus2.inference.ml.azure.com/score";

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
