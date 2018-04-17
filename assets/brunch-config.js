exports.config = {
  // See http://brunch.io/#documentation for docs.
  files: {
    javascripts: {
      joinTo: "js/app.js"

      // To use a separate vendor.js bundle, specify two files path
      // http://brunch.io/docs/config#-files-
      // joinTo: {
      //   "js/app.js": /^js/,
      //   "js/vendor.js": /^(?!js)/
      // }
      //
      // To change the order of concatenation of files, explicitly mention here
      // order: {
      //   before: [
      //     "vendor/js/jquery-2.1.1.js",
      //     "vendor/js/bootstrap.min.js"
      //   ]
      // }
    },
    stylesheets: {
      joinTo: "css/app.css"
    },
    templates: {
      joinTo: "js/app.js"
    }
  },

  conventions: {
    // This option sets where we should place non-css and non-js assets in.
    // By default, we set this to "/assets/static". Files in this directory
    // will be copied to `paths.public`, which is "priv/static" by default.
    assets: /^(static)/,
    ignored: /^(css\/react-app)/
  },

  // Phoenix paths configuration
  paths: {
    // Dependencies and current project directories to watch.
    watched: ["static", "css", "scss", "js", "vendor"],
    // Where to compile files to.
    public: "../priv/static"
  },

  // Configure your plugins.
  plugins: {
    babel: {
      presets: ["es2015", "react"],
      // Do not use ES6 compiler in vendor code.
      ignore: [/vendor/]
    },
    copycat: {
      // Copy node_modules/font-awesome/fonts/* to priv/static/fonts/.
      "fonts": ["node_modules/font-awesome/fonts"]
    },
    sass: {
      options: {
        // Tell sass-brunch where to look for files to `@import`.
        includePaths: ["node_modules/bootstrap/scss", "node_modules/font-awesome/scss"],
        // Minimum precision required by bootstrap.
        precision: 8
      }
    }
  },

  modules: {
    autoRequire: {
      "js/app.js": ["js/app"]
    }
  },

  npm: {
    enabled: true,
    whitelist: ["phoenix", "phoenix_html", "react", "react-dom"],
    globals: {
      // Bootstrap JavaScript requires both '$', 'jQuery', Tether, and Popper
      // in global scope.
      $: 'jquery',
      jQuery: 'jquery',
      Tether: 'tether',
      Popper: 'popper.js',
      // Require Bootstrap JavaScript globally too.
      bootstrap: 'bootstrap'
    }
  }
};
