variable "project_id" {
  default = "copilottravel-be-development"
}

variable "function_name" {
  description = "name of the function"
  type = string
}

variable "node_env" {
  description = "Node env type, like development"
  type = string
}

variable "gcp_zones" {
  default = [
    "asia-northeast1",
    "europe-west2",
    "asia-northeast3",
    "asia-south1",
    "asia-south2",
    "asia-southeast1",
    "asia-southeast2",
    "australia-southeast1",
    "australia-southeast2",
    "europe-central2",
    "europe-north1",
    "europe-southwest1",
    "europe-west1",
    "asia-northeast2",
    "europe-west3",
    "europe-west4",
    "europe-west6",
    "europe-west8",
    "europe-west9",
    "northamerica-northeast1",
    "northamerica-northeast2",
    "southamerica-east1",
    "southamerica-west1",
    "us-central1",
    "asia-east2",
    "us-east1",
    "us-east4",
    "us-east5",
    "us-south1",
    "us-west1",
    "us-west2",
    "us-west3",
    "us-west4",
    "asia-east1"
  ]
}
