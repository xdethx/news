const news = [

   
        {
            isTop:true,
            category:"yemek",
        author: "Breck Dumas",
        title: "Elon Musk to make Grok chatbot open-source, taking swipe at OpenAI - Fox Business",
        description: "Tech mogul Elon Musk says his artificial intelligence startup, xAI, will make its Grok chatbot open-source this week as he took another swing at ChatGPT creator OpenAI.",
        "url": "https://www.foxbusiness.com/technology/elon-musk-make-grok-chatbot-open-source-taking-swipe-openai",
        urlToImage: "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/07/0/0/2422f7dc-Elon-Musk.jpg?ve=1&tl=1",
        publishedAt: "2024-03-11T19:19:00Z",
        content: "Elon Musk announced Monday that his artificial intelligence startup xAI will make its chatbot, Grok, open-source this week while taking another swing at OpenAI amid his legal battle with the ChatGPT … [+4084 chars]"
        },
        {
            isTop:false,
            category:"yemek",
        author: "MarketWatch",
        title: "How February inflation data could test the stock-market rally - MarketWatch",
        description: null,
        "url": "https://www.marketwatch.com/story/how-february-inflation-data-could-test-the-stock-market-rally-2f8abc93",
        urlToImage: "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/07/0/0/2422f7dc-Elon-Musk.jpg?ve=1&tl=1",
        publishedAt: "2024-03-11T19:15:00Z",
        content: null
        },
        {
            isTop:true,
            category:"yemek",
        author: "Shannon Thaler",
        title: "Snickers denies Biden's SOTU accusation that it has reduced candy bar sizes in 'shrinkflation' - New York Post ",
        description: "President Biden blasted Snickers as an example of “shrinkflation” during his State of the Union address last week — but the candy bar’s manufacturer denied that it has been …",
        "url": "https://nypost.com/2024/03/11/business/snickers-denies-bidens-claim-it-reduced-candy-bar-sizes-in-shrinkflation/",
        urlToImage: "https://nypost.com/wp-content/uploads/sites/2/2024/03/78210127.jpg?quality=75&strip=all&w=1024",
        publishedAt: "2024-03-11T19:04:00Z",
        content: "President Biden blasted Snickers as an example of “shrinkflation” during his State of the Union address last week — but the candy bar’s manufacturer denied that it has been quietly reducing the size … [+4108 chars]"
        },
        {
            isTop:true,
            category:"yemek",
        author: "Daniella Genovese",
        title: "Trader Joe’s tote bags reselling for as much as $500: 'It’s like the Stanley cups all over again' - Fox Business",
        description: "Social media users have likened the craze over the newly released Trader Joe's mini canvas totes to the chaos that erupted around Stanley's limited-edition Quenchers.",
        "url": "https://www.foxbusiness.com/lifestyle/trader-joes-tote-bags-reselling-for-much-500-its-like-stanley-cups-all-over-again",
        urlToImage: "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/07/0/0/Trader-Joes-Cart.jpg?ve=1&tl=1",
        publishedAt: "2024-03-11T19:00:00Z",
        content: "Move over Stanley, the latest craze is now centered around the limited-time mini Trader Joe's tote bags. \r\nA viral TikTok video posted last week shows a surge of shoppers waiting for Trader Joe's sta… [+2115 chars]"
        },
        {
            isTop:true,
            category:"yemek",
        author: "Tyler Pearson",
        title: "London Stock Exchange to accept crypto ETN applications for professional investors - DLNews",
        description: "Regulators in the UK greenlit Bitcoin and Ethereum exchange-traded notes on Monday, as PM Rishi Sunak seeks to make the nation a \"crypto hub.\"",
        "url": "https://www.dlnews.com/articles/markets/london-stock-exchange-to-accept-crypto-etn-applications/",
        urlToImage: "https://www.dlnews.com/resizer/8Zo6QNOwWTpJwfmlDdVGmEcEO9M=/1200x630/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/dlnews/F74V3CTTWZCNPKWEUR45BZZAZE.jpg",
        publishedAt: "2024-03-11T18:58:36Z",
        content: "The London Stock Exchange announced Monday it will accept applications for Bitcoin and Ethereum exchange-traded notes, in a move that sets the stage for a new market segment in the UK.\r\nThe announcem… [+1495 chars]"
        },
        {
            isTop:true,
            category:"yaşam",
        author: "Danny Vena",
        title: "Why Meta Platforms, Taiwan Semiconductor, Advanced Micro Devices, and Other Artificial Intelligence (AI) Stocks Tumbled on Monday - The Motley Fool",
        description: "Disappointing results and legal issues are pressuring the space.",
        "url": "https://www.fool.com/investing/2024/03/11/why-meta-platforms-taiwan-semiconductor-advanced-m/",
        urlToImage: "https://g.foolcdn.com/editorial/images/768945/a-circuit-board-with-ai-cpu-branded-on-the-processor.jpg",
        publishedAt: "2024-03-11T18:53:13Z",
        content: "One of the byproducts of the accelerating adoption of artificial intelligence (AI) has been the investor practice -- for better or for worse -- of viewing AI stocks collectively. In many instances, d… [+5185 chars]"
        },
        {
            isTop:false,
            category:"yaşam",
        author: "mmm",
        title: "Tyson Foods facility in Perry, Iowa closing - KCCI Des Moines",
        description: "The Tyson Foods plant in Perry, the city's largest employer, will close permanently.",
        "url": "https://www.kcci.com/article/tyson-foods-plant-perry-iowa-closing/60166171",
        urlToImage: "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/breaking-for-web-0030-6512fd01cd58f.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
        publishedAt: "2024-03-11T18:50:00Z",
        content: "PERRY, Iowa —A pork plant and major employer in central Iowa is closing.\r\nThe Tyson Foods plant in Perry will close permanently.\r\n\"After careful consideration, we have made the difficult decision to … [+963 chars]"
        },
        {
            isTop:false,
            category:"yaşam",
        author: "Mark Hulbert",
        title: "Nvidia might not be Wall Street’s favorite AI stock anymore - MarketWatch",
        description: "My monthly report on stocks and funds popular among top-performing investment newsletters",
        "url": "https://www.marketwatch.com/story/nvidia-might-not-be-wall-streets-favorite-ai-stock-anymore-511bb86b",
        urlToImage: "https://images.mktw.net/im-44711830/social",
        publishedAt: "2024-03-11T18:19:00Z",
        content: "The bloom is starting to come off of Nvidia Corp.s NVDA rose, though few on Wall Street are willing to say so publicly.\r\nTheres been an unmistakable trend on Wall Street toward more analysts being wi… [+144 chars]"
        },
        {
            isTop:false,
            category:"yaşam",
        author: "Mat Di Salvo",
        title: "Bitcoin ETF Surge Leads Crypto Funds to Record-Breaking $2.7 Billion in Weekly Gains - Decrypt",
        description: "Investors continue to plug cash into spot Bitcoin ETFs and other crypto products, yielding a record-breaking week.",
        "url": "https://decrypt.co/221180/bitcoin-etf-surge-crypto-funds-record-2-7-billion-weekly-gains",
        urlToImage: "https://cdn.decrypt.co/resize/1024/height/512/wp-content/uploads/2021/04/bitcoin-money-laundering-gID_7.jpg",
        publishedAt: "2024-03-11T18:04:25Z",
        content: "Why is Bitcoins price soaring to new highs? Partly because so much cash is flowing into investment products giving people exposure to the asset. And that drove another record week for crypto funds.\r\n… [+1778 chars]"
        },
        {
            isTop:false,
            category:"moda",
        author: "Daniella Genovese",
        title: "Airbnb bans use of all indoor security cameras - Fox Business",
        description: "Airbnb announced Monday that its simplifying its policy on security cameras and other devices in its listings around the world in order to prioritize renter privacy.",
        "url": "https://www.foxbusiness.com/lifestyle/airbnb-bans-use-of-all-indoor-cameras",
        urlToImage: "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/05/0/0/Airbnb.jpg?ve=1&tl=1",
        publishedAt: "2024-03-11T18:03:00Z",
        content: "Airbnb said it's prohibiting the use of indoor security cameras in all of its listings worldwide, regardless of their purpose or location.\r\nIn an effort to simplify its policy on security cameras and… [+2703 chars]"
        },
        {
            isTop:false,
            category:"moda",
        author: "Rita Nazareth",
        title: "Stock Market Today: Dow, S&P Live Updates for March 11 - Bloomberg",
        description: "Wall Street traders found little encouragement to keep pushing the stock market higher at the start of a week that will bring the last inflation figures before the Federal Reserve’s decision.",
        "url": "https://www.bloomberg.com/news/articles/2024-03-10/asian-stocks-to-fall-as-us-cpi-shifts-into-focus-markets-wrap",
        urlToImage: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i6tJqBCHhldw/v0/1200x800.jpg",
        publishedAt: "2024-03-11T17:51:22Z",
        content: "Wall Street traders found little encouragement to keep pushing the stock market higher at the start of a week that will bring the last inflation figures before the Federal Reserves decision.\r\nEquitie… [+328 chars]"
        },
        {
            isTop:false,
            category:"moda",
        author: "Nora Naughton",
        title: "Your car might be secretly recording and sending data to your insurer - Business Insider",
        description: "Your driving habits might not be as private as you think, a report from The New York Times says. Some data is being shared with car insurers.",
        "url": "https://www.businessinsider.com/cars-recording-data-onstar-gm-lexisnexis-insurance-rates-increase-report-2024-3",
        urlToImage: "https://i.insider.com/65ef3ebe90413ab8e1db6e70?width=1200&format=jpeg",
        publishedAt: "2024-03-11T17:38:00Z",
        content: "Your driving habits aren't as private as you think they are, according to a recent report from The New York Times.\r\nInternet-connected vehicles can gather data on driving habits, including hard braki… [+2250 chars]"
        },
        {
            isTop:false,
            category:"moda",
        author: "Britt Ross",
        title: "The 40+ best Amazon deals this week: Save up to 80% on vacuums, bedding, AirPods and more - Yahoo Life",
        description: "Score steep discounts on top brands like Apple, Ninja and Shark.",
        "url": "https://www.yahoo.com/lifestyle/the-40-best-amazon-deals-this-week-save-up-to-80-on-vacuums-bedding-airpods-and-more-173735993.html",
        urlToImage: "https://s.yimg.com/os/creatr-uploaded-images/2024-03/f3c3e6f0-dfb9-11ee-9f7f-e966874da2a3",
        publishedAt: "2024-03-11T17:37:36Z",
        content: "You may have lost an hour of slumber this past weekend thanks to Daylight Savings Time, but have no fear we're here to make sure you don't lose any sleep over missing the myriad of marvelous deals on… [+856 chars]"
        },
        {
            isTop:false,
            category:"moda",
        author: "Reuters",
        title: "Choice Hotels abandons roughly $7 billion takeover bid for Wyndham - Reuters",
        description: null,
        "url": "https://www.reuters.com/markets/deals/choice-ends-hostile-bid-wyndham-hotels-2024-03-11/",
        urlToImage: "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/07/0/0/2422f7dc-Elon-Musk.jpg?ve=1&tl=1",
        publishedAt: "2024-03-11T17:21:00Z",
        content: null
        },
        {
            isTop:false,
            category:"finans",
        author: "Ariel Zilber",
        title: "Elon Musk's charity broke tax laws as donations came up short: report - New York Post ",
        description: "The Musk Foundation, like all charities, are required by law to give away 5% of their assets every year.",
        "url": "https://nypost.com/2024/03/11/business/elon-musks-charity-broke-tax-laws-as-donations-came-up-short-report/",
        urlToImage: "https://nypost.com/wp-content/uploads/sites/2/2024/03/newspress-collage-qx77qxerg-1710165055700.jpg?quality=75&strip=all&1710150698&w=1024",
        publishedAt: "2024-03-11T16:48:00Z",
        content: "Elon Musk’s charity has repeatedly failed to meet the minimum donation threshold as required by tax laws — and could face major penalties from tax authorities as a result, according to a report.\r\nThe… [+3942 chars]"
        },
        {
            isTop:false,
            category:"finans",
        author: "Passant Rabie",
        title: "Watch as World's Largest Plane Releases Hypersonic Vehicle for Its First Powered Test Flight - Gizmodo",
        description: "The test vehicle reached supersonic speeds approaching Mach 5 before landing in the Pacific.",
        "url": "https://gizmodo.com/stratolaunch-first-hypersonic-test-flight-roc-ta-1-1851325099",
        urlToImage: "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/5e292b18b86fa7eb91b4b8c85d6d5f88.gif",
        publishedAt: "2024-03-11T16:40:00Z",
        content: "California startup Stratolaunch completed the first powered flight of its Talon-A hypersonic vehicle as it works to develop a reusable version thats capable of carrying science payloads and flying th… [+2519 chars]"
        },
        {
            isTop:false,
            category:"finans",
        author: "Russ Reed",
        title: "Deadly forklift incident at Logan Airport could've been prevented, OSHA says - WCVB Boston",
        description: "OSHA has issued four citations with more than $46,000 in penalties against the employer of a 51-year-old Massachusetts man who died when a forklift fell on him.",
        "url": "https://www.wcvb.com/article/deadly-forklift-accident-employer-cited-by-osha/60162925",
        urlToImage: "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/deadly-forklift-incident-logan-international-airport-boston-8-29-2023-65ef265272b5e.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
        publishedAt: "2024-03-11T16:36:00Z",
        content: "BOSTON —An Occupational Safety and Health Administration inspection has found that a forklift incident that resulted in the death of a Massachusetts man last summer could have been prevented by the m… [+2099 chars]"
        },
        {
            isTop:false,
            category:"finans",
        author: "Cointelegraph",
        title: "BTC price eyes $73K next as Donald Trump endorses right to use Bitcoin - Cointelegraph",
        description: null,
        "url": "https://cointelegraph.com/news/btc-price-73k-donald-trump-endorses-right-to-use-bitcoin",
        urlToImage: "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/07/0/0/2422f7dc-Elon-Musk.jpg?ve=1&tl=1",
        publishedAt: "2024-03-11T16:17:42Z",
        content: null
        },
        {
            isTop:false,
            category:"finans",
        author: "BARBARA ORTUTAY AP technology writer",
        title: "Most teens report feeling happy or peaceful when they go without smartphones, Pew survey finds - ABC News",
        description: "Nearly three-quarters of U.S. teens say they feel happy or peaceful when they don’t have their phones with them, according to a new report from the Pew Research Center",
        "url": "https://abcnews.go.com/US/wireStory/teens-report-feeling-happy-peaceful-smartphones-pew-survey-108012362",
        urlToImage: "https://i.abcnewsfe.com/a/a056191d-b994-42ae-96b8-afd49f2a0ea3/wirestory_cdf3f26dafec50ccf918787dcf608a59_16x9.jpg?w=1600",
        publishedAt: "2024-03-11T16:14:06Z",
        content: "Nearly three-quarters of U.S. teens say they feel happy or peaceful when they don't have their phones with them, according to a new report from the Pew Research Center. \r\nIn a survey published Monday… [+2505 chars]"
        },
        {
            isTop:false,
        category:"finans",
        author: "Rachelle Akuffo",
        title: "The lessons NYCB needs to learn from the SVB collapse - Yahoo Finance",
        description: "New York Community Bank (NYCB) is under pressure as the bank's shares continue to fall on its fourth-quarter losses and lack of faith in the regional banking...",
        "url": "https://finance.yahoo.com/video/lessons-nycb-needs-learn-svb-160659200.html",
        urlToImage: "https://s.yimg.com/ny/api/res/1.2/ugVh_qmwdJ8m425998p2AA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzQ-/https://s.yimg.com/os/creatr-uploaded-images/2024-03/107688f0-dfc1-11ee-a9cf-8ffd27047836",
        publishedAt: "2024-03-11T16:06:59Z",
        content: "New York Community Bank (NYCB) is under pressure as the bank's shares continue to fall on its fourth-quarter losses and lack of faith in the regional banking system. The one-year anniversary of Silic… [+6865 chars]"
        }
        ]
export default news