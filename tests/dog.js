const { Given, Then, And } = require("@cucumber/cucumber");
const { spec, expect } = require("pactum");

//@Given
it("An URL, check your http status is 200", async () => {
  return spec()
    .get("https://dog.ceo/api/breeds/image/random")
    .expectStatus(200);
});

//@AND
it("Type the pincture is JPG", async () => {
  const response = await spec()
    .get("https://dog.ceo/api/breeds/image/random")
    .toss();

  expect(response.body.message.includes(".jpg"), true);
});

//@AND
it("Check status code error", async () => {
  const URL_WRONG = "https://dog.ceo/api/breeds/errror";
  spec().get(URL_WRONG).expectStatus(404);
});
