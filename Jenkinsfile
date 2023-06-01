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
        sh '''ls -la
git log --oneline'''
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
        sh 'docker login -u $DOCKER_USER -p $DOCKER_PASS'
      }
    }

    stage('Docker Push') {
      steps {
        sh 'docker push aniket98145/todolist:latest '
      }
    }

    stage('Docker run') {
      steps {
        sh '''docker stop todolistcontainer
docker rm  todolistcontainer
docker run -d -p 80:80  --name todolistcontainer aniket98145/todolist
echo "Ran Successfully"'''
      }
    }

  }
}