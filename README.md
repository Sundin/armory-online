# armory-online

[![Netlify Status](https://api.netlify.com/api/v1/badges/d48ae8cf-6791-48d7-bace-c2cb06c06780/deploy-status)](https://app.netlify.com/sites/armory417/deploys)

The website of ARMORY.

Visit the page at [www.armory.se](https://www.armory.se).

The site runs on Vue 3 and Vite 8. Use Node.js 24 LTS locally to match CI and Netlify.

## Project setup
```
npm ci
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Run quality checks
```
npm run lint
npm run build
```

### Preview the production build
```
npm run preview
```

## Maintenance

### Add a new gig
Add to `Tour.vue` with the following fields:

* date
* venue
* location
* link (optional)
* tickets (optional)

### Add a news entry & updated RSS feed
Add to [news.json](./src/home/news.json) with the following fields:

* heading
* date
* body

Optional fields:

* image

To generate an updated RSS feed file, make sure you have `jq` installed:

    brew install jq

Then generate the feed:

    cd rss
    ./generate-rss-feed.sh

Make sure to commit the updated `public/feed.xml` file.

### Build pipelines

Pull requests and pushes to `master` run linting, a production build, and production
dependency audits on Node.js 24. Netlify uses the same Node.js version and publishes
the `dist` directory.


## Backend

The comments and vote APIs are built using the `x-amazon-apigateway-integration` extension. This means that we can read from and write to DynamoDB without needing a lambda or web service. Instead we will just use an API Gateway as a proxy directly in front of DynamoDB.

### Prerequisites
* Install [aws](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv1.html) or [aws2](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) CLI tool.
* Install [sam](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html) CLI tool.
* Install Node.js 24.
* Make sure the bucket `armory-online` exists.
* Make sure you have configured your AWS credentials locally (`aws_access_key_id` and `aws_secret_access_key` in `~/.aws/credentials`).

### Deploy analytics backend

Package and deploy changes:

    cd backend/analytics

    ./deploy.sh

Base URL:

https://5swv4r5tl6.execute-api.eu-west-1.amazonaws.com/Prod/

### Deploy comments backend
Package and deploy changes:

    cd backend/comments

    ./deploy.sh

### Deploy vote backend
Package and deploy changes:

    cd backend/vote

    ./deploy.sh
