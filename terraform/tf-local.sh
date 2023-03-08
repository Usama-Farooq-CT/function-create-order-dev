terraform init && \
terraform validate && \
npm install --production && \
npm run prepare-function && \
terraform plan && \
terraform apply --auto-approve && \
npm install && \
export CLOUDFLARE_API_TOKEN=X6L_uqIsVFPOqYxE684u6m6CC2_ALK8F8WDQAzr8 && export CLOUDFLARE_ACCOUNT_ID=9047470ddecee229dcd38c16b1bfac99 && npm run deploy
