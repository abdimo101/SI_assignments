# Documentation

## Event Types

**- patient_registered** <br>
**- appointment_scheduled** <br>
**- treatment_received** <br>
**- patient_discharged**

## How to register & unregister a webhook to a webhook registration system

**1. Install & open Postman** <br>
**2. Create a POST request** <br>
**3. To register a webhook, the request URL is `<servio-url>:4000/webhooksregister` and the body must contain: <br> `{
    "url": "<payload-url>",`<br>`
    "eventType": "<eventtype>"
}`** <br>
**4. To unregister a webhook, the request URL is `<servio-url>:4000/webhooksunregister` and the body must contain: <br> `{
    "url": "<payload-url>",`<br>`
    "eventType": "<eventtype>"
}`** <br>

## Ping Event

**1. Open Postman** <br>
**2. Create a GET request** <br>
**3. To call all registered webhooks, the request URL is `<servio-url>:4000/ping`**
