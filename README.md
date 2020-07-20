#  Deck Score

Calculates the relative rating of a Yugioh deck over a period of time, based on data from [https://www.duellinksmeta.com/top-decks/](https://www.duellinksmeta.com/top-decks/). The calculation uses a relative comparison between the decks and does not take into account of the absolute performance difference.

The pure ratings found on the site mentioned above only covers ratings on a month to month basis. Ratings fluctuate over the months as new decks appear and some decks fall behind. We wish to capture the decks that perform well over the long run and weed out the decks that perform well only for short bursts. The results of the tool can be used to decide what deck to invest in.

## Prerequisites

* [nvm](https://github.com/nvm-sh/nvm)

## Getting Started

1. Set the correct version of node

```
    nvm use
```

2. Install node dependencies

```
    npm install
```

3. Build javascript

```
    npm run build
```

4. Compute scores 

```
    npm start
```

Results

```json
[
  { score: 26, deck: 'shiranui' },
  { score: 25, deck: 'darkmagician' },
  { score: 23, deck: 'blackwings' },
  { score: 19, deck: 'elementsabers' },
  { score: 10, deck: 'crystrons' },
  { score: 6, deck: 'cyberdragon' },
  { score: 6, deck: 'darklords' },
  { score: 5, deck: 'witchcrafter' },
  { score: 5, deck: 'blueeyes' },
  { score: 5, deck: 'thunderdragons' },
  { score: 2, deck: 'lunalight' },
  { score: 2, deck: 'fortunelady' },
  { score: 1, deck: 'lightsworn' }
]
```

## Limitations

Data does not get pulled automatically from the website. It has to be incorporated into the script manually for now.
