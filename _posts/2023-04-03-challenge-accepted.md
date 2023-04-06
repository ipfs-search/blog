---
layout: single
title:  "1000 hits/s? Challenge accepted!"
author: Mathijs de Bruin
excerpt: "In fall 2021 we started the ambitious work of seeing whether [ipfs-search.com](http://ipfs-search.com) could truly handle web-scale traffic. Through the grapevine, we’d heard how a well known search engine might be interested in searching IPFS. Searching IPFS is what we do since 2016, so we said “challenge: accepted”."
header:
  teaser: "/assets/images/2023-04-03-challenge-accepted/Control-2-1200x766.jpg"
  overlay_image: "/assets/images/2023-04-03-challenge-accepted/Control-2-1200x766.jpg"
  overlay_filter: rgba(0, 0, 0, 0.7)
---

# Introduction

In fall 2021 we started the ambitious work of seeing whether [ipfs-search.com](http://ipfs-search.com) could truly handle web-scale traffic. Through the grapevine, we’d heard how a well known search engine might be interested in searching IPFS. Searching IPFS is what we do since 2016, so we said “challenge: accepted”.

The same grapevine told us that this search engine handles about 1000 requests per second. At the time, we were handling about 0.1 requests/second, so quite a difference. However, in our statistics we’re seeing early signs of exponential growth, in which case 4 orders of magnitude really doesn’t take that long.

Being passive on the internet means explosive growth will overwhelm you. Our success might well be the cause of our demise. Or worse; as with many start-ups we might feel forced to give up [our ideals](https://blog.ipfs-search.com/breaking-the-silent-consent/) under market pressures, just to survive.

This is the first part in a two-post blog miniseries, where we describe how indeed we managed to surpass our ambitions of handling 1000 requests per second.

<figure>
  <img alt="Traffic growth over 2022." src="/assets/images/2023-04-03-challenge-accepted/api_requests.png">
  <figcaption>Traffic growth over 2022.</figcaption>
</figure>

<figure>
  <img alt="Index growth over 2022." src="/assets/images/2023-04-03-challenge-accepted/documents_per_index.png">
  <figcaption>Index growth over 2022.</figcaption>
</figure>

# It’s elastic, right?

We were running Elastic (currently [OpenSearch](https://www.theregister.com/2021/04/13/aws_renames_elasticsearch_fork_opensearch/), as [Elastic isn’t Open Source](https://blog.opensource.org/the-sspl-is-not-an-open-source-license/) anymore), a document store specifically designed to scale and handle gigantic datasets. After Google’s publication in the early 2000’s of [MapReduce](https://en.wikipedia.org/wiki/MapReduce), the smart folks behind Elasticsearch (amongst others) built a FOSS (Free and Open Source) search index with it. In theory, allowing scaling without a limit. However…

## Theory doesn’t work in practice.

Early benchmarks suggested that a single node was able to handle 10 queries per second. Which, again in theory, suggested that merely scaling out our cluster from 4 to 100 servers ought to do it. But alas, it wasn’t so easy.

As soon as we scaled our cluster from 4 up to 30 nodes, average response times shot up to over half a second! Mind you, these are averages — it implies that some of our users had to wait for several seconds for search results.

<figure>
  <img alt="Response times over 2021." src="/assets/images/2023-04-03-challenge-accepted/response_time.png">
  <figcaption>Response times over 2021.</figcaption>
</figure>

## The Internet is impatient!

Unlike visitors of your local library, users have strong expectations when it comes to looking for information on the internet. Wait more than 200 ms and a website is experienced as slow. Wait more than 1 second and you’ll start interrupting the user’s flow.  More than a few seconds and users will leave, never to return again. ([Reference](https://ux.stackexchange.com/questions/100316/loading-time-and-user-expectations)) It doesn’t matter how many queries per second we can serve, it’ll be useless if we’re serving them too slowly!

## Endless fidgeting with knobs

Like any large and complex machine, Elastic/OpenSearch has a large number of configuration options which one can spend a lifetime tuning. Sadly enough, it seems that few experts in the field have bothered to share detailed knowledge. As soon as one leaves the ‘safe’ territory of the Proof of Concept, enter the domain of the Tech Consultant. Search being our core activity, this is potentially an endless sinkhole of funds, which we do not have in the first place!

<figure>
  <img alt="Control panel, knobs and dials." src="/assets/images/2023-04-03-challenge-accepted/Control-2-1200x766.jpg">
  <figcaption>Source: <a href="https://flashbak.com/the-control-panel-archive-the-tactile-beauty-of-buttons-meters-knobs-and-dials-406888/">https://flashbak.com/the-control-panel-archive-the-tactile-beauty-of-buttons-meters-knobs-and-dials-406888/</a></figcaption>
</figure>

Rather than Outsourcing All The Things, we ended up becoming the consultants ourselves. Which is one of the reasons it took us over a year to learn how to overcome these obstacles, with the end result being that we now have all the knowledge in-house. (We did get some help, but more towards the practical side of the implementation.)

Over time, we tried:

1. [Increasing the number of index shards](https://github.com/ipfs-search/ipfs-search-deployment/blob/main/docs/architecture/sharding.pdf) and…
2. … [decreasing them again](https://github.com/ipfs-search/ipfs-search-deployment/blob/main/docs/architecture/sharding%20reconsiderations%206-2-23.pdf).
3. Increasing the number of replicas and…
4. … decreasing them again.
5. [Tuning our refresh interval](https://www.elastic.co/guide/en/elasticsearch/reference/current/tune-for-indexing-speed.html#_unset_or_increase_the_refresh_interval). 
6. Implementing [batching/bulk reads](https://github.com/ipfs-search/ipfs-search/pull/217) and [writes](https://github.com/ipfs-search/ipfs-search/pull/201) for our crawler.
7. [Tuning our index buffer size](https://www.elastic.co/guide/en/elasticsearch/reference/current/tune-for-indexing-speed.html#_indexing_buffer_size).
8. [Searching rounded dates](https://www.elastic.co/guide/en/elasticsearch/reference/current/tune-for-search-speed.html#_search_rounded_dates).
9. Upgrading from ElasticSearch to OpenSearch and…
10. Upgrading OpenSearch again.
11. [Reindexing](https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-reindex.html) All The Things, several times.
12. Ensuring persistent (keepalive) connections for search clients.
13. [Tuning max_merge_count](https://www.outcoldman.com/en/archive/2017/07/13/elasticsearch-explaining-merge-settings/) to prevent index throttling.
14. Reducing our crawling rate.
15. Enabling [shard location awareness](https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-cluster.html#shard-allocation-awareness) and…
16. … disabling it again.
17. Tuning [max_concurrent_shard_requests](https://www.elastic.co/guide/en/elasticsearch/reference/7.17/search-shard-routing.html#search-concurrency-and-parallelism) in search queries.
18. Enabling `_local` [shard preference](https://www.elastic.co/guide/en/elasticsearch/reference/7.17/search-shard-routing.html#shard-and-node-preference) in queries and…
19. … disabling it again.
20. Setting per-shard search API `timeout`.
21. Set [translog](https://www.elastic.co/guide/en/elasticsearch/reference/current/index-modules-translog.html) durability to async.
22. [Tuning `reclaim_deletes_weight`](https://www.exratione.com/2018/03/elasticsearch-adjusting-merge-settings-to-make-frequent-updates-less-painful/).

### Resources

- [Tune for indexing speed](https://www.elastic.co/guide/en/elasticsearch/reference/current/tune-for-indexing-speed.html#tune-for-indexing-speed) by Elasticsearch
- [Tune for search speed](https://www.elastic.co/guide/en/elasticsearch/reference/current/tune-for-search-speed.html) by Elasticsearch
- [How to avoid index throttling, deep dive in segments merging](https://www.outcoldman.com/en/archive/2017/07/13/elasticsearch-explaining-merge-settings/) by Denis Gladkikh
- [Adjusting Merge Settings to Make Frequent Updates Less Painful](https://www.exratione.com/2018/03/elasticsearch-adjusting-merge-settings-to-make-frequent-updates-less-painful/) by Reason
- [Elasticsearch Performance Optimization](https://www.alibabacloud.com/blog/alibaba-cloud-elasticsearch-performance-optimization_597092) by Alibababa
- [How can I improve the indexing performance[…]?](https://repost.aws/knowledge-center/opensearch-indexing-performance) by Amazon

## Reading and writing, but not at the same time!

It turns out there was not a single factor which could be clearly outlined as the ‘root cause’ of our issue, rather a number of factors was colluding. However, discovered there was resource contention between our crawler’s indexing and search queries. This is also why many of our measures focused on improving search through improving index performance. In the end, implementing asynchronous/bulk reads and writes significantly increased the stability of our cluster, reducing both the variance in response times as well as the average.

It did become clear though, as would be expected, that performing crawling in bulk and asynchronously was a major factor in getting our response times under control. And so in summer ‘22 it finally seemed we were ready to continue scaling, but…

<figure>
  <img alt="A glimpse of one of the monitoring dashboards which we developed along the process." src="/assets/images/2023-04-03-challenge-accepted/all_the_stats.png">
  <figcaption>A glimpse of one of the monitoring dashboards which we developed along the process.</figcaption>
</figure>

# Our benchmark haven’t started yet!

Throughout the ‘minor’ delay and distraction of finally getting these darn response times under control, we went waaaay overboard creating extremely insightful monitoring dashboards. We implemented deep-reaching functionality in our crawler, of all components. 

But we hadn’t yet managed to scale our cluster beyond 33 nodes! Nor develop or run our actual benchmark! Want to learn how we achieved this?

Stay tuned for our next post!
