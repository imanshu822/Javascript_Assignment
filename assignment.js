const NFTCollection = [];

function mintNFT(_name, _eyeColor, _clothing, _accessory) {
  const NFT = {
    name: _name,
    eyeColor: _eyeColor,
    clothing: _clothing,
    accessory: _accessory,
  };
  NFTCollection.push(NFT);
  console.log("Minted: " + _name);
}

function listNFTs() {
  for (let i = 0; i < NFTCollection.length; i++) {
    console.log("\nID: \t " + (i + 1));
    console.log("Name: \t" + NFTCollection[i].name);
    console.log("Eye Color: \t" + NFTCollection[i].eyeColor);
    console.log("Clothing: \t" + NFTCollection[i].clothing);
    console.log("Accessory: \t" + NFTCollection[i].accessory);
  }
}

function getTotalSupply() {
  console.log("\nTotal Supply: " + NFTCollection.length);
}

mintNFT("Luna", "green", "jacket", "necklace");
mintNFT("Kai", "hazel", "sweater", "ring");
mintNFT("Nova", "blue", "dress", "earrings");
mintNFT("Zara", "brown", "blouse", "bracelet");
listNFTs();
getTotalSupply();
