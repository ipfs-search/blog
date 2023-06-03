---
layout: single
author: Frido Emans
title:  "Bump in the road"
excerpt: "We are shutting down ipfs-search.com. For good? We hope not. A retrospective and a look forward. "
header :
  teaser: "/assets/images/2023-06-02-bump-in-the-road/Bumpy_road.jpg"
  overlay_image: "/assets/images/2023-06-02-bump-in-the-road/Bumpy_road.jpg"
tags :
  - IPFS
  - Filecoin
---

Alas. We are shutting down ipfs-search, with a full-stop on june the 7th. For now. The upkeep is too much to carry and we have not found the necessary support yet. We don’t know when we will go live again, there is no certainty at this point. Only reflection with a sense of pride of what we built and achieved over the years, and hope for a relaunch. 

### Our journey

[ipfs-search.com](http://Ipfs-search.com) started in 2016 as an idea of Mathijs to use IPFS to index his ebooks collection using IPFS. This quickly grew with a crawler that “sniffed” the updates of IPFS, collecting what was being shared on the entire network by everybody. Add metadata-extraction, a search API and a simple frontend, ipfs-search was born. 

![Untitled](/assets/images/2023-06-02-bump-in-the-road/2023-06-02-First-frontend.png)

Later, Aad from [RedPencil.io](http://RedPencil.io) joined to help with frontend improvements, hosting, and fundraising, and over the years, [ipfs-search.com](http://Ipfs-search.com) grew to a usable search engine for IPFS, that took a stance against collecting users’ personal data or promoting search results based on advertisements. In fact, there are no advertisements and no user-targeted biases in the search results. We store nothing about our users!

At the end, the index grew with a whopping 1 million CIDs per day, and with help of an [NLNet/NGI0 grant](https://nlnet.nl/NGI0/) we created the third iteration of the frontend, completely equipped with search filters, well-designed layout, mobile-friendly, fileviewers for almost anything including e-books, images, videos, and even a music player with playlists. 

We received a [Filecoin Dev Grant](https://github.com/filecoin-project/devgrants/blob/master/open-grant-proposals/ipfs-search-scale-out.md) to make the search engine scaleable for a lot of user traffic, for which we had to overcome several [bumps in the road](https://blog.ipfs-search.com/challenge-accepted/) and finally succeeded. The search engine is now ready for next stages, and gives a great way to access content on ipfs with an unparalleled index of data collected over 7 years. 

![Untitled](/assets/images/2023-06-02-bump-in-the-road/2023-06-02-Newest-frontend.png)

There are some problems too; while we had creeped in a lot of awesome technical features, the search is not biased and therefore does not really target any user segments. We had no marketing department to gather more users and unmoderated access to the millions of random files shared on IPFS do not generate viral adoption of the search engine. Without advertisement or user targeting as a business model there was no immediate way to monetize on the frontend as a product at all, let alone enough to work on usability features. We did not want to sell out on our principles and more funding appeared a lot harder to find than expected. The cryptowinter and the global economic turmoil did not help in that regard. In the meantime, the costs in servers and manhours are piling up.

### Hope for the future

So, as we are running into the red, we have decided to shut down, albeit with great regret, until we find a way to make this sustainable. There are a lot of people expressing their support and even helping to fund us through [OpenCollective](https://opencollective.com/ipfs-search), and we truly hate to feel like we are letting them down. Fortunately, there are some beacons of hope on the horizon!

First of all, we have found a new partner to take care of hosting ipfs-search.com, at [DCent](https://www.notion.so/a6ef0ea4ea404079a2e4e2d051d95e6d?pvs=21). They have offered generously to grant their hardware to us while we find new support, and we hope we can migrate there soon. Besides this, we are exploring several options of funding, for which we may have to develop novel ways to apply the technology or invent new features that make it attractive for future users. 

### Epilogue

We hit a bump in the road, and have to shut down. But we hope it does not affect our users and supporters for too long, and we are making good plans to restart. We are looking forward to the next phase of this project and are proud of the efforts that have brought us so far, so keep an eye on our feeds. And if you have any idea or questions on how to help, contact us at info@ipfs-search.org