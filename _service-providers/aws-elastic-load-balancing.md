---
name: AWS Elastic Load Balancing
description: |-
  <p>Elastic Load Balancing automatically distributes incoming application traffic across multiple Amazon EC2 instances. It enables you to achieve fault tolerance in your applications, seamlessly providing the required amount of load balancing capacity needed to route application traffic.</p>
  <p>Elastic Load Balancing offers two types of load balancers that both feature high availability, automatic scaling, and robust security. These include the&nbsp;<a href="https://aws.amazon.com/elasticloadbalancing/classicloadbalancer/">Classic Load Balancer</a>&nbsp;that routes traffic based on either application or network level information, and the&nbsp;<a href="https://aws.amazon.com/elasticloadbalancing/applicationloadbalancer/">Application Load Balancer</a>&nbsp;that routes traffic based on advanced application level information that includes the content of the request. The Classic Load Balancer is ideal for simple load balancing of traffic across multiple EC2 instances, while the Application Load Balancer is ideal for applications needing advanced routing capabilities, microservices, and container-based architectures. Application Load Balancer offers ability to route traffic to multiple services or load balance across multiple ports on the same EC2 instance.</p>
image: http://api.specificationtoolbox.com/images/service-providers/aws-elastic-load-balancing.jpg
created: "2020-12-23"
modified: 2020-12-24PST10:05:00-28800
specificationVersion: "0.14"
x-rank: "10"
x-alexaRank: "14"
url: http://api.specificationtoolbox.com/resources/service-providers/aws-elastic-load-balancing/
tags:
- Servers
- Performance
- Compute
- Availability
- Amazon Web Services
apis: []
x-common:
- type: x-command-line-interface
  url: http://docs.aws.amazon.com/cli/latest/reference/elbv2/index.html
- type: x-documentation
  url: http://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/
- type: x-documentation
  url: https://docs.aws.amazon.com/index.html?nc2=h_ql_doc
- type: x-facebook
  url: https://www.facebook.com/amazonwebservices
- type: x-faq
  url: https://aws.amazon.com/elasticloadbalancing/classicloadbalancer/faqs/
- type: x-getting-started
  url: https://aws.amazon.com/elasticloadbalancing/classicloadbalancer/getting-started/
- type: x-marketplace
  url: https://aws.amazon.com/marketplace/?nc2=h_ql_mp
- type: x-marketplace
  url: https://aws.amazon.com/marketplace/?nc2=h_mo
- type: x-press
  url: https://press.aboutamazon.com/press-releases/aws
- type: x-pricing
  url: https://aws.amazon.com/elasticloadbalancing/classicloadbalancer/pricing/
- type: x-privacy
  url: https://aws.amazon.com/privacy/?nc1=f_pr
- type: x-support
  url: https://console.aws.amazon.com/support/home/?nc1=f_dr
- type: x-terms-of-service
  url: https://aws.amazon.com/terms/?nc1=f_pr
- type: x-website
  url: https://aws.amazon.com/elasticloadbalancing/
include: []
maintainers:
- FN: Kin Lane
  x-twitter: apievangelist
  email: info@apievangelist.com
...
