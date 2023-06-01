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
        sh 'docker buld -t aniket98145/Todolist:latest .'
      }
    }

  }
}