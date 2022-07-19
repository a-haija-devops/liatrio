# liatrio

# Prerequisites:

## Install Kubectl
```bash
$ curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
```
https://kubernetes.io/docs/tasks/tools/

## Install AWS CLI
```bash
$ curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" unzip awscliv2.zip sudo ./aws/install
```
https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html

## Install esksctl
```bash
$ curl --silent --location "https://github.com/weaveworks/eksctl/releases/latest/download/eksctl_$(uname -s)_amd64.tar.gz" | tar xz -C /tmp
```
https://docs.aws.amazon.com/eks/latest/userguide/eksctl.html

# Deployment steps:

## Create a build project in CodeBuild
- From aws console go to CodeBuild
- Create new project
- In the environment variable tab create the following variables and add your values

    - AWS_DEFAULT_REGION
    - AWS_ACCOUNT_ID
    - IMAGE_REPO_NAME
    - IMAGE_TAG

- (Optional) you can create a CodePipline project to trigger a build on every commit

## Create your EKS Cluster
```bash
$ eksctl create cluster -f k8s/cluster.yaml
```
## Create your k8s objects
```bash
$ kubectl apply -f k8s/express.yaml 
```
## Optionally you can change something in the code and test the automated image build and deploy

# Clean up steps:
## Delete EKS Cluster
```bash
$ eksctl delete cluster -f k8s/cluster.yaml
```
