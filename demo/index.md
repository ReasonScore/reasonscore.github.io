---
layout: page.html
title: Reason Score Demo
---
<style>
        html{
            overflow-x: unset!important;
        }
        .content {
            padding: 0;
        }
        rs-score .more-info {
            cursor: pointer;
        }
        #demo {
            margin-top: 3rem;
        }
    @media (max-width:600px) {
        #demo {
            padding: 0;
            margin: 0;
            margin-top: 1rem;
        }
    }
</style>
  <script> //Settings for this page
    window.RsSettings = {
      disableExternalDb: false,
      numbers: true,
      largeNumbers: true,
      lines: false,
      editable: false,
      startClosed: false,
      portData: false,
      scoreDescription: false,
      saveToCloud: false,
      moreInfo: true,
    }

    window.RsSettings.dbCollection = "f-demo";

    window.RsActions = [
      {
        "newData": {
          "content": "[Fiction City](https://en.wikipedia.org/wiki/Fictional_city) should convert Elm Street to [only pedestrian traffic](https://en.wikipedia.org/wiki/Pedestrian_zone)?",
          "id": "topClaim",
          "type": "claim"
        },
        "type": "add_claim",
        "dataId": "topClaim"
      },
      {
        "newData": {
          "content": "The planning commission estimates this will increase foot traffic to local shops by 12% during peak hours.",
          "id": "Y6N1dZyym0X5",
          "type": "claim"
        },
        "type": "add_claim",
        "dataId": "Y6N1dZyym0X5"
      },
      {
        "newData": {
          "content": "The increase in revenue is expected to pay off the expense in under 2 years meeting the cities investment requirements.",
          "id": "Y6N1dZycnavJ",
          "type": "claim"
        },
        "type": "add_claim",
        "dataId": "Y6N1dZycnavJ"
      },
      {
        "newData": {
          "content": "This will result in traffic being diverted down residential streets.",
          "id": "Y6N1dZxFx9Hk",
          "type": "claim"
        },
        "type": "add_claim",
        "dataId": "Y6N1dZxFx9Hk"
      },
      {
        "newData": {
          "content": "Children safety is more important than profit for local shops.",
          "id": "Y6N1dZxEuMNA",
          "type": "claim"
        },
        "type": "add_claim",
        "dataId": "Y6N1dZxEuMNA"
      },
      {
        "newData": {
          "content": "A set of railroad tracks are no longer in use and the City can convert that to a new street.",
          "id": "Y6N1dZxbqJ0O",
          "type": "claim"
        },
        "type": "add_claim",
        "dataId": "Y6N1dZxbqJ0O"
      },
      {
        "newData": {
          "content": "The conversion will cost 2 Million dollars.",
          "id": "Y6N1dZxRu7nP",
          "type": "claim"
        },
        "type": "add_claim",
        "dataId": "Y6N1dZxRu7nP"
      },
      {
        "newData": {
          "parentId": "topClaim",
          "childId": "Y6N1dZyym0X5",
          "affects": "confidence",
          "pro": true,
          "id": "Y6N1dZx0x2kP",
          "priority": "",
          "type": "claimEdge"
        },
        "type": "add_claimEdge",
        "dataId": "Y6N1dZx0x2kP"
      },
      {
        "newData": {
          "parentId": "Y6N1dZyym0X5",
          "childId": "Y6N1dZycnavJ",
          "affects": "relevance",
          "pro": true,
          "id": "Y6N1dZxT7A8H",
          "priority": "",
          "type": "claimEdge"
        },
        "type": "add_claimEdge",
        "dataId": "Y6N1dZxT7A8H"
      },
      {
        "newData": {
          "parentId": "topClaim",
          "childId": "Y6N1dZxFx9Hk",
          "affects": "confidence",
          "pro": false,
          "id": "Y6N1dZxX6c8l",
          "priority": "",
          "type": "claimEdge"
        },
        "type": "add_claimEdge",
        "dataId": "Y6N1dZxX6c8l"
      },
      {
        "newData": {
          "parentId": "Y6N1dZxFx9Hk",
          "childId": "Y6N1dZxEuMNA",
          "affects": "relevance",
          "pro": true,
          "id": "Y6N1dZxqrFG1",
          "priority": "",
          "type": "claimEdge"
        },
        "type": "add_claimEdge",
        "dataId": "Y6N1dZxqrFG1"
      },
      {
        "newData": {
          "parentId": "Y6N1dZxFx9Hk",
          "childId": "Y6N1dZxbqJ0O",
          "affects": "confidence",
          "pro": false,
          "id": "Y6N1dZxpzBQq",
          "priority": "",
          "type": "claimEdge"
        },
        "type": "add_claimEdge",
        "dataId": "Y6N1dZxpzBQq"
      },
      {
        "newData": {
          "parentId": "topClaim",
          "childId": "Y6N1dZxRu7nP",
          "affects": "confidence",
          "pro": false,
          "id": "Y6N1dZxeFD9X",
          "priority": "",
          "type": "claimEdge"
        },
        "type": "add_claimEdge",
        "dataId": "Y6N1dZxeFD9X"
      },
      {
        "newData": {
          "sourceClaimId": "topClaim",
          "topScoreId": "topClaim",
          "reversible": false,
          "pro": true,
          "affects": "confidence",
          "confidence": 0,
          "relevance": 1,
          "id": "topScore",
          "priority": "",
          "type": "score",
          "scoreTreeId": "ScoreTree"
        },
        "type": "add_score",
        "dataId": "topScore"
      },
      {
        "newData": {
          "confidence": 1,
          "id": "ScoreTree",
          "sourceClaimId": "topClaim",
          "topScoreId": "topScore",
          "type": "scoreTree"
        },
        "type": "add_scoreTree",
        "dataId": "ScoreTree"
      }
    ]
  </script>
<div id="demo" class="content">
    <rs-score score-tree-id="ScoreTree"></rs-score>
    <script src="/static/js/ReasonScoreFull.js"></script>
</div>
