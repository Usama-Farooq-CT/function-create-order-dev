variable "gcp_project_id" {
  type    = string
  default = "copilottravel-be-development"
}

variable "azure_project_id" {
  type    = string
  default = "ct"
}

variable "doppler_config" {
  type    = string
  default = "123"
}

variable "doppler_project" {
  type    = string
  default = "123"
}

variable "doppler_token" {
  type    = string
  default = "123"
}

variable "cloudflare_token" {
  type = string
  default = "X6L_uqIsVFPOqYxE684u6m6CC2_ALK8F8WDQAzr8"
}

variable "bucket_name_prefix" {
  type = string
  default = "ct-lambda"
}

variable "cloudflare_account_id" {
  type = string
  default = "9047470ddecee229dcd38c16b1bfac99"
}

variable "cloudflare_route_pattern" {
  type = string
  default = "copilottravel"
}

variable "cloudflare_zone_id" {
  type = string
  default = "09b391c9e9c55303b4e7385e6e6e0c2a"
}

locals {
  function_name = "Amadeus-FlightCreateOrders"
  node_env      = "Dev"
  source_dir    = "../"
}

# GCP

provider "google" {
  project = var.gcp_project_id
}


module "ftn_gcp" {
  source = "api.env0.com/85dcb63f-22b9-4d61-8b6e-1c4825f6adb0/cloud-function-gcp/gcp"
  version = "1.2.7"
  function_name = local.function_name
  node_env      = local.node_env
  doppler_base_token = var.doppler_token
  doppler_config = var.doppler_config
  doppler_project = var.doppler_project
}

## AZURE

module "ftn_azure" {
  source = "api.env0.com/85dcb63f-22b9-4d61-8b6e-1c4825f6adb0/cloud-function-azure/azure"
  version = "1.3.3"
  function_name = local.function_name
  environment = local.node_env
  project = var.azure_project_id
  source_dir = local.source_dir
  doppler_base_token = var.doppler_config
  doppler_config = var.doppler_config
  doppler_project = var.doppler_project
}

## AWS

terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }
}

provider "aws" {
  region = "us-east-1"
  alias = "us_east_1"
}

module "ftn_aws_us_e1" {
  providers = {
    aws = aws.us_east_1
  }
  source = "api.env0.com/85dcb63f-22b9-4d61-8b6e-1c4825f6adb0/cloud-function-aws/aws"
  version = "1.1.5"
  function_name = local.function_name
  source_dir = local.source_dir
  doppler_base_token = var.doppler_token
  doppler_config = var.doppler_config
  doppler_project = var.doppler_project
  zone_id = "us-east-1"
  bucket_name_prefix = var.bucket_name_prefix
  environment = local.node_env
}

provider "aws" {
  region = "us-east-2"
  alias = "us_east_2"
}

module "ftn_aws_us_e2" {
  providers = {
    aws = aws.us_east_2
  }
  source = "api.env0.com/85dcb63f-22b9-4d61-8b6e-1c4825f6adb0/cloud-function-aws/aws"
  version = "1.1.5"
  function_name = local.function_name
  source_dir = local.source_dir
  doppler_base_token = var.doppler_token
  doppler_config = var.doppler_config
  doppler_project = var.doppler_project
  zone_id = "us-east-2"
  bucket_name_prefix = var.bucket_name_prefix
  environment = local.node_env
}

provider "aws" {
  region = "us-west-1"
  alias = "us_west_1"
}

module "ftn_aws_us_w1" {
  providers = {
    aws = aws.us_west_1
  }
  source = "api.env0.com/85dcb63f-22b9-4d61-8b6e-1c4825f6adb0/cloud-function-aws/aws"
  version = "1.1.5"
  function_name = local.function_name
  source_dir = local.source_dir
  doppler_base_token = var.doppler_token
  doppler_config = var.doppler_config
  doppler_project = var.doppler_project
  zone_id = "us-west-1"
  bucket_name_prefix = var.bucket_name_prefix
  environment = local.node_env
}

provider "aws" {
  region = "us-west-2"
  alias = "us_west_2"
}

module "ftn_aws_us_w2" {
  providers = {
    aws = aws.us_west_2
  }
  source = "api.env0.com/85dcb63f-22b9-4d61-8b6e-1c4825f6adb0/cloud-function-aws/aws"
  version = "1.1.5"
  function_name = local.function_name
  source_dir = local.source_dir
  doppler_base_token = var.doppler_token
  doppler_config = var.doppler_config
  doppler_project = var.doppler_project
  zone_id = "us-west-2"
  bucket_name_prefix = var.bucket_name_prefix
  environment = local.node_env
}

