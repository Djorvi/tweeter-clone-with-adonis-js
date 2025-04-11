import Tweet from 'App/Models/Tweet'

export default class TweetsController {
  public async index() {
    const tweets = await Tweet.query()
      .preload('user')
      .orderBy('created_at', 'desc')
    
    return tweets
  }

  public async store({ request, auth }) {
    const user = auth.user!
    const { content, image } = request.only(['content', 'image'])

    const tweet = await user.related('tweets').create({
      content,
      image
    })

    return tweet
  }
}