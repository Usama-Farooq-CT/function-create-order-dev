resource "null_resource" "move_files" {
  provisioner "local-exec" {
    command = "cp -R ./* /mnt/workspace/"
  }

  triggers = {
    always_run = timestamp()
  }
}