provider "aws" {
  region = "ap-south-1"
  alias = "ap_south_1"
}

module "ftn_aws_ap_s1" {
  providers = {
    aws = aws.ap_south_1
  }
  source = "api.env0.com/85dcb63f-22b9-4d61-8b6e-1c4825f6adb0/cloud-function-aws/aws"
  version = "1.1.5"
  function_name = local.function_name
  source_dir = local.source_dir
  doppler_base_token = var.doppler_token
  doppler_config = var.doppler_config
  doppler_project = var.doppler_project
  zone_id = "ap-south-1"
  bucket_name_prefix = var.bucket_name_prefix
  environment = local.node_env
}

provider "aws" {
  region = "ap-northeast-1"
  alias = "ap_northeast_1"
}

module "ftn_aws_ap_ne1" {
  providers = {
    aws = aws.ap_northeast_1
  }
  source = "api.env0.com/85dcb63f-22b9-4d61-8b6e-1c4825f6adb0/cloud-function-aws/aws"
  version = "1.1.5"
  function_name = local.function_name
  source_dir = local.source_dir
  doppler_base_token = var.doppler_token
  doppler_config = var.doppler_config
  doppler_project = var.doppler_project
  zone_id = "ap-northeast-1"
  bucket_name_prefix = var.bucket_name_prefix
  environment = local.node_env
}

provider "aws" {
  region = "ap-northeast-2"
  alias = "ap_northeast_2"
}

module "ftn_aws_ap_ne2" {
  providers = {
    aws = aws.ap_northeast_2
  }
  source = "api.env0.com/85dcb63f-22b9-4d61-8b6e-1c4825f6adb0/cloud-function-aws/aws"
  version = "1.1.5"
  function_name = local.function_name
  source_dir = local.source_dir
  doppler_base_token = var.doppler_token
  doppler_config = var.doppler_config
  doppler_project = var.doppler_project
  zone_id = "ap-northeast-2"
  bucket_name_prefix = var.bucket_name_prefix
  environment = local.node_env
}

provider "aws" {
  region = "ap-northeast-3"
  alias = "ap_northeast_3"
}

module "ftn_aws_ap_ne3" {
  providers = {
    aws = aws.ap_northeast_3
  }
  source = "api.env0.com/85dcb63f-22b9-4d61-8b6e-1c4825f6adb0/cloud-function-aws/aws"
  version = "1.1.5"
  function_name = local.function_name
  source_dir = local.source_dir
  doppler_base_token = var.doppler_token
  doppler_config = var.doppler_config
  doppler_project = var.doppler_project
  zone_id = "ap-northeast-3"
  bucket_name_prefix = var.bucket_name_prefix
  environment = local.node_env
}

provider "aws" {
  region = "ap-southeast-1"
  alias = "ap_southeast_1"
}

module "ftn_aws_ap_se1" {
  providers = {
    aws = aws.ap_southeast_1
  }
  source = "api.env0.com/85dcb63f-22b9-4d61-8b6e-1c4825f6adb0/cloud-function-aws/aws"
  version = "1.1.5"
  function_name = local.function_name
  source_dir = local.source_dir
  doppler_base_token = var.doppler_token
  doppler_config = var.doppler_config
  doppler_project = var.doppler_project
  zone_id = "ap-southeast-1"
  bucket_name_prefix = var.bucket_name_prefix
  environment = local.node_env
}

provider "aws" {
  region = "ap-southeast-2"
  alias = "ap_southeast_2"
}

module "ftn_aws_ap_se2" {
  providers = {
    aws = aws.ap_southeast_2
  }
  source = "api.env0.com/85dcb63f-22b9-4d61-8b6e-1c4825f6adb0/cloud-function-aws/aws"
  version = "1.1.5"
  function_name = local.function_name
  source_dir = local.source_dir
  doppler_base_token = var.doppler_token
  doppler_config = var.doppler_config
  doppler_project = var.doppler_project
  zone_id = "ap-southeast-2"
  bucket_name_prefix = var.bucket_name_prefix
  environment = local.node_env
}

provider "aws" {
  region = "ca-central-1"
  alias = "ca_central_1"
}

