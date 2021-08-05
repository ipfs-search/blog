---
layout: single
title:  "IPFS and Filecoin"
excerpt: "A look at the infrastructures of two of the main systems that make up the distributed web: IPFS and FileCoin"
header :
  teaser: "/assets/images/default_overlay.png"
  overlay_image: "/assets/images/default_overlay.png"
tags :
  - IPFS
  - Filecoin
---

Ipfs-search is the search engine for the distributed web. And what is that? Several services and protocols make up the distributed web. In this post, we will look at two of the main ones, IPFS and FileCoin, and how they are put together.



## IPFS


[IPFS](https://github.com/ipfs/specs "https://github.com/ipfs/specs") is a combination of Kademlia and BitTorrent protocol with ideas from Git. It is a content-addressed block storage model. Block storage means it stores user data and its information as separate objects in a store that can hold any kind of file system. It uses content-addressed hyperlinks to make the information described retrievable over the web-based on its contents rather than location.

**Features**
-   Each file and all the blocks in it have a unique fingerprint (hash).
-   IPFS tracks the version history of each file.
-   The protocol removes duplications across the network. 
-   A node stores only content it cares about and some indexing information (for who is storing what).
-   Looking for files means looking for nodes storing the content behind the hash, a unique code.
-   You can find every file by its human-readable name using the IPNS naming system.
    

#### Use cases


IPFS was designed as a distributed storage technology, useful for archivists, service providers and content creators. The number of users has increased a lot recently, as well as its intended scope and its [applications](https://github.com/ipfs/ipfs/labels/applications%20of%20ipfs "https://github.com/ipfs/ipfs/labels/applications%20of%20ipfs"). For example, IPFS makes it possible to run a decentralized application (ÐAPP) and store complex and unstructured content with a distributed file system based on IPFS that is not connected to the public IPFS network, so that its content isn’t spread on other IPFS hosts outside the network.

Currently, IPFS intends to replace the HTTP protocol. There are some serious hurdles to take. Internet standards get set by publishing RFCs, having many independent implementations, and going through a standards process by the IETF. The [IRTF Decentralized Internet Infrastructure (DIN)](https://trac.ietf.org/trac/dinrg/wiki "https://trac.ietf.org/trac/dinrg/wiki") has noticed it as distributed storage technology, and in general, the need for distributed technologies.

#### Merkle DAGs


A future-proof system that allows for many different fingerprinting mechanisms (summaries of the content used to address content) to coexist. How? Chunking and hashing large files into Interplanetary Linked Data (IPLD), a Merkle DAG object.

#### Multihash format

Raw content runs through a hash function, to produce a digest. This digest is unique to the contents of the file, and that file only. 

The [multihash format](https://github.com/multiformats/go-multihash/tree/master/multihash "https://github.com/multiformats/go-multihash/tree/master/multihash") provides a [wrapper around the hash](https://github.com/multiformats/go-multihash/blob/master/multihash.go#L146 "https://github.com/multiformats/go-multihash/blob/master/multihash.go#L146"): The hash itself specifies which hash function is used, and the length of the resultant hash in the first two bytes (`fn code` and `length`) of the multihash. The rest of it is the `hash digest`.


IPFS comes with a default hash algorithm but can be recompiled to use another hash function as default or to change the importer code to add a way to specify the multihash choice. When the hashing algorithm used is changed from SHA256 to BLAKE2b, the prefixes in the wrapper will differ.

#### Base58

Base58 is a group of binary-to-text encoding schemes used to represent large integers as alphanumeric text. It is designed for humans to enter the data, copying from some visual source, but also allows easy copy and paste because a double-click will usually select the whole string. It is like Base64 but has been modified to avoid both non-alphanumeric characters and letters which might look ambiguous when printed - similar-looking letters are omitted: `0` _(zero)_, `O` _(capital o)_, `I` _(capital i)_ and `l` _(lower case L)_, and non-alphanumeric characters `+` _(plus)_ and `/` _(slash)_ are dropped.

The actual order of letters in the alphabet depends on the application, which is the reason why the term Base58 alone is not enough to fully describe the format. Base58Check is a Base58 encoding format that unambiguously encodes the type of data in the first few characters and includes an error detection code in the last few characters.

For example, the base58 letters `Qm` correspond with hexadecimal `12` (SHA-256 algorithm) and hexadecimal `20` (length 32 bytes).

#### CID version

A CID is a [self-describing content-addressed identifier](https://github.com/ipld/cid/blob/master/original-rfc.md "https://github.com/ipld/cid/blob/master/original-rfc.md"). It uses cryptographic hashes to achieve content addressing. It uses several multiformats to achieve flexible self-description, namely multihash for hashes, multicodec for data content types, and multibase to encode the CID itself into strings.

It's typed content address: a tuple of (content-type, content-address)

#### Notes on zero duplication

-   The resulting hash is not only a result of the chosen hash algorithm (`hash` option), but also affected by the choice of chunking algorithm (`chunker` option), DAG format (`trickle` option) and CID version (`cid-version` option), so it is possible to have completely different hashes even if the format is marked the same.    
-   The same file can be duplicated across the network: Someone could add a file, remove it, upgrade the IPFS client (or change to using a different one), add it again, and get a completely different hash. This requires intent and is complicated and time-consuming, so the probability of the existence of multiple hashes for the same file is low.
-   Duplication of files leads to redundancy, something users might want and even may consider necessary.
    

“Zero duplication” refers to not having wasteful duplicates.

### IPFS Components


#### Identity

The IPFS identities technology manages node identity generation and verification. Nodes are identified using a NodeID, which is a cryptographic hash of a public key. Each node stores its public and private keys, with the private key being encrypted with a passphrase.

The `NodeId`, the cryptographic hash3 of a public-key, is created with [S/Kademlia’s static crypto puzzle](http://www.scs.stanford.edu/~dm/home/papers/kpos.pdf "http://www.scs.stanford.edu/%7Edm/home/papers/kpos.pdf") (pdf).

#### Network

The IPFS network manages connections to other peers using various underlying network protocols. The network is configurable. IPFS nodes communicate with hundreds of other nodes in the network (or potentially, the entire internet). Some stack features of the IPFS network include transport, reliability, connectivity, integrity, and authenticity systems.

-   IPFS can use any transport protocol and is best suited for WebRTC Data Channels (browser connectivity) or uTP.    
-   If underlying networks do not provide reliability, IPFS can provide it using uTP or SCTP.    
-   For connectivity it also uses ICE NAT traversal techniques - STUN is a standardized set of methods and a network protocol for NAT hole punching, designed for UDP but which was extended to TCP. TURN is a NAT traversal relay protocol. ICE is a protocol for using STUN and/or TURN to do NAT traversal while picking the best network route available. It fills in some of the missing pieces and deficiencies that were not mentioned in the STUN specification.    
-   Integrity of messages can be checked using a hash checksum.    
-   Authenticity of messages can be checked using HMAC with the sender’s public key.
    

#### Routing

The IPFS routing system maintains information to locate specific peers and objects. It responds to both local and remote queries. Routing defaults to a DHT (Dynamic Hash Table), but it’s swappable.

IPFS uses a DHT based on S/Kademlia and Coral (DSHT). Coral stores the addresses of peers who can provide the data blocks taking advantage of data locality. Coral can distribute only subsets of the values to the nearest nodes avoiding hot spots. Coral organises a hierarchy of separate DSHTs called clusters depending on region and size. This enables nodes to query peers in their region first, “finding nearby data without querying distant nodes” and greatly reducing the latency of lookups.

Coral and mainline DHT use DHTs as a place to store – not the value, but – pointers to peers who have the actual value. IPFS uses the DHT in the same way. When a node advertises a block available for download, IPFS stores a record in the DHT with its own `Peer.ID`. This is called “providing” and the node becomes a “provider”. Requesters who wish to retrieve the content, query the DHT (or DSHT) and need only to retrieve a subset of providers, not all of them. Providing is done once per block because blocks (even sub-blocks) are independently addressable by their hash.

#### Exchange

IPFS uses a unique block exchange protocol called BitSwap to govern efficient block distribution. BitSwap is modelled like a market, and users have some minor incentives for data replication. Trade strategies are swappable.

Unlike [BitTorrent](http://www.bittorrent.org/beps/bep_0003.html "http://www.bittorrent.org/beps/bep_0003.html"), BitSwap is not limited to the blocks in one torrent. The blocks can come from completely unrelated files in the filesystem. BitSwap incentivises nodes to seed/serve blocks even when they do not need anything in particular. To avoid leeches (freeloading nodes that never share), peers track their balance (in bytes verified) with other nodes, and peers send blocks to debtor peers according to a function that falls as debt increases.

-   If a node is storing a node that is the parent (root/ancestor) of other nodes, then it is much more likely to also be storing the children. So when a requester attempts to pull down a large DAG, it first queries the DHT for providers of the root. Once the requester finds some and connects directly to retrieve the blocks, BitSwap will optimistically send them the “wantlist”, which will usually obviate any more DHT queries for that DAG.   
-   BitSwap only knows about Routing. And it only uses the `Provide` and `FindProviders` calls.
    

#### Objects

Merkle DAGs of content-addressed immutable objects with links are used to represent arbitrary data structures, including file hierarchies and communication systems.

Merkle DAGs provide:

-   _Content addressing_: All content is uniquely identified by its multihash checksum.    
-   _Tamper resistance_: All content is verified with its checksum.    
-   _Deduplication_: All objects that hold the same content are equal, and only stored once.
    

#### Files

IPFS uses a versioned file system hierarchy inspired by [Git](https://git-scm.com/ "https://git-scm.com/"). On Github, the complete file history and changes over time can be viewed.

IPFS defines a set of objects for modelling a versioned filesystem on top of the Merkle DAG. This object model is like the Git model:

-   A _block_ is a variable-size block of data.    
-   A _list_ is an ordered collection of blocks or other lists.    
-   A _tree_ is a collection of blocks, lists, or other trees.    
-   A _commit_ is a snapshot in the version history of a tree.
    

#### Naming

IPFS uses a self-certifying mutable name system called IPNS. IPNS was inspired by [SFS](https://pdos.csail.mit.edu/papers/sfs:euresti-meng.pdf "https://pdos.csail.mit.edu/papers/sfs:euresti-meng.pdf") (pdf) and is compatible with given services like [DNS](https://tools.ietf.org/html/rfc1035 "https://tools.ietf.org/html/rfc1035").

`NodeId` is obtained by `hash(node.PubKey)`. Then IPNS assigns every user a mutable namespace at: `/ipns/<NodeId>`. A user can publish an Object to this `/ipns/<NodeId>` path signed by his/her private key. When other users retrieve the object, they can check the signature matches the public key and `NodeId`. This verifies the authenticity of the _Object_ published by the user, achieving mutable state retrieval.

`<NodeId>` is a hash, it is not human friendly to pronounce and recall. That is where DNS TXT IPNS Records come in. If `/ipns/<domain>` is a valid domain name, IPFS looks up key `ipns` in its DNS TXT records. The `ipns` behaves as a symlink.

-   IPNS uses the `Put` and `GetValue` calls.

### Further reading


[IPFS - Content Addressed, Versioned, P2P File System (DRAFT 3)](https://ipfs.io/ipfs/QmR7GSQM93Cx5eAg6a6yRzNde1FQv7uL6X1o4k7zrJa3LX/ipfs.draft3.pdf "https://ipfs.io/ipfs/QmR7GSQM93Cx5eAg6a6yRzNde1FQv7uL6X1o4k7zrJa3LX/ipfs.draft3.pdf"), Juan Benet
[Incentergy: IPFS the next generation internet procotol technical overview](https://www.incentergy.de/blog/2018/02/03/ipfs-the-next-generation-internet-procotol-technical-overview/ "https://www.incentergy.de/blog/2018/02/03/ipfs-the-next-generation-internet-procotol-technical-overview/")



## FileCoin


[IPFS](https://niverel.tymyrddin.space/en/play/stones/current/ipfs "en:play:stones:current:ipfs") with FileCoin offers storage on a global network of local providers who have the freedom to set prices based on supply and demand. It implements a generalised version of the BitTorrent exchange protocol and uses Proof-of-Storage (instead of a Proof-of-Work consensus algorithm like Bitcoin). Anyone can join the network, offer unused hard drive space, and get rewarded in FileCoin tokens for data storage and retrieval services. Several exchanges trades in FileCoin and several cryptocurrency wallets support it, allowing the exchange FileCoin for other currencies like Euros, US Dollars, BTC and ETH.

### Further reading

-   [Filecoin \[IOU\] (FIL)](https://www.coingecko.com/en/coins/filecoin "https://www.coingecko.com/en/coins/filecoin"), CoinGecko    
-   [Filecoin](https://filecoin.io/ "https://filecoin.io/")    
-   [Filecoin: A Decentralized Storage Network](https://filecoin.io/filecoin.pdf "https://filecoin.io/filecoin.pdf"), Protocol Labs, 2017



