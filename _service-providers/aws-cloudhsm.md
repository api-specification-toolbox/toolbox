---
name: AWS CloudHSM
description: |-
  <p>The AWS CloudHSM service helps you meet corporate, contractual and regulatory compliance requirements for data security by using dedicated Hardware Security Module (HSM) appliances within the AWS cloud. With CloudHSM, you control the encryption keys and cryptographic operations performed by the HSM.</p>
  <p>AWS and AWS Marketplace partners offer a variety of solutions for protecting sensitive data within the AWS platform, but for applications and data subject to rigorous contractual or regulatory requirements for managing cryptographic keys, additional protection is sometimes necessary. Until now, your only option was to store the sensitive data (or the encryption keys protecting the sensitive data) in your on-premises datacenters. Unfortunately, this either prevented you from migrating these applications to the cloud or significantly slowed their performance. The AWS CloudHSM service allows you to protect your encryption keys within HSMs designed and validated to government standards for secure key management. You can securely generate, store, and manage the cryptographic keys used for data encryption such that they are accessible only by you. AWS CloudHSM helps you comply with strict key management requirements without sacrificing application performance.</p>
  <p>The AWS CloudHSM service works with Amazon Virtual Private Cloud (VPC). CloudHSM instances are provisioned inside your VPC with an IP address that you specify, providing simple and private network connectivity to your Amazon Elastic Compute Cloud (EC2) instances. Placing CloudHSM instances near your EC2 instances decreases network latency, which can improve application performance. AWS provides dedicated and exclusive (single tenant) access to CloudHSM instances, isolated from other AWS customers. Available in multiple Regions and Availability Zones (AZs), AWS CloudHSM allows you to add secure and durable key storage to your applications.</p>
image: http://api.specificationtoolbox.com/images/service-providers/aws-cloudhsm.jpg
created: "2020-12-23"
modified: 2020-12-24PST10:05:00-28800
specificationVersion: "0.14"
x-rank: "10"
x-alexaRank: "14"
url: http://api.specificationtoolbox.com/resources/service-providers/aws-cloudhsm/
tags:
- Relative Data
- Have API Paths
- Have API
- Encryption
- Contracts
- API Service Provider
- API Service Provider
- API Provider
- Amazon Web Services
apis: []
x-common:
- type: x-documentation
  url: https://docs.aws.amazon.com/index.html?nc2=h_ql_doc
- type: x-documentation
  url: http://docs.aws.amazon.com/cloudhsm/latest/dg/
- type: x-facebook
  url: https://www.facebook.com/amazonwebservices
- type: x-faq
  url: https://aws.amazon.com/cloudhsm/faqs/
- type: x-forums
  url: https://forums.aws.amazon.com/forum.jspa?forumID=156
- type: x-getting-started
  url: https://aws.amazon.com/cloudhsm/getting-started/
- type: x-marketplace
  url: https://aws.amazon.com/marketplace/?nc2=h_ql_mp
- type: x-marketplace
  url: https://aws.amazon.com/marketplace/?nc2=h_mo
- type: x-press
  url: https://press.aboutamazon.com/press-releases/aws
- type: x-pricing
  url: https://aws.amazon.com/cloudhsm/pricing/
- type: x-privacy
  url: https://aws.amazon.com/privacy/?nc1=f_pr
- type: x-release-notes
  url: http://aws.amazon.com/releasenotes/AWS-CloudHSM/
- type: x-support
  url: https://console.aws.amazon.com/support/home/?nc1=f_dr
- type: x-terms-of-service
  url: https://aws.amazon.com/terms/?nc1=f_pr
- type: x-website
  url: https://aws.amazon.com/cloudhsm/
include: []
maintainers:
- FN: Kin Lane
  x-twitter: apievangelist
  email: info@apievangelist.com
...
