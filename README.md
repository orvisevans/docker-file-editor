# Docker File Editor

A basic docker file editor with GUI for the various sections/options.
A project to improve on PHP skills.

## Project Structure

Database (sql):

- Dockerfile Reference
  - Steps (RUN, CMD, LABEL, etc.) (id, text, uses env variables, editor-type)
  - Editor-types (code, text, env. variable)
  - Step formats ("RUN <command>" and "RUN ["executable", "param1", "param2"]")
    - format elements may move to their own table too?
  - Step flags (RUN --mount)
  - Step flag options (RUN --mount=type=bind)
    ...
- Users?

Server layer (php):

- API access for Database
- Receive data structure for dockerfile
  - generate / return yaml.

Front-end (react native):

- Add/Remove/Rearrange steps
- Options for each step
  - Sub-options/Editor for each step (ask backend with lots of ajax calls)
    - Depends on step's sub-options and editor type
- Generates JSON data structure for dockerfile using Step ids, etc.
  - This gives the back-end more to do (good since that's what I'm working on learning)
- Display generated yaml

## Roadmap

MVP:

1. Create MVP db tables/data with just a few steps of data
2. Create MVP API access for selected tables
3. Create MVP front-end to:
   - display step options
   - generate sub-step options
   - send data-structure to back-end
4. Create MVP API to generate yaml
5. Show yaml on front-end

## Development

To make sure this works the same on any machine (and to simplify my environment setup), I developed with Docker. With Docker installed, simply run:

```bash
docker compose up
```
