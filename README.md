
# Description
This is the frontend repository for the growcery app, made by team decompile.

Staging URL: https://growcery-decompile.vercel.app/
### Stack:
 - Next.js
 - SCSS
 - Material UI
# Guide
## Setup

1. Clone the repository `git clone https://github.com/decompile-growcery/decompile-fe.git`
2. Install the packages `npm i` or `yarn install`
3. Run the project `npm run dev` or `yarn dev`
## Development
Here are some guides for development:

1. When coloring an element in scss, try looking if the color is already available within the styles/utils/_colors.scss file. If it is, then use the variable defined there.
2. Before pushing to master, please build the project first using `npm run build` or `yarn build`. This is to make sure that there are no errors and that the project can be deployed successfully.
3. Before pushing, please make sure you remove all `console.log` statements and comments made during development.
4. In order for the frontend to connect with the backend, you will need to setup some environment variables. Create a file called .env.local and declare a variable called `NEXT_PUBLIC_API_LINK` and set it to be the backend URL.
