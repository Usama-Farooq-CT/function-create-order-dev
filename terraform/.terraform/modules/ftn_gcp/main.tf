# Generates an archive of the source code compressed as a .zip file.
data "archive_file" "source" {
  type        = "zip"
  source_dir  = "./function"
  output_path = "./${var.function_name}.zip"
}

# Add source code zip to the Cloud Function's bucket
resource "google_storage_bucket_object" "zip" {
  source       = data.archive_file.source.output_path
  content_type = "application/zip"

  # Append to the MD5 checksum of the files content
  # to force the zip to be updated as soon as a change occurs
  name   = "src-${data.archive_file.source.output_md5}.zip"
  bucket = google_storage_bucket.function_bucket.name
}

# Create the Cloud function
resource "google_cloudfunctions_function" "gcp_function" {
  count = length(var.gcp_zones)
  name    = var.function_name
  runtime = "nodejs16"
  region = var.gcp_zones[count.index]
  # Get the source code of the cloud function as a Zip compression
  source_archive_bucket = google_storage_bucket.function_bucket.name
  source_archive_object = google_storage_bucket_object.zip.name

  entry_point  = "gqlHandler"
  trigger_http = true

  environment_variables = {
    NODE_ENV = var.node_env
    FUNC_TYPE = "GCF"
  }
}

# IAM entry for all users to invoke the function
resource "google_cloudfunctions_function_iam_member" "Function_Invoker" {
  count = length(var.gcp_zones)
  project        = google_cloudfunctions_function.gcp_function[count.index].project
  region         = google_cloudfunctions_function.gcp_function[count.index].region
  cloud_function = google_cloudfunctions_function.gcp_function[count.index].name

  role   = "roles/cloudfunctions.invoker"
  member = "allUsers"
}
