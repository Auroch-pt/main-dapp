import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { FreedevToken, FreedevToken__factory } from "../typechain";

const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("When the FreedevToken is deployed", function () {
  
  let freedevToken: FreedevToken, owner: SignerWithAddress, addr1: SignerWithAddress, addr2: SignerWithAddress;

    before(async function () {

        const freedevTokenFactory: FreedevToken__factory = await ethers.getContractFactory("FreedevToken");
        freedevToken = await freedevTokenFactory.deploy(1000000);
        [owner, addr1, addr2] = await ethers.getSigners();
    })

    it("Should have the name FreeDEV", async () => {
        expect(await freedevToken.name()).to.equal("FreeDEV");
    })

    it("Should have the symbol FRDV", async () => {
        expect(await freedevToken.symbol()).to.equal("FRDV");
    })

    it("Should assign the total supply of tokens to the owner", async () => {
          
        const ownerBalance = await freedevToken.balanceOf(await owner.address);
        expect(await freedevToken.totalSupply()).to.equal(ownerBalance);
    })

});