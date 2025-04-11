export type User = {
id: number
firstname: string
lastname: string
username: string
avatar: string
bio : string
createdAt: Date
}

export type Tweet = {
    id: number;
    content : string
    createdAt: Date
    user?: number
    image: string
}

export const tweets: Tweet[] = [
    {
        id: 1,
        content: 'developpeur back end',
        image: "public/images/IMG_0541.JPG",
        createdAt: new Date(),
        user:2
    },
    {
        id: 2,
        content: 'developpeur jonior',
        image:"public/images/img-1 (1).JPG",
        createdAt: new Date(),
        user:2
    },

    {
        id: 3,
        content: 'developpeur leravel',
        image:"public/images/img-1 (2).JPG",
        createdAt: new Date(),
        user:2
    },
    {
        id: 4,
        content: 'developpeur full stack',
        image:"public/images/img-1 (3).JPG",
        createdAt: new Date(),
        user:2
    },
    {
        id: 5,
        content: 'developpeur senior',
        image:"public/images/img-1 (4).JPG",
        createdAt: new Date(),
        user:2
    },
    {
        id: 6,
        content: 'developpeur adonis',
        image:"public/images/img-1 (5).JPG",
        createdAt: new Date(),
        user:2
    },
    {
        id: 7,
        content: 'developpeur php',
        image:"public/images/img-1 (6).JPG",
        createdAt: new Date(),
        user:2
    },
    {
        id: 8,
        content: 'developpeur react lative',
        image:"public/images/img-1 (7).JPG",
        createdAt: new Date(),
        user:2
    },
    {
        id: 9,
        content: 'developpeur back ',
        image:"public/images/img-1 (8).JPG",
        createdAt: new Date(),
        user:2
    },
    {
        id: 10,
        content: 'developpeur back end',
        image:"public/images/img-1 (9).JPG",
        createdAt: new Date(),
        user:2
    }, 
]






export const users: User[] = [
    {
        id: 1,
        firstname: "Obed",
        lastname: "Mbora", 
        username: "obed@25",
        avatar : "https://exemple.com/avatar1.jpg",
        bio : "Je suis le meilleur développeur front end de ma salle",
        createdAt: new Date()
    },
    {
        id: 2,
        firstname: "Philippe",
        lastname: "Mbonge", 
        username: "obed@25",
        avatar : "https://exemple.com/avatar1.jpg",
        bio : "Je suis le meilleur développeur front end de ma salle",
        createdAt: new Date()
    },
    {
        id: 3,
        firstname: "patrick",
        lastname: "Mundonga", 
        username: "obed@25",
        avatar : "https://exemple.com/avatar1.jpg",
        bio : "Je suis le meilleur développeur front end de ma salle",
        createdAt: new Date()
    },
    {
        id: 4,
        firstname: "Gloire",
        lastname: "Kabunga", 
        username: "obed@25",
        avatar : "https://exemple.com/avatar1.jpg",
        bio : "Je suis le meilleur développeur front end de ma salle",
        createdAt: new Date()
    },
    {
        id: 5,
        firstname: "Gradi",
        lastname: "kadea", 
        username: "obed@25",
        avatar : "https://exemple.com/avatar1.jpg",
        bio : "Je suis le meilleur développeur front end de ma salle",
        createdAt: new Date()
    },
    {
        id: 6,
        firstname: "Rethas",
        lastname: "Sacret",
        username: "obed@25",
        avatar : "https://exemple.com/avatar1.jpg",
        bio : "Je suis le meilleur développeur front end de ma salle",
        createdAt: new Date()
    },
    {
        id: 7,
        firstname: "Joel",
        lastname: "Guys", 
        username: "obed@25",
        avatar : "https://exemple.com/avatar1.jpg",
        bio : "Je suis le meilleur développeur front end de ma salle",
        createdAt: new Date()
    }
]





