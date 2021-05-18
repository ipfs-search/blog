---
layout: single
title:  "Discover new content on the IPFS using ipfs-search.com --- a quick guide using funny cat videos"
excerpt: "An quick guide on how to use ipfs-search.com to look for specific content on IPFS, such as cat videos."
header :
  teaser: "/assets/images/2021-04-18-searching-the-ipfs/cats-vs-laser.png"
  overlay_image: "/assets/images/default_overlay.png"
 # overlay_filter: rgba(0, 0, 0, 0.7)4
# header:
#   teaser: "/assets/images/2021-04-18-towards-a-new-frontend/search-screenshot-new-3.jpg"
#   overlay_image: "/assets/images/2021-04-18-towards-a-new-frontend/search-screenshot-new-3.jpg"
#   overlay_filter: rgba(0, 0, 0, 0.7)
tags :
  - guides
---

In this post, we will look at using ipfs-search.com in practice. Ipfs-search.com is a search engine for the Interplantetary File System (IPFS). As regular users of the internet will know, search is a good way to discover new content online. 

**What is the IPFS**

IPFS is the most popular solution for the distributed web. Here, rather than being hosted on web servers, online data is distributed across a peer-to-peer network of computers that act as both clients and servers. 

The IPFS is to the distributed web what the Hypertext Transfer Protocol (HTTP) is to the World Wide Web (WWW). But there are some key differences between the two systems:

* **Content IDs:** Rather than having domain links take you to a location and showing you whatever is kept there, the IPFS works with unique content hashes. These are URIs that points to a specific item, such as a webpage, a video file, etc. 
* **Peer-to-peer hosting:** Since specific items are found via a content hash, it is possible to download it from multiple sources. This makes it possible to distribute hosting over a network of computers. This means that you are not reliant on single web servers. If a server goes down, you can find your item from another using its CID.

**What can you find on the IPFS**
Anything that people chooses to upload. IPFS hosts web pages, text, audio, and video files. For example, the English Wikipedia has been cloned. You can now read all about [Aardvarks](https://gateway.ipfs.io/ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco/wiki/Aardvark.html) on a page hosted on the distributed web.

Finding things hosted on the IPFS is not always easy. Content hashes are not really readable to humans. Luckily, we provide the option to search the IPFS. 

## Searching the IPFS

Using ipfs-search is now really simple. All you have to do is go to our [homepage](https://ipfs-search.com/#/search) and enter some keywords into our search bar. You can also specify what type of file you are looking for in the drop-down menu. In our case, we will enter the word "cats" into the search bar, and specify that we are looking for video files in the drop-down menu.

[![Example search](/assets/images/2021-04-18-searching-the-ipfs/screenshot3.png)](https://ipfs-search.com/#/search)

And *voila* --- we now have access to hours and hours of delightfully cute cats doing all sorts of funny things. 

[![Search results](/assets/images/2021-04-18-searching-the-ipfs/cat-results.png)](https://ipfs-search.com/#/search?kind=video&search=cats)

Click the images below to see the video hosted on IPFS.

[![Cats-vs-laser](/assets/images/2021-04-18-searching-the-ipfs/cats-vs-laser.png)](https://gateway.ipfs.io/ipfs/QmRurq7ZaS21W5vAnYtwqgLtRBBEj4FkhA3PvxDcThqagk?download=false) Cats vs laser

[![Funny-cat](/assets/images/2021-04-18-searching-the-ipfs/funny-cats.png)](https://gateway.ipfs.io/ipfs/QmNMspkJ3NSemYhQupaJTJ9Qn3UHRBq9mJbP2eSJhgur7R?download=false) Cat being silly

[![Fool-cat](/assets/images/2021-04-18-searching-the-ipfs/fool-cat.png)](https://gateway.ipfs.io/ipfs/QmR96KhczkR2fj7fAwB2GNMHwAHQPy8comN9ni56gc8RJq?download=false) Cats playing
