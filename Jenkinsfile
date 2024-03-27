pipeline {
  agent any
  environment {
    AWS_ACCOUNT_ID="383777081513"
    AWS_DEFAULT_REGION="us-east-1" 
    CLUSTER_NAME="ridgewood-cluster"
    SERVICE_NAME="ridgewood-service"
    TASK_DEFINITION_NAME="ridgewood-task-definition"
    DESIRED_COUNT="1"
    IMAGE_REPO_NAME="ridgewood"
    IMAGE_TAG="${env.BUILD_ID}"
    REPOSITORY_URI = "383777081513.dkr.ecr.us-east-1.amazonaws.com/ridgewood"
    registryCredential = "ridgewood-aws"
  }
  
  stages {
    // Building Docker images
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build("${IMAGE_REPO_NAME}:${IMAGE_TAG}")
        }
      }
    }
   
    // Uploading Docker images into AWS ECR
    stage('Pushing to ECR') {
      steps {  
        script {
			    docker.withRegistry("https://" + REPOSITORY_URI, "ecr:${AWS_DEFAULT_REGION}:" + registryCredential) {
            dockerImage.push()
          }
        }
      }
    }
      
    stage('Deploy') {
      steps{
        withAWS(credentials: registryCredential, region: "${AWS_DEFAULT_REGION}") {
          script {
			      sh './script.sh'
          }
        } 
      }
    }      
  }
}
