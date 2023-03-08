variable "project" {
  type = string
  description = "Project name"
}

variable "environment" {
  type = string
  description = "Environment (dev / stage / prod)"
}

variable "source_dir" {
  type = string
  description = "function code directory"
}

variable "azure_locations" {
  type = list(string)
  description = "azure locations"
  default = [
    "East US"
  ]
}