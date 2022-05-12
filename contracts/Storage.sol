//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Storage {

    constructor() {
        owner = msg.sender;
    }

    address[] public investorList;
    address public owner;

    mapping(address => uint) balances;

    function invest() external payable{
        balances[msg.sender] += msg.value;
        bool inside = false;

        if(investorList.length > 0){
            for(uint i = 0; i < investorList.length; i++){
                if(msg.sender == investorList[i]){
                    inside = true;
                }
            }
        }if (inside == false){
            investorList.push(msg.sender);
        }else{
            investorList.push(msg.sender);
        }
    }

    function balanceOf() external view returns(uint){
        return address(this).balance;
    }

    function sendMoney(address _to, uint amount) public{
        require(msg.sender == owner);
        address payable reciver = payable(_to);
        reciver.transfer(amount*(10**18));
    }

    function showInvestors() external view returns(address[] memory){
        return investorList;
    }

    function showAllInvestmentsByAddress(address investor) external view returns(uint){
        return balances[investor];
    }
}