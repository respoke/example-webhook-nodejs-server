# example-webhook-nodejs-server

## Processing Webhooks from Respoke

Webhooks are a powerful, yet little known feature of Respoke.

When events happen in your app - like endpoints joining or leaving a group - you can
get notified via webhook.

## Prerequesites

* [Node.js](https://nodejs.org/download/)

## 0. Download ngrok (optional)

For fast local development, this example will use [ngrok](https://ngrok.com/download) to tunnel a port on your localhost to a subdomain of ngrok. This lets Respoke send you webhooks on https://your-custom-subdomain.ngrok.com and the requests are proxied to your local machine.

[Download ngrok](https://ngrok.com/download) and take note of where you put the `ngrok` file.

## 1. Configure your webhook

To get started, go the the [Respoke dev portal](https://portal.respoke.io) and create a new app.

Then navigate down to the *Webhooks* section.

![respoke dev portal webhook URL input](http://i.imgur.com/vCJUWED.png)

Put in your webhook endpoint and hit *Update*.

If you're using `ngrok`, just make up something like `https://actual-cannibal-shia-labeouf.ngrok.com`.

## 2. Clone the repo and install

An example webhook server is on the Respoke GitHub:

```bash
git clone https://github.com/respoke/example-webhook-nodejs-server
cd example-webhook-nodejs-server
npm install
```

## 3. Run the webhook server

```bash
npm start
```

The server will run on http://localhost:3009 and print incoming webhooks.



## 4. Fire up the ngrok tunnel (optional)

```bash
cd path/to/ngrok/folder
./ngrok --subdomain=actual-cannibal-shia-labeouf 3009
```

This tells `ngrok` to tunnel all requests to `https://actual-cannibal-shia-labeouf.ngrok.com` to your `localhost:3009`.

## 5. Receive webhooks

Next, do something that initiates some Respoke activity. You could clone the [web examples](https://github.com/respoke/web-examples) and set them up to use your `appId`.

![example webhook traffic](http://i.imgur.com/B0EYgBi.png)

That's really all it takes to start responding to webhooks.
