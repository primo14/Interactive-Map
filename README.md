# D280App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.1.


##Explore the world map by hovering over a country!

<img width="1643" alt="Screenshot 2024-12-09 at 3 27 13 PM" src="https://github.com/user-attachments/assets/3a8ace9e-059f-4240-915c-09309398c3d9">


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## AWS Amplify Deployment

### Prerequisites

- AWS account
- AWS CLI installed and configured
- Amplify CLI installed (`npm install -g @aws-amplify/cli`)

### Initialize Amplify

1. Run `amplify init` to initialize a new Amplify project.
2. Follow the prompts to configure your project.

### Add Hosting

1. Run `amplify add hosting`.
2. Choose `Hosting with Amplify Console (Managed hosting with custom domains, Continuous deployment)`.

### Deploy

1. Run `amplify publish` to deploy your application to AWS Amplify.

### amplify.yml

Ensure your `amplify.yml` file is configured correctly for the build and deployment process:

```yml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
        - export NVM_DIR="$HOME/.nvm"
        - '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"'
        - nvm install 18.19.1
        - nvm use 18.19.1
        - npm ci
        - export API_KEY=$(aws ssm get-parameter --name "/d280_app/api-key" --with-decryption --query "Parameter.Value" --output text)
        - export API_ENDPOINT=$(aws ssm get-parameter --name "/d280_app/api-endpoint" --with-decryption --query "Parameter.Value" --output text)
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist/d280_app/browser
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```
### Environment Variables
Ensure your environment variables are set correctly in the Amplify Console under App settings > Environment variables.

### Troubleshooting
If you encounter issues with the deployment, check the build logs in the Amplify Console for more details.

### License
This project is licensed under the MIT License - see the LICENSE file for details.


This [README.md] file provides an overview of the project, development instructions, and detailed steps for deploying the application using AWS Amplify. Adjust the content as needed to fit your specific project requirements.
