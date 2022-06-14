#!/bin/bash

sam package \
    --template-file template.yml \
    --output-template-file packaged.yml \
    --s3-bucket armory-online

aws s3 cp ./vote-api-spec.yml s3://armory-online/

sam deploy \
    --template-file packaged.yml \
    --stack-name armory-vote \
    --capabilities CAPABILITY_IAM \
    --region eu-west-1

echo "Deployment successful. You base URL is:"

aws cloudformation describe-stacks \
        --stack-name armory-vote \
        --region eu-west-1 \
        --query 'Stacks[].Outputs' | cat
