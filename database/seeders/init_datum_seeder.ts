
import User from '../../app/Models/User'
import Tweet from '../../app/Models/Tweet'
import { BaseSeeder } from '@ioc:Adonis/Lucid/Seeder'

export default class InitData extends BaseSeeder {
  public async run() {
    // Votre code ici...
    public async run() {
      // Créer l'utilisateur
      const user = await User.create({
        firstname: "Obed",
        lastname: "Mbora",
        username: "obed25",
        avatar: "https://exemple.com/avatar1.jpg",
        bio: "Développeur fullstack"
      })
  
      // Créer ses tweets
      await Tweet.createMany([
        {
          userId: user.id,
          content: 'Développeur back end',
          image: 'public/images/IMG_0541.JPG'
        },
        {
          userId: user.id,
          content: 'Développeur junior',
          image: 'public/images/img-1 (1).JPG'
        }
        // Ajoutez tous vos autres tweets ici
      ])
    }
  }
  }
}