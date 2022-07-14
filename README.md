# liatrio

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
## Optionally you can change something in the code and test the automated imaged build and deploy

# Clean up steps:
## Delete EKS Cluster
```bash
$ eksctl delete cluster -f k8s/cluster.yaml
```
