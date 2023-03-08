resource "azurerm_resource_group" "resource_group" {
  count    = length(var.azure_locations)
  location = var.azure_locations[count.index]
  name     = "${var.project}-${var.environment}-resource-group"
}

resource "azurerm_application_insights" "application_insights" {
  count               = length(var.azure_locations)
  location            = var.azure_locations[count.index]
  name                = "${var.project}-${var.environment}-application-insights"
  resource_group_name = azurerm_resource_group.resource_group[count.index].name
  application_type    = "Node.JS"
}

resource "azurerm_app_service_plan" "app_service_plan" {
  name                = "${var.project}-${var.environment}-app-service-plan"
  resource_group_name = azurerm_resource_group.resource_group[count.index].name
  count               = length(var.azure_locations)
  location            = var.azure_locations[count.index]
  kind                = "FunctionApp"
  reserved            = true # this has to be set to true for Linux. Not related to the Premium Plan
  sku {
    tier = "Dynamic"
    size = "Y1"
  }
}

resource "azurerm_function_app" "function_app" {
  count               = length(var.azure_locations)
  name                = "${var.project}-${var.environment}-function-app"
  resource_group_name = azurerm_resource_group.resource_group[count.index].name
  location            = var.azure_locations[count.index]
  app_service_plan_id = azurerm_app_service_plan.app_service_plan[count.index].id
  app_settings        = {
    "WEBSITE_RUN_FROM_PACKAGE"       = "",
    "FUNCTIONS_WORKER_RUNTIME"       = "node",
    "APPINSIGHTS_INSTRUMENTATIONKEY" = azurerm_application_insights.application_insights[count.index].instrumentation_key,
  }
  os_type = "linux"
  site_config {
    linux_fx_version          = "node|14"
    use_32_bit_worker_process = false
  }
  storage_account_name       = azurerm_storage_account.storage_account[count.index].name
  storage_account_access_key = azurerm_storage_account.storage_account[count.index].primary_access_key
  version                    = "~3"

  lifecycle {
    ignore_changes = [
      app_settings["WEBSITE_RUN_FROM_PACKAGE"],
    ]
  }
}