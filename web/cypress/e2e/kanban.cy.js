
describe('Kanban board, drage and drop', () => {

    const dataTask = [

        { column: 'done', title: 'Criar testes E2E' },
        { column: 'done', title: 'Configurar CI/CD' },
        { column: 'done', title: 'Documentar API' },
        { column: 'done', title: 'Refatorar componentes' }
    ]
    beforeEach(() => {
        cy.login();
        cy.goTo('Kanban', 'Kanban Board')
    })

    dataTask.forEach((data) => {
        it('Deve mover uma tarefa da coluna Todo para a coluna Done', () => {

            cy.dragDropTask(data.column, data.title)
            cy.assDragDrop(data.column, data.title)

        });
    });

    it(`Deve mover todas as tags para ${dataTask[0].column}`, () => {

        dataTask.forEach((data) => {
            cy.dragDropTask(data.column, data.title)
            cy.assDragDrop(data.column, data.title)
        })

    })

})