import os
from dotenv import load_dotenv
from simple_salesforce import Salesforce
# Load credentials from .env file
load_dotenv()
# Authenticate with Salesforce
sf = Salesforce(
username=os.getenv("SF_USERNAME"),
password=os.getenv("SF_PASSWORD"),

security_token=os.getenv("SF_SECURITY_TOKEN"),
consumer_key=os.getenv("SF_CONSUMER_KEY"),
consumer_secret=os.getenv("SF_CONSUMER_SECRET"),
domain=os.getenv("SF_DOMAIN", "login")
)


# Account data payload
new_account_data = {
"Name": "Alma Technology",
"Phone": "555-0199",
"Industry": "Technology",
"Type": "Prospect"
}
# 1. CREATE Operation
try:
    response = sf.Account.create(new_account_data)
    if response.get("success"):
        account_id = response.get("id")
        print("--- Account Created Successfully ---")
        printf("New Account ID: {account_id}")

    # Save ID to a local file for subsequent scripts
        with open("last_account_id.txt", "w") as f:
            f.write(account_id)
    else:
        print("Failed to create record:", response.get("errors"))
except Exception as e:
    printf("Error creating record: {e}")