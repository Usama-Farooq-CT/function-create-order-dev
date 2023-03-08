#aws source
resource "null_resource" "lambda_dependencies" {
  depends_on = [
    null_resource.move_files
  ]
  provisioner "local-exec" {
    command = "cd /mnt/workspace/${var.source_dir} && cp -R /usr/src/app/node_modules ."
  }

  triggers = {
    index = sha256(file("./${var.source_dir}/index.js"))
    package = sha256(file("./${var.source_dir}/package.json"))
  }
}

data "archive_file" "lambda" {
  depends_on = [
    null_resource.move_files,
    null_resource.lambda_dependencies
  ]

  output_path = "/mnt/workspace/lambda.zip"
  source_dir  = "/mnt/workspace/${var.source_dir}"
  type        = "zip"
}

resource "aws_lambda_function" "aws_function" {
  filename      = data.archive_file.lambda.output_path
  function_name = var.function_name
  role          = aws_iam_role.lambda_role.arn
  handler       = "index.gqlHandler"
  runtime       = "nodejs16.x"
  environment {
    variables = {
      NODE_ENV  = "development"
      FUNC_TYPE = "lambda"
    }
  }
  depends_on = [aws_iam_role_policy_attachment.attach_iam_policy_to_iam_role]
}

resource "aws_lambda_function_url" "function_url" {
  function_name      = aws_lambda_function.aws_function.function_name
  authorization_type = "NONE"

  cors {
    allow_credentials = true
    allow_origins     = ["*"]
    allow_methods     = ["*"]
    allow_headers     = ["date", "keep-alive"]
    expose_headers    = ["keep-alive", "date"]
    max_age           = 86400
  }
}