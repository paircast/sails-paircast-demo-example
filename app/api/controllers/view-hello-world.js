module.exports = {


  friendlyName: 'View hello world',


  description: 'Display "Hello world" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/hello-world'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
