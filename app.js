const database = {
    cards: [
        ['zero-two.png', 'Zero Two', 'Fighting klaxosaurs', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nobis aut corporis atque ex, laudantium necessitatibus unde nemo! Id sapiente, aspernatur exercitationem aliquid quasi illo, architecto numquam quo saepe quas quisquam ratione libero eius necessitatibus mollitia perferendis cum? Quibusdam, quis exercitationem assumenda dignissimos libero rem commodi reprehenderit illum laborum quam.'],
        ['hiro.jpg', 'Hiro', 'Being food', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, magnam tenetur a iste eius ab quos nulla nisi itaque tempore assumenda cumque qui blanditiis? Voluptatibus, in voluptates sunt nam omnis nobis. Quasi dolorem ab aut id laborum veritatis esse accusamus vitae perspiciatis magnam voluptatem sit eveniet assumenda, rerum porro recusandae debitis, fugit saepe, doloribus beatae earum. Sed, ipsa. Est, maxime.'],
        ['ichigo.png', 'Ichigo', 'Team leader', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim repudiandae, explicabo, amet soluta dolor esse provident vitae mollitia nisi nemo ut minus unde, incidunt necessitatibus perferendis praesentium eius. Quia ex explicabo omnis! Voluptatum distinctio placeat rerum, magnam saepe vel at porro veritatis explicabo magni eaque, ipsam fugit voluptate? Animi accusantium dignissimos, deleniti consequuntur illo optio.'],
        ['strelizia.png', 'Strelizia', 'Last weapon', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas corporis accusantium laudantium maxime mollitia, provident quos officiis quam molestias necessitatibus praesentium aperiam, expedita ut deleniti debitis rem voluptate dicta iste ullam? Corrupti asperiores velit repellendus laudantium? Molestiae provident consequuntur facere illum? Consectetur tempore consequatur odio iste aut eum numquam ducimus quo blanditiis non.'],
        ['isla.png', 'Isla', 'You didn\'t save her', 'Having happy and beautiful memories won\'t always bring you salvation. The more beautiful a memory is, the more painful it can become. It can even become terryfing. Both for the one who\'s leaving... And for the one left behind.']
    ],

    getCard: cardId => database.cards[cardId],
    getLength: () => database.cards.length
}

const model = {
    currentIndex: 0,

    getFirstCard: () => database.getCard(model.checkIndex(model.currentIndex)),
    getNextCard: () => database.getCard(model.checkIndex(++model.currentIndex)),
    getPrevCard: () => database.getCard(model.checkIndex(--model.currentIndex)),
    getRandomCard: () => {
        model.currentIndex = model.randomInt(database.getLength())
        return database.getCard(model.currentIndex)
    },
    checkIndex: () => {
        const maxIndex = database.getLength()
        if (model.currentIndex >= maxIndex)
            model.currentIndex = 0
        else if (model.currentIndex < 0)
            model.currentIndex = maxIndex - 1
        return model.currentIndex
    },
    randomInt: max => Math.floor(Math.random() * max)
}

const view = {
    image: document.getElementById('image'),
    name: document.getElementById('name'),
    job: document.getElementById('job'),
    about: document.getElementById('about'),
    moveLeft: document.getElementById('move-left'),
    moveRight: document.getElementById('move-right'),
    random: document.getElementById('random'),

    changeCard: card => {
        view.image.src = `./images/${card[0]}`
        view.name.textContent = card[1]
        view.job.textContent = card[2]
        view.about.textContent = card[3]
    }
}

const controller = {
    moveLeft: () => controller.changeCard(model.getPrevCard()),
    moveRight: () => controller.changeCard(model.getNextCard()),
    random: () => controller.changeCard(model.getRandomCard()),
    changeCard: card => view.changeCard(card),
    addEvents: () => {
        view.moveLeft.addEventListener('click', controller.moveLeft)
        view.moveRight.addEventListener('click', controller.moveRight)
        view.random.addEventListener('click', controller.random)
    },
    initFirstCard: () => controller.changeCard(model.getFirstCard())
}

controller.addEvents()
controller.initFirstCard()
