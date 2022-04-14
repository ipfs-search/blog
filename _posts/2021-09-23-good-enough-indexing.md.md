---
layout: single
title:  "Good enough indexing"
excerpt: How to distribute the indexing of ipfs-search? Can we use existing algorithms to create a "good enough" system? 
header :
 teaser: "/assets/images/indexing.jpg"
 overlay_image: "/assets/images/indexing.jpg"
 overlay_filter: rgba(0, 0, 0, 0.7)
tags:
  - blockchain
  - indexing
---

# How to distribute the indexing of ipfs-search? Can we use existing algorithms to create a "good enough" system? 

***Special thanks to Nina for helping us with the research***


 If index construction needs to be done for different platforms with different hardware specs (full distribution of search engine), while still being scalable, using [single pass in-memory sorting (SPIMI)](https://nlp.stanford.edu/IR-book/html/htmledition/single-pass-in-memory-indexing-1.html#:~:text=A%20more%20scalable%20alternative%20is,is%20enough%20disk%20space%20available.) looks like a 'good enough' candidate. SPIMI uses terms instead of term-id's, writes each block's dictionary to disk and then starts a new dictionary for the next block. Otherwise, we can use [blocked sort based indexing (BSBI)](https://nlp.stanford.edu/IR-book/html/htmledition/blocked-sort-based-indexing-1.html. Blocked sort-based indexing has good scaling properties, but needs a data structure for mapping terms to term-id. For very large collections, it may not fit into memory.
    
 We can use known [distributed indexing algorithms](https://nlp.stanford.edu/IR-book/html/htmledition/distributed-indexing-1.html). The problem is that MapReduce tasks must be written as acyclic dataflow programs. In essence, as a stateless mapper followed by a stateless reducer,   executed a batch job scheduler. This paradigm makes repeated querying of datasets difficult and imposes limitations on machine learning applications (like we may wish to use for PageRank and TrustRank), where iterative algorithms that revisit a single working set multiple times are the norm. The MapReduce model seems coupled to the Hadoop infrastructure. The [Bulk Synchronous Parallel (BSP)](http://www.bsp-worldwide.org/ "http://www.bsp-worldwide.org/") computing model for parallel programming may be a viable alternative. [Apache Hama](https://hama.apache.org/ "https://hama.apache.org/") implements BSP.
    
 Pages and objects come in over time and need to be inserted, other pages and objects have been deleted and this means that all of the indexes have to be modified too: For documents, this means postings updates for terms already in the dictionary, new terms need to be added to the dictionary, and all associated indexes such as N-gram indexes will have to be updated for each added or deleted document. This can be made easy by making an auxiliary index and [logarithmic merge](https://niverel.tymyrddin.space/en/play/algos/dynindex#logarithmic-merge "en:play:algos:dynindex") of the main and auxiliary index.
 
    <img src="/assets/images/Graph-Protocol-678x381" alt="drawing" width="200" />
 [The Graph](https://medium.com/graphprotocol "https://medium.com/graphprotocol") is a protocol for building decentralized applications using GraphQL. In essence, [the graph](https://thegraph.com/ "https://thegraph.com/") is a decentralized index that works across blockchains (it can index data in multiple blockchains like Ethereum and BTC, but also on IPFS and Filecoin). It monitors the blockchains for new data and updates the index every time this happens. Once the index is updated, it tries to reach a consensus among the nodes that maintain it. Once it reaches consensus, it ensures that the users of the index will have the latest data available. Not all challenges are solved yet. 
