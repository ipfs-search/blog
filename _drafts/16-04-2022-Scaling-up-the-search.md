---
layout: single
title:  "Scaling up the search"
author: ZM
excerpt: For the past few months, we have been working on the search architecture to take ipfs-search from beta to web-scale production 
header:
  teaser: "/assets/images/nodes.png"
  overlay_image: "/assets/nodes.png"
  overlay_filter: rgba(0, 0, 0, 0.7)
---

### For the past few months, we have been working on the search architecture to take ipfs-search from beta to web-scale production 

As some of you remember, we have received funding from Filecoin Fundation, 
which is stewarding an ecosystem around filecoin and IPFS, to design a pilot of scaling up our infrastructure. 	
We are successfully following a plan to move step-by-step from one server to a 5 node cluster setup, then to 15 servers, 30 and 50. 
This puts us on the path to the 1000 hits per second; a thousand users every second searching something.
We are now in the middle of the way, running on 30 servers, and we are looking at having 100 servers by the end of the year, and later, 
to grow exponentially. 

<img src="/assets/images/servers.jpg" alt="drawing" width="300" /> <img src="/assets/images/3servers.png" alt="drawing" width="500"/>

Currently, we have capacity of 20 TB, and we are planning to have 60 TB by December. It is a real challenge as typical computer stores 1 TB and copying this 1 TB from one computer to another is about 10 hours. 


<img src="/assets/images/5servers.png" alt="drawing" width="300" /> 

## But let us walk you through what have been going on in our headquarters recently.
	
One of our ways to limit risk margin is to use physical servers instead of, very popular now, cloud servers. 
  After a careful research we have chosen Hetzner hosting, a German company that provides climate neutral servers, which was also important for us. 
  Why exactly we decided to use live servers? We like to keep an eye on what’s going on, be close to the bare metal. 
  That let us track temperature, track delays on individual discs, we know about every hardware failure, 
  every unusual behavior pattern and if we were using virtual server we wouldn’t know all these things. 
	In the beginning we have been indexing on one server, the most powerful server at Hetzner’s and of course at one point it run full. 
  We had to shut down the indexing, because we weren’t able to take new pages. 
  All this was caused by the fact that in the previous year we made some changes to the crawler (the part that goes online and finds IPFS resources) 
  that made it about 100 times faster. So suddenly, instead of indexing 0.1 document per second, we were indexing about 10 documents per second. 
  The consequence was obviously scaling up the hosting.
	First we went up to 2 servers, and there was no problem, to our great surprise. Our deployments are automated, we are using Ansible. 
  This allowed us in the past to change a hosting company in about two days. The challenge with automated deployment starts with multiple servers; 
  until then, you don’t need to worry what gets executed where. 
  
  <img src="/assets/images/graf1.png" alt="drawing" />
  
  Later we moved to 3 servers, and we have reached the point where when something breaks in one of them, the page is still up. 
  If you design a server architecture there will be always, depending on the size of your system, one or three servers that will perform badly. 
  Architecture needs to become more sophisticated. We set a coordination between servers and master nodes, special servers that make sure that everything is in sync, 
  and chose one designated server which takes care of distributing tasks between the others. 
  What you get when you have a large database that doesn’t fit on a single computer is that you need to slice the database in things called shards. 
  Shards need to be tuned really carefully to the size of the server and size of our constantly growing data. 
  Right now we index 500 documents at the same time, and we're still improving and optimizing various part of this system.
	Last but not least, we were working on redundancy. 
  The data is the most important thing within organization, IPFS Search by definition is an entry to a lot of data, which must not be lost. 
  We created so far three copies of all data that entries our servers. 
  
  <img src="/assets/images/nodes.png" alt="drawing" />
  
