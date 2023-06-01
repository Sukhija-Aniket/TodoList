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
      steps {
        sh 'docker login -u  $DOCKER_USER -p $DOCKER_PASS'
      }
    }

  }
  environment {
    DOCKER_USER = 'aniket98145'
    DOCKER_PASS = 'Aniket13@'
  }
}