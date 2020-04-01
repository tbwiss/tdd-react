const fetchMock = jest.genMockFromModule('fetch');

let mockResponse = {
  data: {
    "shops": [
      {
        "location": "test location",
        "address": "test address"
      }
    ]
  }
};

fetchMock.get.mockImplementation(req);

function req() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockResponse);
    }, 200);
  });
}

module.exports = fetchMock;