import streamlit as st
import requests
import json
import urllib.request
import json
import os
from dotenv import load_dotenv
import ssl
load_dotenv()

def allowSelfSignedHttps(allowed):
    if allowed and not os.environ.get('PYTHONHTTPSVERIFY', '') and getattr(ssl, '_create_unverified_context', None):
        ssl._create_default_https_context = ssl._create_unverified_context

allowSelfSignedHttps(True) 


def make_request(input_text):
    data = {
    "input_data": {
        "input_string": [
            {
                "role": "user",
                "content": f"""You have to evaluate the give message by a user and return a JSON Response that contains all this info about the message :
1. "isViolation": A boolean value indicating whether the message violates any of the provided rules and regulations or not.
2. "explanation": Provide an detailed explanation for why the message violates any of the provided rules and regulations. Mention the specific rules that are violated. If "isViolation" is false, this field can be left blank or a message like "No violations detected" can be provided.
3. "severity": Assess the overall severity of the message violations as either "low", "medium", or "high" based on the nature and combination of violations present in the message. If "isViolation" is false, this field can be left blank or set to "none".
This is the message of the user ${input_text}.
""",
            },
        ],
        "parameters": {
            "temperature": 0.8,
            "top_p": 0.8,
            "max_new_tokens": 128,
        },
    },
};

    body = str.encode(json.dumps(data))

    url = os.getenv("URL")
    # Replace this with the primary/secondary key or AMLToken for the endpoint
    api_key = os.getenv("KEY")
    if not api_key:
        raise Exception("A key should be provided to invoke the endpoint")

    # The azureml-model-deployment header will force the request to go to a specific deployment.
    # Remove this header to have the request observe the endpoint traffic rules
    headers = {'Content-Type':'application/json', 'Authorization':('Bearer '+ api_key), 'azureml-model-deployment': 'mistralai-mistral-7b-instruct-1' }

    req = urllib.request.Request(url, body, headers)

    try:
        response = urllib.request.urlopen(req)

        result = response.read()
        return json.loads(result.decode('utf-8'))['output']
    except urllib.error.HTTPError as error:
        print("The request failed with status code: " + str(error.code))

        print(error.info())
        print(error.read().decode("utf8", 'ignore'))

def main():
    st.title('CHATGPT')
    input_text = st.text_input('Enter the prompt : ')
    
    if st.button('Submit'):
        if input_text:
            response = json.loads(make_request(input_text))
            st.write("The message was violating the rule : ", response['isViolation'])
            st.write("Explanation : ",response['explanation'])
            st.write("Severity of the message : ", response['severity'])
        else:
            st.write('Please enter some text.')

if __name__ == '__main__':
    main()
