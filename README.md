# List Records

List, sort, filter, and rate a large list of names.

 * :construction_worker: **Under Construction** :construction:
 * This application consists of a Phoenix 1.3.2 backend, and a React/Redux frontend. It allows listing of a large dataset, with controls to filter and sort the data.

## TODO

 * Implement Redux binding to sort list :page_with_curl:
 * Add feature to favorite / unfavorite listed records :star:
 * Create `mix` task to import and store ~7k schema records to be listed :truck:
 * Complete test coverage for front end :100:

## Hosting

 * The application can be viewed at https://listsearchfilter.herokuapp.com/ :shipit:
   * _(Heroku free tier - may need to wake from sleep)_ 
 * Deployment is made possible with the Elixir and Phoenix [Heroku Buildpacks](https://hexdocs.pm/phoenix/heroku.html#adding-the-phoenix-static-buildpack) :droplet: :fire:

----

## Local Development

To start your Phoenix server:

  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.create && mix ecto.migrate`
  * Install Node.js dependencies with `cd assets && npm install`
  * Run `mix run priv/repo/seeds.exs` to seed database with sample data
  * Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.
