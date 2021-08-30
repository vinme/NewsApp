import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    "articles": [
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Martin Pengelly",
          "title": "Rand Paul: ‘Hatred for Trump’ blocks Covid study of horse drug ivermectin - The Guardian",
          "description": "Kentucky senator tells constituents he is ‘in the middle’ on use of anti-parasitic FDA has implored Americans not to take",
          "url": "https://amp.theguardian.com/us-news/2021/aug/30/rand-paul-ivermectin-covid-donald-trump",
          "urlToImage": null,
          "publishedAt": "2021-08-30T14:02:00Z",
          "content": "Rand PaulKentucky senator tells constituents he is in the middle on use of deworming medication FDA has implored Americans not to take\r\nFederal researchers will not objectively study ivermectin as a … [+3960 chars]"
        },
        {
          "source": {
            "id": "the-jerusalem-post",
            "name": "The Jerusalem Post"
          },
          "author": "By  MICHAEL STARR,  TAL SPUNGIN",
          "title": "Border policeman dies from Gaza riot shooting injury - The Jerusalem Post",
          "description": "St.-Sgt. Barel Shmueli was shot by a Gazan gunman during border riots, and despite multiple surgeries to save his life, he succumbed to the injuries.",
          "url": "https://www.jpost.com/israel-news/border-policeman-dies-from-gaza-riot-shooting-injury-677482",
          "urlToImage": "https://images.jpost.com/image/upload/f_auto,fl_lossy/t_JD_ArticleMainImageFaceDetect/481889",
          "publishedAt": "2021-08-30T13:45:00Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Erin MacLeod",
          "title": "Lee ‘Scratch’ Perry: 10 of his greatest recordings - The Guardian",
          "description": "From Bob Marley to the Congos, Junior Murvin and his own outstanding work on the mic, we celebrate the work of a man who seemed to dissolve time",
          "url": "https://amp.theguardian.com/music/2021/aug/30/lee-scratch-perry-10-of-his-greatest-recordings",
          "urlToImage": null,
          "publishedAt": "2021-08-30T13:42:00Z",
          "content": "Lee 'Scratch' PerryFrom Bob Marley to the Congos, Junior Murvin and his own outstanding work on the mic, we celebrate the work of a man who seemed to dissolve time\r\nMon 30 Aug 2021 13.52 BST\r\nWhen I … [+7074 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The A.V. Club"
          },
          "author": "Tatiana Tenreyro",
          "title": "Joe isn't happy he has a son in You season 3 teaser - The A.V. Club",
          "description": "You season 3 will kill our weekend plans on October 15",
          "url": "https://www.avclub.com/joe-isnt-happy-he-has-a-son-in-you-season-3-teaser-1847293814",
          "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/b6310939e1714e9d2d958cd87315d287.jpg",
          "publishedAt": "2021-08-30T13:35:00Z",
          "content": "When we last saw Yous friendly neighborhood serial killer Joe, he found love with Love, who has as much of a murderous streak as him. The season 2 finale featured the happy couple settling into a new… [+1354 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CNBC"
          },
          "author": "Jessica Bursztynsky",
          "title": "Shares of Globalstar soar 40% on rumor iPhone 13 will use satellites directly - CNBC",
          "description": "Shares of Globalstar, a satellite services provider, surged following a report that the newest iPhone will have the ability to utilize satellite communications.",
          "url": "https://www.cnbc.com/2021/08/30/iphone-13-rumored-to-have-satellite-phone-connectivity.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/106890411-1622469214911-gettyimages-1233110710-BC_Apple_7737.jpeg?v=1624273142",
          "publishedAt": "2021-08-30T13:30:09Z",
          "content": "Shares of Globalstar, a satellite services provider, soared more than 40% Monday following a report that the next iPhone will have the ability to utilize satellite communications.\r\nTFI Securities ana… [+897 chars]"
        },
        {
          "source": {
            "id": "fox-news",
            "name": "Fox News"
          },
          "author": "Tyler McCarthy",
          "title": "Celebrities pay tribute to Ed Asner following news of his death - Fox News",
          "description": "Celebrities were quick to take to social media to celebrate the life and career of late television icon Ed Asner.",
          "url": "https://www.foxnews.com/entertainment/celebrities-pay-tribute-ed-asner-death",
          "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/08/Ed-Asner-Getty.jpg",
          "publishedAt": "2021-08-30T13:20:37Z",
          "content": "Celebrities were quick to take to social media to celebrate the life and career of late television icon Ed Asner. \r\nThe actors death was announced through his official Twitter account Sunday, which n… [+5187 chars]"
        },
        {
          "source": {
            "id": "al-jazeera-english",
            "name": "Al Jazeera English"
          },
          "author": "Anna Davies",
          "title": "What is Theranos founder Elizabeth Holmes on trial for? - Al Jazeera English",
          "description": "Five years after her fall from grace, Theranos’s Elizabeth Holmes is getting her day in US court.",
          "url": "https://www.aljazeera.com/economy/2021/8/30/what-is-theranos-founder-elizabeth-holmes-on-trial-for",
          "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2021/08/240846792.jpg?resize=1200%2C630",
          "publishedAt": "2021-08-30T12:49:55Z",
          "content": "United States prosecutors are out for blood or, more accurately, 20 years of jail time and a nearly $3m fine  for Elizabeth Holmes, the disgraced former CEO of Theranos, a once-glitzy $9bn tech start… [+7097 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NPR"
          },
          "author": "Scott Neuman",
          "title": "Rockets Hit Near Kabul Airport A Day Before The Deadline For The Exit Of U.S. Forces - NPR",
          "description": "Another militant attack involving several rockets also occurred as U.S. cargo jets continued operations to evacuate people desperate to escape from Afghanistan now controlled by the hard-line Taliban.",
          "url": "https://www.npr.org/2021/08/30/1032367184/rockets-kabul-airport-deadline-us-troops-bomb",
          "urlToImage": "https://media.npr.org/assets/img/2021/08/30/gettyimages-1234955568_wide-0f6ab2a0d35be42d6753fab3bfff2a006d3481f4.jpg?s=1400",
          "publishedAt": "2021-08-30T12:14:27Z",
          "content": "A view from the scene after rockets were fired at the Afghan capital Kabul's Hamid Karzai International Airport on Monday. Casualties are feared, but no immediate details were available.\r\nHaroon Saba… [+6115 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "9to5google.com"
          },
          "author": null,
          "title": "Here’s how many of our readers said they’ll buy a charger with the Pixel 6 - 9to5Google",
          "description": "We asked if you will be buying a charger with the upcoming Pixel 6 or 6 Pro after Google confirmed the accessory won't be in the box.",
          "url": "https://9to5google.com/2021/08/30/heres-how-many-of-our-readers-said-theyll-buy-a-charger-with-the-pixel-6/",
          "urlToImage": "https://i2.wp.com/9to5google.com/wp-content/uploads/sites/4/2018/11/pixel_charger_1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
          "publishedAt": "2021-08-30T12:00:00Z",
          "content": "The lack of an in-the-box charger means that if you want access to faster charging methods with the upcoming Pixel 6 or 6 Pro, then you’ll have to stump up extra cash to buy one. To our surprise, the… [+4064 chars]"
        },
        {
          "source": {
            "id": "fox-news",
            "name": "Fox News"
          },
          "author": "Ryan Gaydos",
          "title": "Jake Paul, Tyron Woodley take issue with judges' scorecards during bout - Fox News",
          "description": "Jake Paul and Tyron Woodley agreed on one thing Sunday night after their fight – the judges were off.",
          "url": "https://www.foxnews.com/sports/jake-paul-tyron-woodley-judges-scorecards",
          "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/08/Jake-Paul-GETTY.jpg",
          "publishedAt": "2021-08-30T11:59:55Z",
          "content": "Jake Paul and Tyron Woodley agreed on one thing Sunday night after their fight the judges were off.\r\nPaul and Woodley both criticized the judges in the split decision. Paul was awarded the victory wh… [+1344 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "PhoneArena"
          },
          "author": "Milen Yanachkov",
          "title": "Apple Watch Series 7 new design revealed in stunning renders - PhoneArena",
          "description": "The Apple Watch Series 7 may introduce the biggest design change in the wearable’s 6-year history.",
          "url": "https://www.phonearena.com/news/apple-watch-series-7-new-design-revealed-in-stunning-renders_id134659",
          "urlToImage": "https://m-cdn.phonearena.com/images/article/134659-wide-two_1200/Apple-Watch-Series-7-new-design-revealed-in-stunning-renders.jpg",
          "publishedAt": "2021-08-30T11:51:56Z",
          "content": "The Apple Watch Series 7 may introduce the biggest design change in the wearables 6-year history. Apples smartwatch has hasnt really had a proper redesign yet, leaving aside the slightly bigger displ… [+3684 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "WDSU New Orleans"
          },
          "author": "WDSU Digital Team",
          "title": "Ida weakens to Tropical Storm as it moves over Mississippi - WDSU New Orleans",
          "description": "Ida has weakened to a tropical storm as it moves over southwestern Mississippi.",
          "url": "https://www.wdsu.com/article/hurricane-ida-louisiana-damage/37429203",
          "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/gettyimages-1234950015.jpg?crop=1.00xw:0.846xh;0,0&resize=1200:*",
          "publishedAt": "2021-08-30T11:41:00Z",
          "content": "Ida has weakened to a tropical storm as it moves over southwestern Mississippi. \r\nOn Tuesday, Ida is expected to move across the Tennessee Valley. Hurricane Ida made landfall Sunday at 11:55 a.m. in … [+5529 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "MarketWatch"
          },
          "author": "Barbara Kollmeyer",
          "title": "Here's why this billionaire investor predicts cryptocurrencies will ‘go to zero’ - MarketWatch",
          "description": "Critical information for the U.S. trading day",
          "url": "https://www.marketwatch.com/story/heres-why-this-billionaire-investor-predicts-cryptocurrencies-will-go-to-zero-11630323430",
          "urlToImage": "https://images.mktw.net/im-393050/social",
          "publishedAt": "2021-08-30T11:36:00Z",
          "content": "After last weeks dovish Jackson Hole message from Federal Reserve Chairman Jerome Powell, stocks look set to hover at record levels on Monday.The Fed chief indicated a gradual easing of support, and … [+4255 chars]"
        },
        {
          "source": {
            "id": "usa-today",
            "name": "USA Today"
          },
          "author": "Mike Masala",
          "title": "Winners and losers from the Patriots' preseason win vs the Giants - Patriots Wire",
          "description": "The Patriots finished their preseason with a perfect 3-0 record.",
          "url": "https://patriotswire.usatoday.com/lists/winners-and-losers-from-the-patriots-preseason-win-vs-the-giants/",
          "urlToImage": "https://patriotswire.usatoday.com/wp-content/uploads/sites/71/2021/08/33e3c161790e4294aa3815179592ac74.jpg?w=1024&h=576&crop=1",
          "publishedAt": "2021-08-30T11:21:00Z",
          "content": "Jones came in after Cam Newton was unable to get much going in his drives, although it wasn’t completely his fault. The rookie quarterback led the backups against the Giants’ starting defense and eve… [+680 chars]"
        },
        {
          "source": {
            "id": "engadget",
            "name": "Engadget"
          },
          "author": "https://www.engadget.com/about/editors/mat-smith",
          "title": "The Morning After: Our verdict on Samsung’s Galaxy Z Fold 3 - Engadget",
          "description": "Today’s headlines:\nSony's revised PS5 model has a smaller, lighter heatsink, Apple Watch Series 7 may have larger screens and Google reportedly offered Netflix a special discount on Play Store fees..",
          "url": "https://www.engadget.com/the-morning-after-our-verdict-on-samsungs-galaxy-z-fold-3-111536860.html",
          "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-08/77e451c0-0751-11ec-b5e9-369516f4fa4e",
          "publishedAt": "2021-08-30T11:15:00Z",
          "content": "Well get into Samsungs bigger foldable below, but first lets talk about a new, kind of, PS5. You might have struggled to get a PS5, though anecdotal evidence suggests a lot of us have been able to fi… [+3733 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CNBC"
          },
          "author": "Natasha Turak",
          "title": "Treasury yields fall slightly as investors await key jobs report - CNBC",
          "description": "Bonds yields were mixed but little moved on Monday, as investors look ahead to Friday's all-important jobs report.",
          "url": "https://www.cnbc.com/2021/08/30/treasury-yields-tick-lower-as-investors-await-key-jobs-report-.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/103588820-GettyImages-94899709.jpg?v=1616058935",
          "publishedAt": "2021-08-30T11:05:36Z",
          "content": "Bonds yields moved mildly lower on Monday as investors look ahead to Friday's all-important jobs report.\r\nThe yield on the benchmark 10-year Treasury note ticked slightly downward to 1.299% in early … [+2009 chars]"
        },
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "Daniel Dale",
          "title": "Fact check: Conservative tweeters falsely claim Biden didn't show up at Dover to honor troops' remains - CNN",
          "description": "On Saturday night, an entirely false claim about President Joe Biden went viral among conservatives on Twitter.",
          "url": "https://www.cnn.com/2021/08/30/politics/fact-check-biden-dover-afghanistan-kabul/index.html",
          "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210829123755-bpt101-biden-afghanistan-082921-super-tease.jpg",
          "publishedAt": "2021-08-30T11:01:00Z",
          "content": "Washington (CNN)On Saturday night, an entirely false claim about President Joe Biden went viral among conservatives on Twitter.\r\n\"Our heroes were returned to American soil and Dover AFB today. Nobody… [+4380 chars]"
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": null,
          "title": "'It was just terrifying' | WWL's Meg Farris on Hurricane Ida - WWLTV",
          "description": null,
          "url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9bmxfem9YMUdUV0nSAQA?oc=5",
          "urlToImage": null,
          "publishedAt": "2021-08-30T10:37:54Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "NOLA.com"
          },
          "author": "JEFF ADELSON | Staff writer",
          "title": "How long will power be out in metro New Orleans? Entergy says it will assess damage Monday - NOLA.com",
          "description": "A massive tower collapsed into the Mississippi River near Avondale during the storm.",
          "url": "https://www.nola.com/news/hurricane/article_dd8af4fe-095c-11ec-95eb-c70a067c2932.html",
          "urlToImage": "https://bloximages.newyork1.vip.townnews.com/nola.com/content/tncms/assets/v3/editorial/d/6e/d6e8f72a-0972-11ec-8960-f3506ebd775e/612ca1f8936f6.image.jpg?resize=919%2C630",
          "publishedAt": "2021-08-30T10:35:00Z",
          "content": "It will likely take days to determine the extent of damage to Entergy's power grid in metro New Orleans and far longer to restore electrical transmission to the region, company executives said early … [+3432 chars]"
        },
        {
          "source": {
            "id": "associated-press",
            "name": "Associated Press"
          },
          "author": "Samuel Petrequin",
          "title": "EU to recommend reinstating restrictions on US travelers - Associated Press",
          "description": "BRUSSELS (AP) — The European Union plans to recommend that its 27 nations reinstate restrictions on tourists from the U.S. because of rising coronavirus infection levels there, EU diplomats said Monday.",
          "url": "https://apnews.com/article/lifestyle-europe-business-health-travel-9c0f10f0af7e4d7fab63d6d8d4ed844c",
          "urlToImage": "https://storage.googleapis.com/afs-prod/media/f01ffe9aab9048b895b4fc3be42781e2/3000.jpeg",
          "publishedAt": "2021-08-30T10:00:03Z",
          "content": "BRUSSELS (AP) The European Union plans to recommend that its 27 nations reinstate restrictions on tourists from the U.S. because of rising coronavirus infection levels there, EU diplomats said Monday… [+1649 chars]"
        }
      ]
  },
  mutations: {
    setTitle: (state, payload) => {
        const { title, url } = payload
        const article = state.articles.find(p => p.url === url)
        article.title = title
      }
  },
  actions: {
  },
  modules: {
  }
})
