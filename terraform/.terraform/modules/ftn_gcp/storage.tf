resource "google_storage_bucket" "function_bucket" {
  project = var.project_id
  name     = "${var.project_id}-function"
  location = "us-central1"
}