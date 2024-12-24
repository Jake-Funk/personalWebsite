---
title: "Clueless"
stack: "Next.js, shadcn/ui, FastAPI, Docker, Github Actions, Google Cloud Platform"
order: 1
images:
  - "/src/assets/clueless.png"
---

Clueless is a simple take on the classic tabletop game Clue, that can be played online. I built the frontend using Next.js 14 as the meta-framework and used shadcn/ui for the components. The server is written in python using the FastAPI framework, which makes use of the openAPI standard and pydantic for data validation. I used uv for the python environment management.

The CI/CD pipeline runs all the tests for the project, then builds a docker image of the server and deploys it automatically to Google Cloud Run.

<a class="link link-primary" href="https://github.com/Jake-Funk/clueless" target="_blank" >Click here for the code</a> or <a class="link link-primary" href="https://clueless-eight.vercel.app/" target="_blank">Click here for the live demo</a>
