# Crowd-Coin

## Visão Geral
Crowd-Coin é uma aplicação descentralizada que permite a criação e gestão de campanhas de financiamento coletivo baseadas em contratos inteligentes na blockchain. Baseado no KickStarter, a missão dessa aplicação (além de aprendizado) é prevenir possíveis fraudes - maior falha da plataforma de crowdfunding. O caráter descentralizado e transparente do Ethereum permite uma aplicação que possa mitigar casos fraudulentos.

## Endereço do Contrato na Rede Sepolia
[Endereço do contrato na rede Sepolia.
](https://etherscan.io/address/0x8495D25A2b1d5120C206b3EC5257CF6833aA2361)
## Código do Contrato e Documentação
O código do contrato inteligente principal do projeto está disponível em [`Campaign.sol`](https://github.com/joaquimchianca/crowd-coin/blob/main/ethereum/contracts/Campaign.sol). Este contrato é responsável pela criação e gestão das campanhas de financiamento coletivo.

### Principais Características do Contrato:
- **Criação de Campanha:** Permite que os usuários criem novas campanhas de financiamento com um valor mínimo de contribuição.
- **Contribuição:** Os usuários podem contribuir para as campanhas e se tornarem aprovadores.
- **Solicitações de Gastos:** O gerente da campanha pode criar solicitações de gastos que precisam ser aprovadas pelos contribuidores.
- **Aprovação e Finalização de Solicitações:** Os contribuidores podem aprovar solicitações de gastos, e o gerente pode finalizá-las após a aprovação da maioria.

Para mais detalhes, consulte o código fonte e os comentários no arquivo [`Campaign.sol`](https://github.com/joaquimchianca/crowd-coin/blob/main/ethereum/contracts/Campaign.sol).

## Instruções de Uso

Para utilizar a aplicação, siga os passos abaixo:

1. **Clonar o Repositório:**
   ```bash
   git clone https://github.com/joaquimchianca/crowd-coin.git
   ```
2. **Iniciar o Projeto:**
   Após clonar o repositório, execute o seguinte comando dentro do diretório do projeto para iniciar a aplicação:
   ```bash
   npm run dev
   ```

## Ferramentas Utilizadas

- **Remix:** Ambiente de desenvolvimento integrado para contratos inteligentes em Ethereum.
- **Next.js:** Framework de React para produção.
- **React:** Biblioteca JavaScript para construir interfaces de usuário.
- **Visual Studio Code (VS Code):** Editor de código-fonte.
- **GitHub:** Plataforma de hospedagem de código-fonte e controle de versão usando Git.
- **Node.js:** Ambiente de execução JavaScript no lado do servidor.
- **Web3.js:** Biblioteca que permite interagir com um nó Ethereum local ou remoto.
- **Truffle:** Framework de desenvolvimento para Ethereum.

