const { expect } = require("chai")
const { ethers } = require("hardhat")

describe("Storage contract", function() {

    let acc1
    let acc2
    let owner
    let storage

    beforeEach(async function(){
        [owner, acc1, acc2] = await ethers.getSigners()
        const Storage = await ethers.getContractFactory("Storage")
        storage = await Storage.deploy()
        await storage.deployed()
    })

    it("Should set the right owner", async function () {
        expect(await storage.owner()).to.eq(owner.address)
      })

    it("Should invest tokens", async function() {
        await storage.invest({value:50})
        expect(await storage.balanceOf()).to.eq(50)
     });

     it("Should contain all investors", async function() {
         await storage.invest({value:10})
         a = [owner.address]
         await storage.connect(acc1).invest({value:10})
         a.push(acc1.address);
         b = await storage.showInvestors();
        console.log(b)
     })

     it("Should contain all charity of defined investor", async function() {
            await storage.invest({value:10});
            sum = 10
            await storage.invest({value:10});
            sum = 20
            await storage.connect(acc1).invest({value:10});
            
            expect(await storage.showAllInvestmentsByAddress(owner.address)).to.equal(sum);
        });
})