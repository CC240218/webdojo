

describe('Automação do chat de consultar status de entrega', () => {

  const cenarios = [
    { nametest: 'Deve rastrear uma entrega que já foi entregue', codTraking: 'PD123456785BR', message: 'Boa notícia! Sua encomenda já foi entregue com sucesso. 🎉 Se precisar de algo mais, é só me chamar!' },
    { nametest: 'Deve rastrear uma entrega que ja foi despachada', codTraking: 'BR987654321BR', message: 'A sua encomenda já foi despachada e está a caminho! 🚚 Prazo estimado: 5 dias úteis.' },
    { nametest: 'Deve rastrear uma entrega que está a caminho', codTraking: 'QW112233445BR', message: 'Ótima notícia! Sua encomenda está em rota de entrega e chega ainda hoje. Fique de olho! 👀📦' },
    { nametest: 'Deve informar um erro ao não encontrar o codig', codTraking: 'AB123456789XY', message: 'Hmm... Não encontrei uma encomenda com os dados informados. Vamos tentar de novo?' }
  ]

  beforeEach(() => {
    cy.visit('/')
  })

  cenarios.forEach(function (cenario) {

    it(cenario.nametest, () => {

      cy.viewport('iphone-xr');

      cy.openChat();
      cy.messageBotEntry('Olá! Tudo bem? Posso te ajudar a consultar o status da sua encomenda?')
      cy.messageOptions('Sim, por favor!')
      cy.messageOptions('Não, obrigado.')
      cy.clickOptions('Sim, por favor!')
      cy.messageUserEntry('Sim, por favor!')
      cy.messageBotEntry('Ótimo! Por favor, digite o código de rastreio da sua encomenda:')
      cy.typeEnv(cenario.codTraking)
      cy.messageUserEntry(cenario.codTraking)
      cy.messageBotEntry(`Confirmando: você informou o código de rastreio ${cenario.codTraking}. Está tudo certo?`)
      cy.messageOptions('Sim, está certo!')
      cy.messageOptions('Não, quero corrigir.')
      cy.clickOptions('Sim, está certo!')
      cy.messageUserEntry('Sim, está certo!')
      cy.messageBotEntry('Perfeito! Estou consultando as informações nos Correios... Só um instante. 📦🔍')
      cy.messageBotEntry(cenario.message, 7000)


    });
  })
})