module "ftn_aws_ca_c1" {
  providers = {
    aws = aws.ca_central_1
  }
  source = "api.env0.com/85dcb63f-22b9-4d61-8b6e-1c4825f6adb0/cloud-function-aws/aws"
  version = "1.1.5"
  function_name = local.function_name
  source_dir = local.source_dir
  doppler_base_token = var.doppler_token
  doppler_config = var.doppler_config
  doppler_project = var.doppler_project
  zone_id = "ca-central-1"
  bucket_name_prefix = var.bucket_name_prefix
  environment = local.node_env
}

provider "aws" {
  region = "eu-central-1"
  alias = "eu_central_1"
}

module "ftn_aws_eu_c1" {
  providers = {
    aws = aws.eu_central_1
  }
  source = "api.env0.com/85dcb63f-22b9-4d61-8b6e-1c4825f6adb0/cloud-function-aws/aws"
  version = "1.1.5"
  function_name = local.function_name
  source_dir = local.source_dir
  doppler_base_token = var.doppler_token
  doppler_config = var.doppler_config
  doppler_project = var.doppler_project
  zone_id = "eu-central-1"
  bucket_name_prefix = var.bucket_name_prefix
  environment = local.node_env
}

provider "aws" {
  region = "eu-west-1"
  alias = "eu_west_1"
}

module "ftn_aws_eu_w1" {
  providers = {
    aws = aws.eu_west_1
  }
  source = "api.env0.com/85dcb63f-22b9-4d61-8b6e-1c4825f6adb0/cloud-function-aws/aws"
  version = "1.1.5"
  function_name = local.function_name
  source_dir = local.source_dir
  doppler_base_token = var.doppler_token
  doppler_config = var.doppler_config
  doppler_project = var.doppler_project
  zone_id = "eu-west-1"
  bucket_name_prefix = var.bucket_name_prefix
  environment = local.node_env
}

provider "aws" {
  region = "eu-west-2"
  alias = "eu_west_2"
}

module "ftn_aws_eu_w2" {
  providers = {
    aws = aws.eu_west_2
  }
  source = "api.env0.com/85dcb63f-22b9-4d61-8b6e-1c4825f6adb0/cloud-function-aws/aws"
  version = "1.1.5"
  function_name = local.function_name
  source_dir = local.source_dir
  doppler_base_token = var.doppler_token
  doppler_config = var.doppler_config
  doppler_project = var.doppler_project
  zone_id = "eu-west-2"
  bucket_name_prefix = var.bucket_name_prefix
  environment = local.node_env
}

provider "aws" {
  region = "eu-west-3"
  alias = "eu_west_3"
}

module "ftn_aws_eu_w3" {
  providers = {
    aws = aws.eu_west_3
  }
  source = "api.env0.com/85dcb63f-22b9-4d61-8b6e-1c4825f6adb0/cloud-function-aws/aws"
  version = "1.1.5"
  function_name = local.function_name
  source_dir = local.source_dir
  doppler_base_token = var.doppler_token
  doppler_config = var.doppler_config
  doppler_project = var.doppler_project
  zone_id = "eu-west-3"
  bucket_name_prefix = var.bucket_name_prefix
  environment = local.node_env
}

provider "aws" {
  region = "eu-north-1"
  alias = "eu_north_1"
}

module "ftn_aws_eu_n1" {
  providers = {
    aws = aws.eu_north_1
  }
  source = "api.env0.com/85dcb63f-22b9-4d61-8b6e-1c4825f6adb0/cloud-function-aws/aws"
  version = "1.1.5"
  function_name = local.function_name
  source_dir = local.source_dir
  doppler_base_token = var.doppler_token
  doppler_config = var.doppler_config
  doppler_project = var.doppler_project
  zone_id = "eu-north-1"
  bucket_name_prefix = var.bucket_name_prefix
  environment = local.node_env
}

provider "aws" {
  region = "sa-east-1"
  alias = "sa_east_1"
}

module "ftn_aws_sa_e1" {
  providers = {
    aws = aws.sa_east_1
  }
  source = "api.env0.com/85dcb63f-22b9-4d61-8b6e-1c4825f6adb0/cloud-function-aws/aws"
  version = "1.1.5"
  function_name = local.function_name
  source_dir = local.source_dir
  doppler_base_token = var.doppler_token
  doppler_config = var.doppler_config
  doppler_project = var.doppler_project
  zone_id = "sa-east-1"
  bucket_name_prefix = var.bucket_name_prefix
  environment = local.node_env
}
