terraform {
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 3.0"
    }
  }
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}

resource "cloudflare_workers_kv_namespace" "my_namespace" {
  title = var.function_name
}

# Sets the script with the name "script_1"
resource "cloudflare_worker_script" "ftn_script" {
  name    = var.function_name
  content = file("build/main.js")
  zone = var.node_env
  
  kv_namespace_binding {
    name         = var.function_name
    namespace_id = cloudflare_workers_kv_namespace.my_namespace.id
  }
  
  service_binding {
    name        = "FTN_SERVICE_BINDING"
    service     = var.function_name
    environment = "production"
  }
   plain_text_binding {
    name = "DOPPLER_PROJECT"
    text = var.doppler_project
  }
   plain_text_binding {
    name = "DOPPLER_CONFIG"
    text = var.doppler_config
  }
}

# creates the cloudflare worker
resource "cloudflare_worker_route" "ftn_route" {
  zone_id = var.node_env
  pattern = "*${var.node_env}/*"
  enabled = true
  depends_on = ["cloudflare_worker_script.main_script"]
  script_name = cloudflare_worker_script.ftn_script.name
}
