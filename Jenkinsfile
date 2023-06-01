pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/Sukhija-Aniket/TodoList', branch: 'main')
      }
    }

    stage('logs') {
      steps {
        sh 'ls -la'
      }
    }

    stage('build') {
      steps {
        sh '''echo $PATH
docker build -t aniket98145/todolist:latest .
'''
      }
    }

    stage('Login to Docker') {
      agent any
      environment {
        DOCKER_USER = 'aniket98145'
        DOCKER_PASS = 'Aniket13@'
      }
      steps {
        sh 'echo $PATH'
      }
    }

  }
  environment {
    DOCKER_USER = 'aniket98145'
    DOCKER_PASS = 'Aniket13@'
  }
}