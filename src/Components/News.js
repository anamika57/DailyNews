import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    {
      newsid: 1,
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Ashley Abramson",
      title:
        "7 winning dietary supplements for sleep, bone health and more - The Washington Post",
      description:
        "Claims for many supplements go far beyond what has been proved, but some may in fact help help you fend off illness, stay strong and even look good.",
      url: "https://www.washingtonpost.com/wellness/2024/10/28/calcium-b12-vitamind-melatonin-collagen-fishoil-magnesium/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/WCD5WEVKLVATHOHXATXMGXHU2U.jpg&w=1440",
      publishedAt: "2024-10-28T18:08:48Z",
      content:
        "Consumer Reports has no financial relationship with any advertisers on this site.\r\nMelatonin to help you sleep and Prevagen to keep you sharp. Fish oil for your heart and probiotics for your gut. In … [+14607 chars]",
    },
    {
      newsid: 2,
      source: {
        id: "espn",
        name: "ESPN",
      },
      author: null,
      title: "Chiefs bolster pass rush, trade for Patriots' Uche - ESPN",
      description:
        "The Chiefs acquired pass rusher Joshua Uche in a trade with the Patriots on Monday.",
      url: "https://www.espn.com/nfl/story/_/id/42054249/source-chiefs-bolster-pass-rush-trade-patriots-josh-uche",
      urlToImage:
        "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1028%2Fr1407121_1296x729_16%2D9.jpg",
      publishedAt: "2024-10-28T18:04:00Z",
      content:
        "Oct 28, 2024, 01:04 PM ET\r\nThe Kansas City Chiefs acquired pass rusher Joshua Uche in a trade with the New England Patriots, coach Andy Reid confirmed Monday.\r\nThe Patriots received a 2026 sixth-roun… [+1244 chars]",
    },
    {
      newsid: 3,
      source: {
        id: "the-hill",
        name: "The Hill",
      },
      author: "Ella Lee",
      title:
        "‘Bob’s Burgers’ actor sentenced to 1 year in prison for Jan. 6 role - The Hill",
      description:
        "An actor known for roles in the animated series “Bob’s Burgers” and “Arrested Development” was sentenced Monday to a year and one day in prison for his connection with the Jan. 6, 2021, Capitol attack. Jay Johnston, who voiced the role of Jimmy Pesto in “Bob’…",
      url: "https://thehill.com/regulation/court-battles/4957315-actor-sentenced-prison-capitol-riot/",
      urlToImage:
        "https://thehill.com/wp-content/uploads/sites/2/2023/06/JayJohnstonGettyNeilson-Barnard.jpg?w=1280",
      publishedAt: "2024-10-28T17:44:40Z",
      content:
        "An actor known for roles in the animated series Bobs Burgers and Arrested Development was sentenced Monday to a year and one day in prison for his connection with the Jan. 6, 2021, Capitol attack.\r\nJ… [+4276 chars]",
    },
    {
      newsid: 4,
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: "Phil Stewart, Andrew Gray",
      title:
        "No new limits on Ukraine's use of US arms if North Korea joins fight, Pentagon says - Reuters",
      description:
        "The Pentagon estimates 10,000 North Korean troops have been deployed to eastern Russia.",
      url: "https://www.reuters.com/world/europe/nato-chief-says-he-can-confirm-north-korean-troops-are-russias-kursk-2024-10-28/",
      urlToImage:
        "https://www.reuters.com/resizer/v2/6Y43M65HWVPKVD67DKMQ3ETROE.jpg?auth=23abf94b49c4d3732295e135003b1bde95cfaee4e3736bec1a31d3b378ecd900&height=1005&width=1920&quality=80&smart=true",
      publishedAt: "2024-10-28T17:43:51Z",
      content: null,
    },
    {
      newsid: 5,
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Marshall Cohen",
      title:
        "Philadelphia DA sues Elon Musk and his super PAC over $1M sweepstakes - CNN",
      description:
        "Philadelphia’s district attorney asked a state judge on Monday to shut down tech billionaire Elon Musk’s controversial $1 million giveaway to registered voters, calling it an “illegal lottery scheme.”",
      url: "https://www.cnn.com/2024/10/28/politics/elon-musk-philadelphia-lawsuit/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/c-gettyimages-2178881713.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2024-10-28T17:38:00Z",
      content:
        "Philadelphias district attorney asked a state judge on Monday to shut down tech billionaire Elon Musks controversial $1 million giveaway to registered voters, calling it an illegal lottery scheme.\r\nP… [+2476 chars]",
    },
    {
      source: {
        newsid: 6,
        id: null,
        name: "CBS Sports",
      },
      author: "Jonathan Johnson",
      title:
        "Watch 2024 Ballon d'Or live: Updates, results, winners as Vini Jr. drama unfolds and star skips out on show - CBS Sports",
      description:
        "The latest from Paris as soccer royalty awaits new men's and women's winners",
      url: "https://www.cbssports.com/soccer/news/watch-2024-ballon-dor-live-updates-results-winners-as-vini-jr-drama-unfolds-and-star-skips-out-on-show/live/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2024/10/28/2021ce78-50e7-4a76-83be-e37f7348b543/thumbnail/1200x675/ae278bbd0ab1986a0ddbecc4b014a4e2/untitled-design-23.png",
      publishedAt: "2024-10-28T17:25:25Z",
      content:
        "The world's best men's and women's soccer players will gather in Paris at Theatre du Chatelet on Monday for the 2024 Ballon d'Or awards ceremony. It is the 68th edition of the hallowed gala event whi… [+1415 chars]",
    },
    {
      newsid: 7,
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Brian Heater",
      title:
        "Apple updates iMac with M4 Chip, 16GB RAM starting at $1,299 - TechCrunch",
      description:
        "Apple kicked off “Mac week” by unveiling a refresh to its perennial favorite all-in-one, the iMac. The big news here is the addition of the newish M4",
      url: "https://techcrunch.com/2024/10/28/apple-updates-imac-with-m4-chip-16gb-ram-starting-at-1299/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2024/10/Apple-iMac-M4-hero.jpg?resize=1200,675",
      publishedAt: "2024-10-28T17:13:34Z",
      content:
        "Apple kicked off Mac week by unveiling a refresh to its perennial favorite all-in-one, the iMac. The big news here is the addition of the newish M4 chip, which the company says is 2x more powerful th… [+1019 chars]",
    },
    {
      newsid: 8,
      source: {
        id: null,
        name: "TMZ",
      },
      author: "TMZ Staff",
      title:
        "Jennifer Aniston Memorializes Matthew Perry on 1-Year Death Anniversary - TMZ",
      description:
        "Jennifer Aniston is reflecting on her grief in the year since Matthew Perry died ... posting a poignant tribute to her late friend on social media.",
      url: "https://www.tmz.com/2024/10/28/jennifer-aniston-remembers-matthew-perry-one-year-death-anniversary/",
      urlToImage:
        "https://imagez.tmz.com/image/b0/16by9/2024/10/28/b032bb4e762947de88699f485451cc28_xl.jpg",
      publishedAt: "2024-10-28T16:44:12Z",
      content:
        'Jennifer Aniston is reflecting on her grief in the year since Matthew Perry died ... posting a poignant tribute to her late friend on social media.\r\nThe "Friends" star posted on Instagram Monday to c… [+1388 chars]',
    },
    {
      newsid: 9,
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "DARLENE SUPERVILLE",
      title:
        "Harris says crude and racist rhetoric at Trump’s event fans the fuel of division - The Associated Press",
      description:
        "Vice President Kamala Harris says none of the racist and crude rhetoric that was featured at Donald Trump's Madison Square Garden rally will support Americans' dreams and aspirations. She says that type of language is just “fanning the fuel of trying to divid…",
      url: "https://apnews.com/article/harris-trump-vitriol-racist-insults-3b653c0547eec377f774f1bed970a561",
      urlToImage:
        "https://dims.apnews.com/dims4/default/f7c33de/2147483647/strip/true/crop/7739x4353+0+403/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fda%2F7e%2F88063fce2005e4c610dce3bb7077%2Fc38b6a7be21e456594a8574f09ee971e",
      publishedAt: "2024-10-28T16:38:00Z",
      content:
        "WASHINGTON (AP) Vice President Kamala Harris said Monday that none of the vitriol at Donald Trumps Madison Square Garden rally will support the dreams and aspirations of the American people but inste… [+1460 chars]",
    },
    {
      newsid: 10,
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Alexandra Canal",
      title:
        "DJT stock skyrockets following Donald Trump's inflammatory MSG rally as election looms - Yahoo Finance",
      description:
        "Trump Media & Technology Group stock extended its five-week rally on Monday as investors bet on the former president winning the US election.",
      url: "https://finance.yahoo.com/news/djt-stock-skyrockets-following-donald-trumps-inflammatory-msg-rally-as-election-looms-163305786.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/1Z6Il9rrXq4_jDSPoYNzgQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDI-/https://s.yimg.com/os/creatr-uploaded-images/2024-10/85d5e400-9534-11ef-bdbf-64f1b2dd84c9",
      publishedAt: "2024-10-28T16:33:05Z",
      content:
        "Trump Media &amp; Technology Group stock (DJT) extended its five-week surge on Monday, rising as much as 20% following Donald Trump's highly criticized rally at Manhattan's Madison Square Garden (MSG… [+4987 chars]",
    },

    {
      newsid: 11,
      source: {
        id: null,
        name: "Neurosciencenews.com",
      },
      author: "Neuroscience News",
      title:
        "Prenatal Cannabis Use Linked to Child Aggression and Cognitive Deficits - Neuroscience News",
      description:
        "Prenatal exposure to cannabis can negatively impact children’s thinking and behavioral skills, including impulse control, attention, and aggression, which are key for academic and social success.",
      url: "https://neurosciencenews.com/cud-pregnancy-aggression-neurodevelopment-27950/",
      urlToImage:
        "https://neurosciencenews.com/files/2024/10/cud-pregnancy-child-behavior-neuroscience.jpg",
      publishedAt: "2024-10-28T16:16:34Z",
      content:
        "Summary: New research shows that prenatal exposure to cannabis can negatively impact childrens thinking and behavioral skills, including impulse control, attention, and aggression, which are key for … [+6419 chars]",
    },
    {
      newsid: 12,
      source: {
        id: null,
        name: "Hollywood Reporter",
      },
      author: "Rick Porter",
      title:
        "Jon Stewart Extends ‘Daily Show’ Run Through 2025 - Hollywood Reporter",
      description:
        "He'll continue to host the Comedy Central show once a week and serve as an executive producer.",
      url: "http://www.hollywoodreporter.com/tv/tv-news/jon-stewart-daily-show-extension-through-2025-1236046622/",
      urlToImage:
        "https://www.hollywoodreporter.com/wp-content/uploads/2024/10/DESK_S29E105_100724_MW_0005-1.jpg?w=1296&h=730&crop=1",
      publishedAt: "2024-10-28T16:15:29Z",
      content:
        "Jon Stewart isn’t quite ready to let go of his weekly Daily Show gig.\r\nComedy Central announced Monday that Stewart has signed an extension that will keep him as a once-a-week host and full-time exec… [+1856 chars]",
    },
    {
      newsid: 13,
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Emma Roth",
      title:
        "Google Pixel 10 and 11 leak reveals new AI tools and a big camera update - The Verge",
      description:
        "The Google Pixel 10 could come with a Tensor G5 chip that powers new AI features, such as an AI video editing tool, according to a report from Android Authority.",
      url: "https://www.theverge.com/2024/10/28/24281679/google-pixel-10-11-leak-ai-features-rumors",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/-S2pHfRPguLTSHhb3cm39MijU-o=/0x0:2000x1333/1200x628/filters:focal(1000x667:1001x668)/cdn.vox-cdn.com/uploads/chorus_asset/file/25596783/DSC08161.jpg",
      publishedAt: "2024-10-28T16:11:31Z",
      content:
        "Google Pixel 10 and 11 leak reveals new AI tools and a big camera update\r\nGoogle Pixel 10 and 11 leak reveals new AI tools and a big camera update\r\n / A rumored feature coming to the Pixel 11 could m… [+2434 chars]",
    },
    {
      newsid: 14,
      source: {
        id: null,
        name: "Financial Times",
      },
      author: null,
      title:
        "Boeing launches $19bn share sale to bolster finances and avoid downgrade - Financial Times",
      description:
        "Aircraft maker seeks to relieve pressure on its balance sheet, which has been exacerbated by a labour strike",
      url: "https://www.ft.com/content/f96ba803-5d80-45b1-8057-dd6924805a6b",
      urlToImage:
        "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F9a1d9a59-54d4-48db-984d-d784e3dcc130.jpg?source=next-barrier-page",
      publishedAt: "2024-10-28T16:06:46Z",
      content:
        "Get complete digital access\r\n$75 per month\r\nComplete digital access to quality FT journalism with expert analysis from industry leaders. Pay a year upfront and save 20%.",
    },
    {
      newsid: 15,
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "The Wall Street Journal",
      title:
        "iOS 18.1 Is Here: Apple Intelligence, New Siri Look, AirPod Hearing Aids and More - The Wall Street Journal",
      description: null,
      url: "https://www.wsj.com/tech/personal-tech/ios-18-1-released-apple-intelligence-ai-features-a4b983fc",
      urlToImage: null,
      publishedAt: "2024-10-28T16:06:00Z",
      content: null,
    },
    {
      newsid: 16,
      source: {
        id: null,
        name: "[Removed]",
      },
      author: null,
      title: "[Removed]",
      description: "[Removed]",
      url: "https://removed.com",
      urlToImage: null,
      publishedAt: "2024-10-28T16:03:16Z",
      content: "[Removed]",
    },
    {
      newsid: 17,
      source: {
        id: null,
        name: "New York Post",
      },
      author: "Matt Levy",
      title:
        "Yankees World Series ticket prices are dropping insanely fast - New York Post ",
      description: "Some have gone down more than $500 in just four days.",
      url: "https://nypost.com/2024/10/28/sports/new-york-yankees-world-series-ticket-prices-dropping-where-to-buy/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2024/10/Juan-Soto_f8281c.jpg?quality=75&strip=all&w=1024",
      publishedAt: "2024-10-28T15:17:16Z",
      content:
        "Vivid Seats is the New York Post's official ticketing partner. We may receive revenue from this partnership for sharing this content and/or when you make a purchase. Featured pricing is subject to ch… [+4218 chars]",
    },
    {
      newsid: 18,
      source: {
        id: null,
        name: "UploadVR",
      },
      author: "Ian Hamilton",
      title:
        "Alien: Rogue Incursion Hands-On: Survios Aims For Aliens - UploadVR",
      description:
        "Alien: Rogue Incursion aims for the vibe of Aliens with inspiration from Dead Space.",
      url: "https://www.uploadvr.com/alien-rogue-incursion-hands-on/",
      urlToImage:
        "https://www.uploadvr.com/content/images/size/w1200/2024/10/Xeno-Screenshot-3-V2-.png",
      publishedAt: "2024-10-28T15:03:30Z",
      content:
        "TQ Jefferson helped me through a slice of an early chapter in Alien: Rogue Incursion on PC VR.\r\nI trusted the creative director at Survios leading the charge for Rogue Incursion, but at the start of … [+4533 chars]",
    },
    {
      newsid: 19,
      source: {
        id: null,
        name: "National Institutes of Health",
      },
      author: null,
      title:
        "Bovine H5N1 influenza from infected worker transmissible and lethal in animal models - National Institutes of Health (NIH) (.gov)",
      description: "Some antiviral drugs highly effective against bovine H5N1",
      url: "https://www.nih.gov/news-events/news-releases/bovine-h5n1-influenza-infected-worker-transmissible-lethal-animal-models",
      urlToImage:
        "https://www.nih.gov/sites/default/files/news-events/news-releases/2024/53743719654_f684351cf8_k.jpg",
      publishedAt: "2024-10-28T15:01:12Z",
      content: null,
    },
  ];
  constructor() {
    console.log("Hello i'm constructor");
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    console.log("cmd");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=77373c59e78d41bdbd2d7c39afb32f87&page=1`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }

  handlePreviousClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=77373c59e78d41bdbd2d7c39afb32f87&page=${this.setState(
      {
        page: this.state.page - 1,
      }
    )}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
    });
  };

  handleNextClick = async () => {
    console.log("Next");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=77373c59e78d41bdbd2d7c39afb32f87&page=${this.setState(
      {
        page: this.state.page + 1,
      }
    )}`;
    let data = await fetch(url);

    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, page: this.state.page + 1 });
  };
  render() {
    console.log("render");
    return (
      <div className="container my-3 ">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row ">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 " key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>

        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            class="btn btn-dark "
            onClick={this.handlePreviousClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            type="button"
            class="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;{" "}
          </button>
        </div>
      </div>
    );
  }
}
