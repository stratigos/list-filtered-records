# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :real_designers,
  ecto_repos: [RealDesigners.Repo]

# Configures the endpoint
config :real_designers, RealDesignersWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "fuvv5RErXj8MqMnC1v98ACjouJ++pQTIUc3EYVh4sDApAPuGXbaeDGLkbUAfzopr",
  render_errors: [view: RealDesignersWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: RealDesigners.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:user_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
