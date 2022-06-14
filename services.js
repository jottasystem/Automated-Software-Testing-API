const axios = require("axios");
class Dog {
  services = new axios.Axios();
  async getRandomDog() {
    const result = await this.services.get(
      "https://dog.ceo/api/breeds/image/random"
    );
    console.log("TEEESTE REULT", result);
    return result;
  }
}

const sg_Dog = new Dog();
module.exports = sg_Dog;
