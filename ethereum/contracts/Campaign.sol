// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(uint minimum) public {
        Campaign newCampaign = new Campaign(minimum, msg.sender);
        deployedCampaigns.push(address(newCampaign));
    }

    function getDeployedCampaigns() public view returns (address[] memory) {
        return deployedCampaigns;
    }
}

contract Campaign {
    // struct que modela uma solicitação
    struct Request {
        string description;     // descricao da request
        uint value;             // valor 
        address payable recipient;      // endereço do prestador de serviços
        bool complete;          // indica se a request já foi aprovada
        uint approvalCount;     // votos a favor
        mapping(address => bool) approvals;     // track de quem já votou
    }
    // solicitações de serviços, solicitadas pelo gerente
    Request[] public requests;
    // endereço gerente do projeto
    address public manager;
    // minimo de doação para se tornar contribuidor do projeto
    uint public minimumContribution;
    // endereço dos contribuidores que podem votar
    // ou seja, aqueles que doaram a contribuição minima
    mapping(address => bool) public approvers;
    uint public approversCount;

    // modifier que checa se quem chama a função é o gerente
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    constructor (uint minimum, address creator) {
        manager = creator;
        minimumContribution = minimum;
    }

    // funcao para contribuir com o projeto
    function contribute() public payable {
        require(msg.value > minimumContribution);

        approvers[msg.sender] = true;
        approversCount++;
    }

    // funcao de criar nova solicitação
    function createRequest(string memory description, uint value, address payable recipient) public restricted {
        Request storage r = requests.push();
        r.description = description;
        r.value = value;
        r.recipient = recipient;
        r.complete = false;
        r.approvalCount = 0;
    }

    function approveRequest(uint index) public {
        Request storage request = requests[index];

        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];

        require(request.approvalCount > (approversCount / 2));
        require(!request.complete);

        request.recipient.transfer(request.value);
        request.complete = true;
    }

    function getSummary() public view returns(
        uint, uint, uint, uint, address
    ) {
        return (
            minimumContribution,
            address(this).balance,
            requests.length,
            approversCount,
            manager
        );
    }

    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }

}