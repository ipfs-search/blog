---
layout: single
title:  "Decentralizing ipfs-search part I: How to make ipfs-search decentralized and distributed"
excerpt: "An overview of theories and algorithms that could enable distribution and decentralization ipfs-search"
header :
  teaser: "/assets/images/decentralization2.jpg"
  overlay_image: "/assets/images/decentralization2.jpg"
---
# Making a truly distributed and decentralized service is a *hard problem<sup>TM</sup>*

***Special thanks to Nina for helping us with the research***

There are many issues to solve , such as:
* dynamic neighbourhood clustering;
* low-friction security and privacy;
* search rank fraud detection.


We want to find tech that will make it possible to solve these, and distribute and decentralize ipfs-search. 

In this post, we will look at currently existing theories and algorithm that could allow us to make that possible. 


## Blockchain 

Stuart Haber and W. Scott Stornetta already envisioned a cryptographically secure chain of blocks where no one could tamper with timestamps of documents in 1991. In 1992, they upgraded their system to use Merkle trees, increasing efficiency and enabling the collection of more documents on a single block. Satoshi Nakamoto, a person or a group of people, developed the first application of the digital ledger technology in 2008, BitCoin.

**Features**
* The described data is structured in blocks in order of transactions that are validated by miners.
* Each block produces a unique hash that identifies the transaction. If somebody attempt to alter the details of the transaction, the action generates a different hash. This can be evidence of a corrupted and invalid transaction.
* The system published transactions on a public ledger that every node can access. 
* Miners can postpone or even cancel a transaction.
* Traditional Blockchains rely on Proof of Work. These need many computations and as a result, the number of transactions per second is low.
*  To validate any new transaction, a large number of previous transactions has to be validated as well.
* As the number of blocks in a chain multiplies, the computing power required to create new blocks increases. This increases costs.


### Use cases
Blockchain is the technology that enables cryptocurrencies like [Bitcoin](https://bitcoin.org/bitcoin.pdf).

## Hashgraph
Leemon Baird developed the [hashgraph](https://en.wikipedia.org/wiki/Hashgraph) algorithm in the mode 2000s as a way to create consensus, securely and efficiently. Some see hashgraphs as the successor to blockchain. 

Hashgraph achieves transaction success via consensus timestamping to make sure that transactions on the network agree with each node on the platform.    

On a Hashgraph network nodes do not have to validate transactions by _Proof of Work_ or _Proof of Stake_. It builds consensus via the _Gossip about Gossip_ and _Virtual Voting_ techniques instead. This increases the number of transactions per second and frees Hashgraph from relying on mining.

Consensus timestamping avoids the blockchain issue of cancelling transactions or putting them on future blocks.     
   
Hashgraph is under patent. Developers do not need a license but need the platform coin instead. API calls cost a micro-payment to the company.

### Use cases
We can use Hashgraph in all cases where trust is immutable and incorruptible.
-   Cryptocurrency as a service for support for native micropayments    
-   Micro-storage in the form of a distributed file service that apps can use
-   Contracts    
-   Bank transfers    
-   Credential verification
    

### Further reading
-   [Swirlds](https://www.swirlds.com/ "https://www.swirlds.com/")    
-   [Hedera Hashgraph](https://www.hedera.com/ "https://www.hedera.com/")

## DAG
A [directed acyclic graph](https://en.wikipedia.org/wiki/Directed_acyclic_graph) (DAG) is a type of distributed ledger technology that relies on consensus algorithms. To prevail, transactions need majority support within the network. As a result, there is more cooperation and teamwork and nodes have equal rights. Such networks are closer to the original goal of Distributed Ledger Technology: to democratise the internet economy.

**Features**
-   DAGs are not created using block or chain structures. They are instead connected like a mesh.
-   It connects current data transactions with previous ones.    
-   With nodes having equal rights, nodes do not have to refer to another node.    
-   A consensus-based system where nodes decide what happens to give a semblance of democracy as compared to platforms that go through a central command.    
-   For a transaction to succeed, it has to validate only two of the previous transactions.    
-   Transactions in DAGs adds throughput as many more validations happen.

### Use cases
-   Cryptocurrencies    
-   Economic infrastructure for data sharing on the Internet of Things    
-   Remote Patient Monitoring    
-   Decentralised Peer-to-Peer energy trading
    

### Resources
-   [OByte](https://obyte.org/ "https://obyte.org/")    
-   [IoTA Use Cases](https://files.iota.org/comms/IOTA_Use_Cases.pdf "https://files.iota.org/comms/IOTA_Use_Cases.pdf")

## Holochain


Holochain combines Blockchain, BitTorrent and Github ideas for creating a technology that distributes among nodes to avoid any instance of centralised control of the flow of data. A truly revolutionary technology. Blockchain seeks to decentralise transactions such that people can interact directly without the need for a middle party. Holochain distributes the interactions.

-   MetaCurrency is the root, their next-generation Operating System is called Ceptr, a Holochain with Holo being their first real-world application system.    
-   Each node runs on a chain of its own, giving nodes the freedom to operate autonomously. Not all data needs to be shared with everyone. If two people wish to transfer value, and they agree, others do not have to know about it.    
-   There is no need for miners. Transaction fees are almost non-existent. There is no tokenization on the platform. Smart contracts rule.   
-   Users can store data using keys in the Holochain distributed hash table (DHT), but the data stays in actual locations “distributed” in various locations across the globe, relieving the network and improving scalability.    
-   Holochain creates a network composed of various distributed ledger technology networks.    
-   A developer will only need confirmation from the single-chain that makes up the whole DLT network.    
-   Holochain liberates us from corporate control over our choices and information.    
    -   Scalable distributed apps with data integrity        
    -   p2p networks with validating distributed hash tables        
    -   A technology inspired by nature
        

### Use cases


Systems where not all parties need to participate:

-   Social networks    
-   Chat programs    
-   p2p platforms    
-   Shared document updates
    

### Resources


-   [r/holochain: Distributed Computing and Applications](https://www.reddit.com/r/holochain/ "https://www.reddit.com/r/holochain/")    
-   [Holochain projects](http://holochainprojects.com/ "http://holochainprojects.com/")    
-   [Decentralising the web: The key takeaways](https://www.computing.co.uk/ctg/news/3036546/decentralising-the-web-the-key-takeaways "https://www.computing.co.uk/ctg/news/3036546/decentralising-the-web-the-key-takeaways"), 2018    
-   [Holochains for Distributed Data Integrity](http://ceptr.org/projects/holochain "http://ceptr.org/projects/holochain")   
-   [Holochain](https://holochain.org/ "https://holochain.org/")


