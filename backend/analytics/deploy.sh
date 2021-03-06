#!/bin/bash

sam package \
    --template-file template.yml \
    --output-template-file packaged.yml \
    --s3-bucket armory-online

sam deploy \
    --template-file packaged.yml \
    --stack-name armory-analytics \
    --capabilities CAPABILITY_IAM \
    --region eu-west-1

echo "Deployment successful. You base URL is:"

aws cloudformation describe-stacks \
        --stack-name armory-analytics \
        --region eu-west-1 \
        --query 'Stacks[].Outputs' | cat
