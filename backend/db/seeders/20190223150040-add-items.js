'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('items', [
      {
        title: "Title 1",
        text: "Sample Text",
      },
      {
        title: "Title 2",
        text: "Sample Text",
      },
      {
        title: "Title 3",
        text: "Sample Text",
      },
      {
        title: "Title 4",
        text: "Sample Text",
      },
      {
        title: "Title 5",
        text: "Sample Text",
      },
      {
        title: "Title 6",
        text: "Sample Text",
      },
      {
        title: "Title 7",
        text: "Sample Text",
      },
      {
        title: "Title 8",
        text: "Sample Text",
      },
      {
        title: "Title 9",
        text: "Sample Text",
      },
      {
        title: "Title 10",
        text: "Sample Text",
      },
      {
        title: "Title 11",
        text: "Sample Text",
      },
      {
        title: "Title 12",
        text: "Sample Text",
      },
      {
        title: "Title 13",
        text: "Sample Text",
      },
      {
        title: "Title 14",
        text: "Sample Text",
      },
      {
        title: "Title 15",
        text: "Sample Text",
      },
      {
        title: "Title 16",
        text: "Sample Text",
      },
      {
        title: "Title 17",
        text: "Sample Text",
      },
      {
        title: "Title 18",
        text: "Sample Text",
      },
      {
        title: "Title 19",
        text: "Sample Text",
      },
      {
        title: "Title 20",
        text: "Sample Text",
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('items', null, {});
  }
};
