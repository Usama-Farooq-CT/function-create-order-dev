resource "azurerm_storage_account" "storage_account" {
  count = length(var.azure_locations)
  name = "${var.project}${var.environment}storage"
  resource_group_name = azurerm_resource_group.resource_group[count.index].name
  location = "East US"
  account_tier = "Standard"
  account_replication_type = "LRS"
}